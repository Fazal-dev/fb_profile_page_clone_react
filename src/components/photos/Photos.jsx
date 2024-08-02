import React from "react";

import { Card, Row, Col, Image } from "react-bootstrap";
import "./photos.css";
const Photos = () => {
  const photos = [
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
        <Card.Title>
          <Row className="align-items-center mb-3">
            <Col xs={8} sm={8} className="d-flex align-items-center">
              <Card.Title className="mb-0">Photos</Card.Title>
            </Col>
            <Col xs={4} sm={4} className="text-right">
              <span
                className="text-primary photo-see-all"
                style={{ cursor: "pointer" }}
              >
                See all photos
              </span>
            </Col>
          </Row>
        </Card.Title>
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
