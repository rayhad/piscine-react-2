import React from 'react'
import piscinelogo from '../images/piscinelogo.png'
import {Navbar, Nav, Container, Image} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../pages/CarnetdeNote'

export default function header(){
    return(
        <Navbar bg="dark" expand="lg" variant='dark'>
        <Container>
          <img src={piscinelogo} width={30} height={30} style={{marginRight:'1%'}}/>
          <LinkContainer to ="/">
          <Navbar.Brand href="#home"> React-Piscine ! </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
              <Nav.Link href="/">Accueil</Nav.Link>
              </LinkContainer>
              <LinkContainer to="./CarnetdeNote">
              <Nav.Link>Carnet de note</Nav.Link>
              </LinkContainer>
              <LinkContainer to="./Statistiques">
              <Nav.Link>Statistiques</Nav.Link>
              </LinkContainer>
              <LinkContainer to="./ListeCarnet">
                <Nav.Link>Listes des carnets de notes</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}