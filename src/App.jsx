import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Card,
  Image,
} from "react-bootstrap";
import Header from "./components/Header/Header";
import "./App.css";
import Photos from "./components/photos/Photos";

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
            <Card>
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={4} md={2}>
                    <Image
                      width={80}
                      height={80}
                      src="./profile.jpg"
                      roundedCircle
                      fluid
                    />
                  </Col>
                  <Col xs={8} md={10}>
                    <h3>Softmint Software Solutions </h3>
                    <p>Likes: 100</p>
                    <Button variant="primary" className="mr-2">
                      WhatsApp
                    </Button>
                    <Button variant="primary" className="mr-2">
                      Message
                    </Button>
                    <Button variant="outline-primary">Like</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* navigation tab start */}
        <Navbar bg="light" expand="lg" className="mt-4">
          <Navbar.Brand href="#">Navigation Tabs</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* navigation tab end */}
        <Row className="mt-4">
          <Col md={6}>
            {/* intro start */}
            <Card>
              <Card.Body>
                <Card.Title>Intro</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus maxime fugiat quis vitae asperiores, iste suscipit.
                  Inventore quo error, nam impedit officia totam consequuntur
                  fugit, laboriosam neque corporis, laborum quas.
                </Card.Text>
              </Card.Body>
            </Card>
            {/* intro start */}
          </Col>
          <Col md={6}>
            {/* featured start */}
            <Card>
              <Card.Body>
                <Card.Title>Featured</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci aut exercitationem laudantium? Consectetur, ipsa
                  quibusdam vitae officia laboriosam corrupti pariatur excepturi
                  adipisci possimus neque laborum eaque harum non atque in?
                </Card.Text>
              </Card.Body>
            </Card>
            {/* featured end */}
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6}>
            {/* photos section start */}
            <Photos />
            {/* photos section end */}
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Posts</Card.Title>
                <Card.Text>Posts section content...</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
