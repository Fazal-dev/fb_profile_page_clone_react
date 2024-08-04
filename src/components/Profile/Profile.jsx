import React from "react";
import { Col, Row, Button, Stack } from "react-bootstrap";
import "./profile.css";

const Profile = () => {
  return (
    <div className="">
      <Row className="align-items-center justify-content-between my-2">
        <Col md={6} className="profile-details mb-3 mb-md-0">
          <h3> Softmint Software Solutions</h3>
          <p> 2.4k Likes . 2.4k followers</p>
        </Col>
        <Col md={6} className="text-md-right">
          <Stack
            direction="horizontal"
            gap={1}
            className="justify-content-md-end gx-5"
          >
            <div>
              <Button variant="primary" className="btn-whatsapp">
                <i className="fa-brands fa-whatsapp"></i> WhatsApp
              </Button>
            </div>
            <div>
              <Button variant="outline-secondary" className="btn-message">
                <i className="fa-brands fa-facebook-messenger"></i> Message
              </Button>
            </div>
            <div>
              <Button variant="outline-primary" className="btn-like">
                <i className="fa-regular fa-thumbs-up"></i> Like
              </Button>
            </div>
          </Stack>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
