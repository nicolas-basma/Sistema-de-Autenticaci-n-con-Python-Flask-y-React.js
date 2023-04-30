import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import useStore from "../store/appContext.jsx";
import "../../styles/private.css";

const Private = () => {
  const navigate = useNavigate();
  const { action, store } = useStore();
  const { user } = store;
  const { handlePrivateInfo } = action;

  useEffect(() => {
    handlePrivateInfo(navigate);
  }, []);

  return (
    <>
      <div className="user">
        <h1>Welcome {user.email}!</h1>
        <h4>ID user : {user.id}</h4>
      </div>
      <Card className="private">
        <Card.Img src="https://www.mos.org/sites/dev-elvis.mos.org/files/images/main/uploads/slides/ExUni-LP.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card className="private">
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img src="https://images.newscientist.com/wp-content/uploads/2020/08/19163900/credit_irina-dmitrienko-_-alamy.jpg?crop=16:9,smart&width=1200&height=675&upscale=true" />
      </Card>
    </>
  );
};

export default Private;
