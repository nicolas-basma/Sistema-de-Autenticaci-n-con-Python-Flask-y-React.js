"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required,get_jwt_identity
import bcrypt


api = Blueprint('api', __name__)

@api.route('/signup', methods=['POST'])
def create_user():
    new_user = request.json
    password = bcrypt.hashpw(new_user["password"].encode('utf8'), bcrypt.gensalt())
    user_create =  User(
        email = new_user["email"],
        password = password,
        is_active = False
    )
    try:
        db.session.add(user_create)
        db.session.commit()
        response = user_create.serialize()
        return jsonify(response)
    except:
        return jsonify({"msg": "the email is already in use"}), 400


@api.route('/login', methods=['POST'])
def handle_login():

    user_login = request.json 
    user = User.query.filter_by(email=user_login["email"]).first()
    login = user.serialize()
    password = user_login["password"].encode('utf8')
    user_password = user.password_control(password)
    if not user_password:
        return jsonify({"msg": "Credential error"}), 401
    login_token = create_access_token(identity=login)
    return jsonify({ "login_token": login_token, "user_id": login["id"] })

@api.route('/private', methods=['GET'])
@jwt_required()
def private():
    user_login = get_jwt_identity()
    user = User.query.get(user_login["id"]).serialize()
    return jsonify({"id": user["id"], "email": user["email"] }), 200


@api.route('/delete-user/<int:id>', methods=['DELETE'])
def deleteuser(id):
    user_to_delete = User.query.get_or_404(id)
    db.session.delete(user_to_delete)
    db.session.commit()
    print(user_to_delete)
    return user_to_delete.serialize()

@api.route('/all-users', methods=['GET'])
def all_users():
    all_users = User.query.all()
    print(all_users)
    user_list = []
    for user in all_users:
        user_list.append(user.serialize())
    return  jsonify(user_list)