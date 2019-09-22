/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap';
export class Dashboard extends Component {
    render() {
        return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Portal</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Zarejestruj sie</Nav.Link>
      <Nav.Link href="#deets">Zaloguj sie</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>

           )
    }
}

export default Dashboard
