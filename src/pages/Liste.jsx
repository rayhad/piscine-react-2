import {Container, Row, Col, Button, Table, Card, Form, Nav, Navbar, NavDropdown, FormControl } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../style/Liste.css'
import Search from './Search'

// ------------------FUNCTION-----------------------

export default function Liste (){
    const [notes, setNotes] = useState([])
    const [notesSearch, setNotesSearch] = useState([])
    const [isSwitchOn, setIsSwitchOn] = useState({})
    const [searchText, setSearchText] = useState('');
    

    // ----------------- LOCAL STORAGE -----------------

    
    useEffect(() =>{
        let datas = localStorage.getItem('Piscine-Notes')
        ? localStorage.getItem('Piscine-Notes')
        :[]
        datas = JSON.parse(datas)
        setNotes(datas)
    }, [])


    // ---------------FUNCTION SEARCH ----------------


    useEffect(()=>{
        if(searchText.length == 0){
          setNotesSearch(notes)
          
        }
    },[searchText])

    function remove(note, i){
        let rep = window.confirm(
            `Êtes-vous sûr de vouloir supprimer la note suivante ? : ${note.titre}`
        )
        if (rep){
            let tmp = [...notes]
            tmp.splice(i, 1)
            setNotes(tmp)
            localStorage.setItem('Piscine-Notes', JSON.stringify(tmp))
        }
    }
  
 
    // --------------------------------- CARDS --------------------------------

    

      let displayNotesCard = notes.filter((note) =>{
        if (searchText == "") {
          return note
        }else if (note.titre.toLowerCase().includes(searchText.toLowerCase())){
          return note
        }}).map((note, i) => {

        return(
          <Card className='Cards-Liste' key={'notes' + note.id}>
              <Card.Body>
              
              <li><b># : </b>{i + 1}</li>
              <li><b>Titre : </b>{note.titre}</li>
              <li><b>Catégorie : </b>{note.categorie}</li>
              <li><b>Notes : </b>{note.affnote}</li>
              <td>
                  <Button as={Link} to={'../ModifNote/' + note.id} variant="warning">Modifier</Button>
              </td>
              <td>
                  <Button variant="danger" onClick={() => remove(note, i)}>
                      Supprimer
                  </Button>
              </td>
              </Card.Body>
          </Card>
      )  
  })

    //---------------------------------TAB-------------------------------------


  let displayNotes = notes.filter((note) =>{
    if (searchText == "") {
      return note
    }else if (note.titre.toLowerCase().includes(searchText.toLowerCase())){
      return note
    }
      }).map((note, i) =>  {

        return(
          <>
            <tr key={'notes' + note.id}>
                <td>{i + 1}</td>
                <td>{note.titre}</td>
                <td>{note.categorie}</td>
                <td id="afficher-note">{note.affnote}</td>
                <td>
                    <Button as={Link} to={'../ModifNote/' + note.id} variant="warning">Modifier</Button>
                </td>
                <td>
                    <Button variant="danger" onClick={() => remove(note, i)}>
                        Supprimer
                    </Button>
                </td>
            </tr>
          </>
        )
    })


// -------------------------- FUNCTION SWITCH + RETURN NAVBAR LISTE----------------------


    const onSwitchAction = () => {
      setIsSwitchOn(!isSwitchOn)
    }

    if (isSwitchOn){

    
      return (
          <>
          <div className='ListContainer'>

      <Navbar bg="dark" variant="dark" expand="lg" className="NavList">
        <Container fluid>
            <Navbar.Brand>Liste des carnets</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
              </Nav>

                <p style={{
                  color:'black',
                  backgroundColor:'white', 
                  marginRight:'1em', 
                  marginBottom:'0em',
                  padding:'0.25em',
                  borderRadius:'5px',
                  fontSize:'1.125em',
                  border:'1px solid white'
                  }}>
                    Card / Tab
                </p>

              <Form className="d-flex">
                <Form.Switch 
                  onChange={onSwitchAction}
                  id='btnSwitch-Liste'
                  checked={isSwitchOn}/>

                <Search handleSearchNote={setSearchText}/>
              </Form>
                
            </Navbar.Collapse>
        </Container>
      </Navbar>
    <Container className='tabContainer'>
  
          <Row style={{overflowY:'scroll'}} className='crudStuff'>
            <Col >
              <div className="mb-3">
                <Button as={Link} to={"../CreationNote"}>
                  Ajouter une liste
                </Button>
              </div>
  
              <Table striped bordered hover >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Titre</th>
                    <th>Categorie</th>
                    <th>Note</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                  </tr>
                </thead>
                <tbody>{displayNotes}</tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )}
        
    

  else if(!isSwitchOn){
    return(
      <>
        <div className='ListContainer'>

          <Navbar bg="dark" variant="dark" expand="lg" className="NavList">
            <Container fluid>
              <Navbar.Brand href="#">Liste des carnets</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >

                <Nav.Link href="#action1">Home</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <p style={{
                color:'black',
                backgroundColor:'white', 
                marginRight:'1em', 
                marginBottom:'0em',
                padding:'0.25em',
                borderRadius:'5px',
                fontSize:'1.125em',
                border:'1px solid white'
              }}>
                Card / Tab
              </p>

              <Form className="d-flex">
        
                <Form.Switch 
                  onChange={onSwitchAction}
                  id='btnSwitch-Liste'
                  checked={isSwitchOn}
                />
        
                <Search handleSearchNote={setSearchText}/>
        
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        <Container className='CardContainer'>
  
          <Row  className=''>
            <Col>
              <div className="mb-3">
                <Button as={Link} to={"../CreationNote"}>
                  Ajouter une liste
                </Button>
              </div>
              <tbody className='tbody-Cards' style={{display:'grid', gridTemplateColumns:'33% 33% 33%',overflowY:'scroll',width:'100%', height:'100%'}}>{displayNotesCard}</tbody>
            </Col>
          </Row>
        </Container>
      </div>
    </>
)}}