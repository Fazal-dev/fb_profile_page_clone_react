import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";

const Featured = () => {
  const features = [
    {
      image: "https://via.placeholder.com/600x400",
      profilePicture: "https://via.placeholder.com/50",
      date: "2024-08-02",
      profileName: "John Doe",
      description: "Lorem ipsum dolor sit amet consectetur ",
    },
    {
      image: "https://via.placeholder.com/600x400",
      profilePicture: "https://via.placeholder.com/50",
      date: "2024-08-02",
      profileName: "Jane Smith",
      description: "Lorem ipsum dolor sit amet consectetur ",
    },
  ];

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <strong>Featured</strong>
          </Card.Title>
          <Row>
            {features.map((feature, index) => (
              <Col xs={12} md={6} key={index} className="mb-4">
                <Card>
                  <Card.Body>
                    <Row>
                      <Col xs={3} className="text-center">
                        <Image
                          src={feature.profilePicture}
                          roundedCircle
                          fluid
                        />
                      </Col>
                      <Col xs={9}>
                        <Card.Text className="mb-1 ">
                          {feature.date} - {feature.profileName}
                        </Card.Text>
                        <Card.Text>{feature.description}</Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Img variant="bottom" src={feature.image} />
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
