import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Script from 'next/script';

export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Vocaloid Fan Concerts</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/upcoming">Upcoming</Nav.Link>
            <Nav.Link href="/past">Past</Nav.Link>
            <Nav.Link href="/suggest">Suggest</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* umami */}
      <Script
        src="https://umami.davidcralph.co.uk/umami.js"
        async
        defer
        data-website-id="1acfe0d2-dcd8-4fdb-b155-c9805f17f279"
      />
    </Navbar>
  );
}
