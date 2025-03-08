// Utils
import { Navbar, Container } from "react-bootstrap";
import Logo from "../../images/—Pngtree—quiz time_8530811.png";

// Styling
import "./TopBar.css";

function TopBar() {
  return (
    <div className="navigation-bar">
      <Navbar sticky="top">
        <Container className="brand-container">
          <Navbar.Brand href="/" className="site-name">
            <img alt="quiz time logo" src={Logo} className="site-logo" /> Quiz
            Time!!
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopBar;
