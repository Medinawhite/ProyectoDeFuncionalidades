import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import style from '../Estilos/navbar.module.css'
function Navbars() {
    return (
            <Navbar collapseOnSelect expand="lg" className={style.color} variant="dark" fixed="top" >
                <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/form">Formularios</Nav.Link>
                    <NavDropdown title="Funcionalidades" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/countdown">Cuenta Atrás</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}
export default Navbars;
