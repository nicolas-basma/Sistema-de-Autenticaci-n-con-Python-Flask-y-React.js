"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required,get_jwt_identity


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def create_user():
    new_user = request.json
    user_create =  User(
        email = new_user["email"],
        password = new_user["password"],
        is_active = new_user["is_active"]
    )
    db.session.add(user_create)
    db.session.commit()
    response = user_create.serialize()
    return jsonify(response)


@api.route('/login', methods=['POST'])
def handle_login():

    user_login = request.json 
    user = User.query.filter_by(email=user_login["email"]).first()
    login = user.serialize()
    user_password = user.password_control()
    if user_login["password"] != user_password:
        return jsonify({"msg": "Bad password"}), 401
    
    login_token = create_access_token(identity=login)
    print(login_token)
    return jsonify({ "login_token": login_token, "user_id": login["id"] })

@api.route('/private', methods=['GET'])
@jwt_required()
def private():
    user_login = get_jwt_identity()
    user = User.query.get(user_login["id"]).serialize()
    print(user)
    return jsonify({"id": user["id"], "email": user["email"] }), 200


@api.route('/deleteuser/<int:id>', methods=['DELETE'])
def deleteuser(id):
    user_to_delete = User.query.get_or_404(id)
    db.session.delete(user_to_delete)
    db.session.commit()
    print(user_to_delete)
    return user_to_delete.serialize()

@api.route('/allusers', methods=['GET'])
def all_users():
    all_users = User.query.all()
    print(all_users)
    user_list = []
    for user in all_users:
        user_list.append(user.serialize())
    return  jsonify(user_list)