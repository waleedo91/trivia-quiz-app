// Utils
import { Navbar, Container } from "react-bootstrap";

// Styling
import "./TopBar.css";

function TopBar() {
  return (
    <Navbar
      className="bg-body-tertiary navigation-bar"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img alt="" src="/img/logo.svg" className="" /> React Bootstrap
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TopBar;
