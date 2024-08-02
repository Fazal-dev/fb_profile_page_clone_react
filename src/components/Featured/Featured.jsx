import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const Featured = () => {
  const features = [
    {
      image: "https://via.placeholder.com/150",
      title: "Feature 1",
      date: "2024-08-02",
      profileName: "John Doe",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: "https://via.placeholder.com/150", // Example image URL
      title: "Feature 2",
      date: "2024-08-02",
      profileName: "Jane Smith",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  ];

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Featured</Card.Title>
          <Row>
            {features.map((feature, index) => (
              <Col xs={12} md={6} sm={6} lg={6} key={index} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">
                      {feature.date} - {feature.profileName}
                    </Card.Subtitle>
                  </Card.Body>
                  <Card.Img variant="top" src={feature.image} />
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Featured;
