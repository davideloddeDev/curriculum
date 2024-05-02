import { Logo } from "./Logo";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import "./css/headerHome.css";


export function HeaderHome() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link">Dati Anagrafici</Nav.Link>
              <Nav.Link href="#link">I Miei Studi</Nav.Link>
              <Nav.Link href="#link">I Miei Lavori</Nav.Link>
              <Nav.Link href="#link">Contatti</Nav.Link>
              
            </Nav>
            
          </Navbar.Collapse>
          <Button variant="primary">Primary</Button>
        </Container>
        
      </Navbar>
      
    </>
  );
}
