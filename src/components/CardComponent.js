import React from "react";
import { Card } from "react-bootstrap";

export const CardComponent = ({ title, content }) => {
  return (
    <Card style={{ marginTop: "10px" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};
