// Class Component
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    console.log('Navbar mounted');
  }

  render() {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">PRSC Admin</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Dashboard</Nav.Link>
              <Nav.Link href="/listings">Listings</Nav.Link>
              <Nav.Link href="/list">List</Nav.Link>
              <Nav.Link href="/orders">Orders</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default MyNavbar;

