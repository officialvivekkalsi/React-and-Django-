import React from "react";
import "../home.css";
import { Container, Row } from "react-bootstrap";
function Footer() {
  return (
    <footer className="copyright">
      <Container>
        <Row>
          {/* <Col className="text-center py-3"> */}
          Copyright &copy; Shortway Shop
          {/* </Col> */}
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
