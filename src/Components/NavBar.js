/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import ListOfPosts from './Posts/ListOfPosts';
export class NavBar extends Component {
    render() {
        return (
            <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">Portal</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
        <Nav.Link href="/SignUp">Zarejestruj sie</Nav.Link>
        <Nav.Link href="/CreatePost">Stwórz Post</Nav.Link>

        </Nav>
    </Navbar.Collapse>
    </Navbar>
  <ListOfPosts></ListOfPosts>
    </div>
    )
    }
}

export default NavBar