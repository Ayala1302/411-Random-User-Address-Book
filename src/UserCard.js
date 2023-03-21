import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function UserCard(props) {
  const {
    first,
    last,
    pic,
    email,
    phone,
    age,
    index,
    isHidden,
    currentUser,
    handleClick,
  } = props;
  return (
    <Row xs={1} md={2} lg={true}>
      <Col xs={2} sm={1}>
        <Card bg="info" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={pic} />
          <Card.Body>
            <Card.Title>
              {first} {last}
            </Card.Title>
            {isHidden && currentUser === index ? (
              <Card.Text>
                <p>Age: {age}</p>
                <p>E-mail: {email}</p>
                <p>Phone: {phone}</p>
              </Card.Text>
            ) : (
              <div></div>
            )}
            <Button variant="light" onClick={() => handleClick(index)}>
              {isHidden && currentUser === index
                ? "Hide Details"
                : "Show Details"}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default UserCard;
