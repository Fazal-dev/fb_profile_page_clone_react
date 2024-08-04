import React from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header/Header";
import Photos from "./components/photos/Photos";
import Intro from "./components/intro/Intro";
import Featured from "./components/Featured/Featured";
import PostList from "./components/PostList/PostList";
import Nav_tab from "./components/nav_tab/Nav_tab";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <>
      <Header />
      <Container fluid="md" className="mt-5">
        <Row className="justify-content-center w-full">
          <Col xs={12} md={8} className="text-center">
            <Image src="./cover.jpg" fluid />
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col xs={12} md={8}>
            <Row className="align-items-center">
              <Col xs={4} md={2}></Col>
              <Col xs={8} md={10}>
                <Image
                  className="profile"
                  width={150}
                  height={150}
                  src="./profile.jpg"
                  roundedCircle
                  fluid
                />
                {/* profile */}
                <Profile />
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        {/* navigation tab start */}
        <Nav_tab />

        <Container>
          <Row className="mt-4 justify-content-center">
            <Col md={6}>
              {/* intro start */}
              <Intro />
            </Col>
            <Col md={6}>
              {/* featured start */}
              <Featured />
            </Col>
          </Row>
          <Row className=" justify-content-center mt-4">
            <Col md={6}>
              {/* photos section start */}
              <Photos />
            </Col>
            <Col md={6}>
              <Card className="mb-3 ">
                <Card.Body className="p-3">
                  <Row className="d-flex justify-content-between align-items-center">
                    <Col xs="auto">
                      <strong>Post</strong>
                    </Col>
                    <Col xs="auto">
                      <Button variant="primary" className="btn-primary">
                        <i class="fa-solid fa-filter"></i> filter
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              {/* posts */}
              <PostList />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default App;
