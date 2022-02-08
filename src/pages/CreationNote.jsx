import '../style/CreationNote.css';
import '../style/App.css'
import React from 'react';
import {useState} from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'
import {Card, Button,Form, Col, Row, Container} from 'react-bootstrap'
import { Converter } from 'showdown'


// -------------------------FUNCTION------------------------------


export default function CreationNote() {
    const converter = new Converter()
    const { id } = useParams()
    const [NoteAdd, setNoteAdd] = useState({
        id:'',
        id_Carnet:'',
        titre: '',
        affnote: '',
    })


    const navigate = useNavigate()
    
    let carnetId = localStorage.getItem('Piscine-Carnet')
    carnetId = JSON.parse(carnetId)
    const idC = id
    console.log(idC)

    function add(e){
        e.preventDefault()

        const id = Date.now()
        let tmpNote = {...NoteAdd}
        tmpNote.id = id
        setNoteAdd(tmpNote)
        
        const idCarnet = idC
        tmpNote.id_Carnet = idC
        setNoteAdd(tmpNote) 

        let notes = localStorage.getItem('Piscine-Notes')
        if(notes === null) notes= '[]'
        notes = JSON.parse(notes)
        notes.push(tmpNote)
        localStorage.setItem('Piscine-Notes', JSON.stringify(notes))
        navigate('/ListeCarnetNote/' + idC)
    }
    
    let text = NoteAdd.affnote,
    htmlMD = converter.makeHtml(text)
  
    // ------------------------ RETURN ----------------------------------------

    return(
        <div>
                <Container className='background'>
                    <Row className='row-app'>


                        <Col className='col-app-1 my-auto col-8'>
                            <Card className='cardCreation my-auto' >
                                <Form onSubmit={e => add(e)}>
                                    <Card.Body>
                                        <Card.Title>
                                        
                                            <Form.Group>
                                                <Form.Control type="text" placeholder='Insérez un titre à votre note' 
                                                value ={NoteAdd.titre} 
                                                onChange={e => {let tmp ={ ...NoteAdd } 
                                                tmp.titre=e.target.value 
                                                setNoteAdd(tmp)}} required />
                                            </Form.Group>
                                        </Card.Title>


                                        <Form.Group>
                                            <Form.Select value={NoteAdd.categorie} onChange={e => {
                                                let tmp = {...NoteAdd}
                                                tmp.categorie = e.target.value
                                                setNoteAdd(tmp)
                                                }}required>

                                                <option>Sélectionnez une catégorie</option>
                                                <option value="1">Catégorie 1</option>
                                                <option value="2">Catégorie 2</option>
                                                <option value="3">Catégorie 3</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Card.Body>

                                    <Form.Group>
                                        
                                        <Form.Control 
                                            style={{resize:'none'}} 
                                            as="textarea" 
                                            id="entreeNote" 
                                            placeholder="Votre note..." 
                                            value={NoteAdd.affnote} 
                                            onChange={e => {
                                                let tmp = {...NoteAdd}
                                                tmp.affnote = e.target.value
                                                setNoteAdd(tmp)
                                                }} required/>
                                    </Form.Group>

                                    <Button variant="success" type="submit" className="Enregistrer-annuler">Enregistrer</Button>
                                    <Button as={Link} to={'../ListeCarnetNote/' + idC } className="Enregistrer-annuler">Annuler</Button>
                                </Form>
                            </Card>       
                        </Col>
                            
                        <Col style={{marginLeft:'-5%', height:'45vh',boxShadow: '12px 12px 2px 1px rgba(0, 0, 0, 0.5)', borderRadius:'10px', border:'none'}} className='col-app-2 my-auto col-4'>
                            <Card style={{width:'100%', height:'95%'}}>
                                <Card.Body>
                                    <div dangerouslySetInnerHTML={{ __html: htmlMD }} />                                
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}


                        
            
