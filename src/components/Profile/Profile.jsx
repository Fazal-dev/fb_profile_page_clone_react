import React from "react";
import { Col, Row, Button, Stack } from "react-bootstrap";
import "./profile.css";

const Profile = () => {
  return (
    <Row className="align-items-center justify-content-between my-2">
      <Col xs={12} md={6} sm={8} className="profile-details mb-3 mb-md-0">
        <h3> Softmint Software Solutions</h3>
        <p> 2.4k Likes . 2.4k followers</p>
      </Col>
      <Col xs={12} md={6} sm={4} className="text-md-right">
        <Stack
          direction="horizontal"
          gap={2}
          className="justify-content-md-end"
        >
          <Button variant="primary" className="btn-whatsapp">
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </Button>
          <Button variant="outline-secondary" className="btn-message">
            <i className="fa-brands fa-facebook-messenger"></i> Message
          </Button>
          <Button variant="outline-primary" className="btn-like">
            <i className="fa-regular fa-thumbs-up"></i> Like
          </Button>
        </Stack>
      </Col>
    </Row>
  );
};

export default Profile;
