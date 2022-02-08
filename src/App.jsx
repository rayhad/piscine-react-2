import './style/App.css';
import React from "react";
import { Link } from 'react-router-dom';
import { Button, Col, Row, Container} from 'react-bootstrap'

export default function App(){
  return(

    <Container className='background'>
      <Row className='row-app my-auto'>
        <Col className='col-app-1 my-auto col-4'><h1>Accueil</h1></Col>
        <Col className='col-app-2 my-auto col-8'>
          <Button as={Link} to={'../CarnetDeNote'} style={{marginBottom:'15%'}} className='buttonAccueil'><p style={{lineHeight:'10vh', fontSize:'3vw'}}>Carnet de notes</p></Button>
          <Button as={Link} to={'../Statistiques'} className='buttonAccueil'><p style={{lineHeight:'10vh', fontSize:'3vw'}}>Statistiques</p></Button>
        </Col>
      </Row>
    </Container>
  )
}

