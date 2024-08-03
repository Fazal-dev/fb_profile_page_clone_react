import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Header from "./components/Header/Header";
import "./App.css";
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
      <Container>
        <Row className="justify-content-center mt-4">
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
                <Profile />
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        {/* navigation tab start */}
        <Nav_tab />
        {/* navigation tab end */}

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
