import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router";

function App() {
  return (
    <div>
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">BURGER SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="admin">Admin</Nav.Link>
              <Nav.Link href="preparator">Preparator</Nav.Link>
              <Nav.Link href="client">Client</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
      </div>

      <div>
      <Outlet />
    </div>
    
    </div>
  );
}

export default App;
