import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarComponent() {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Vocaloid Fan Concerts</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Upcoming</Nav.Link>
              <Nav.Link href="/past">Past</Nav.Link>
              <Nav.Link href="/suggest">Suggest</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}