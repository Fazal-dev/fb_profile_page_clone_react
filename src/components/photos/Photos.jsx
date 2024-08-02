import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
const Photos = () => {
  const photos = [
    // Add the URLs of your photos here
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
  ];
  return (
    <Card>
      <Card.Body>
        <Card.Title>Photos</Card.Title>
        <Row>
          {photos.map((photo, index) => (
            <Col xs={6} md={4} lg={3} key={index} className="mb-4">
              <Image src={photo} thumbnail />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Photos;
