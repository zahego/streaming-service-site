import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class MainNav extends Component {
    render() {
        return (
            <Navbar fixed="top" bg="dark" variant="dark">
                <Navbar.Brand><Link to="/">Movie Streaming</Link></Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/profile" className="nav-link">Profile</Link>
                    <Link to="/discover" className="nav-link">Discover</Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        )
    }
}

export default MainNav