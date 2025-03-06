// Utils
import { Navbar, Container } from "react-bootstrap";

// Styling
import "./Footer.css";

function Footer() {
  return (
    <Navbar className="footer" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Footer;
