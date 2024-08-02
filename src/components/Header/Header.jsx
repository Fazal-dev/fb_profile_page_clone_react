import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";
const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary main-container">
        <Navbar.Brand href="#home">
          <img
            width="40"
            height="40"
            className="d-inline-block align-top"
            src="./fb_logo.png"
          />{" "}
        </Navbar.Brand>
        <Form inline="true">
          <InputGroup className="mx-auto custom-input-group">
            <InputGroup.Text className="search-icon" id="basic-addon1">
              <i className="fa-solid fa-magnifying-glass"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Search Facebook"
              aria-label="Search Facebook"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" nav-icons">
            <Nav.Link href="#home" className="mx-6 nav-icon">
              <i className="fa-solid fa-house"></i>
            </Nav.Link>
            <Nav.Link href="#video" className="mx-6 nav-icon">
              <i className="fa-solid fa-video"></i>
            </Nav.Link>
            <Nav.Link href="#marketplace" className="mx-6">
              <i className="fa-solid fa-store"></i>
            </Nav.Link>
            <Nav.Link href="#group" className="mx-6 nav-icon">
              <i className="fa-solid fa-user-group"></i>
            </Nav.Link>
            <Nav.Link href="#gaming" className="mx-6 nav-icon">
              <i className="fa-solid fa-gamepad"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Row>
          <Col>icons</Col>
        </Row>
      </Navbar>
    </>
  );
};

export default Header;
