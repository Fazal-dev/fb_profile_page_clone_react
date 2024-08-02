import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./intro.css";

const Intro = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Intro</Card.Title>
        <Card.Text>
          <p className="higlight-text">
            We are a boutique digital transformation consultancy and software
            development company that provides c
          </p>
          <hr />

          <ListGroup variant="flush">
            <ListGroup.Item>
              <i className="fas fa-map-marker-alt"></i>
              <span>
                No 310/1/1, Kaduwela Road, Koswatte Junction, Battaramulla, Sri
                Lanka
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fas fa-phone"></i>
              <span>077 726 1026</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fas fa-envelope"></i>
              <span>hello@softmint.net</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fas fa-globe"></i>

              <a
                href="https://softmint.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>softmint.net</span>
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fas fa-clock"></i> <span>Always open</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fas fa-star"></i>
              <span>Not yet rated (1 Review)</span>
            </ListGroup.Item>
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Intro;
