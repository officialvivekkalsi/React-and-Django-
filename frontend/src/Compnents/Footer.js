import React from "react";
import "../home.css";
import { Container, Row } from "react-bootstrap";
function Footer() {
  return (
    <footer className="copyright">
      <Container>
        <Row>Copyright &copy; Shortway Shop</Row>
      </Container>
    </footer>
  );
}

export default Footer;
