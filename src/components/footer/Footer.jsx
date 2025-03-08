// Utils
import { Navbar, Container } from "react-bootstrap";

// Styling
import "./Footer.css";

function Footer() {
  return (
    <Navbar fixed="bottom" className="footer">
      <Container>
        <Navbar.Brand href="/" className="footer-brand">
          Quiz Time! &copy;2025
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Footer;
