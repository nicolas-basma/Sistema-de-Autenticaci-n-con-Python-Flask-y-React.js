import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import useStore from "../store/appContext.jsx";

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
      <h1>{user.email}</h1>
      <h6>{user.id}</h6>
      <Card>
        <Card.Img
          variant="top"
          src="https://www.mos.org/sites/dev-elvis.mos.org/files/images/main/uploads/slides/ExUni-LP.jpg"
        />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img
          variant="bottom"
          src="https://images.newscientist.com/wp-content/uploads/2020/08/19163900/credit_irina-dmitrienko-_-alamy.jpg?crop=16:9,smart&width=1200&height=675&upscale=true"
        />
      </Card>
    </>
  );
};

export default Private;
