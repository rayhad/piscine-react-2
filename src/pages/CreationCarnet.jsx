import '../style/CreationNote.css';
import React from 'react';
import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Card, Button, Form} from 'react-bootstrap'

export default function CreationCarnet(){
    const [CarnetAdd, setCarnetAdd] = useState({
        id:'',
        titre:'',
        categorie:''
    })

    const navigate = useNavigate()

    function add(e){
        e.preventDefault()
    
    const id = Date.now()
    let tmpCarnet = {...CarnetAdd}
    tmpCarnet.id = id
    setCarnetAdd(tmpCarnet)

    let carnets = localStorage.getItem('Piscine-Carnet')
    if (carnets === null) carnets= '[]'
    carnets = JSON.parse(carnets)
    carnets.push(tmpCarnet)
    localStorage.setItem('Piscine-Carnet', JSON.stringify(carnets))
    navigate('/ListeCarnet')
}
    
    return(
        <div>
            <div className='cardContainer'>
                <Card className='cardButton'>
                    <Card.Body>
                        <Card.Title id="creationTitle">Création d'un carnet</Card.Title>
                        <Button className="btnCreation1">Prévisualiser</Button>
                        <Button as={Link} to={'../CarnetdeNote'} className='btnCreation1'>Précedent</Button>
                    </Card.Body>
                </Card>

                <Card className='cardCreation'>
                    <Form onSubmit={e => add(e)}>
                        <Card.Body>
                            <Card.Title>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Insérez un titre à votre carnet"
                                    value ={CarnetAdd.titre}
                                    onChange={e => {let tmp ={...CarnetAdd}
                                    tmp.titre=e.target.value
                                    setCarnetAdd(tmp)}} required />
                                </Form.Group>
                            </Card.Title>
                            <Form.Group>
                        <Form.Select value={CarnetAdd.categorie} onChange={e => {
                            let tmp = {...CarnetAdd}
                            tmp.categorie = e.target.value
                            setCarnetAdd(tmp)
                        }}
                        required>
                            <option value="null">Sélectionnez une catégorie</option>
                            <option value="1">Catégorie 1</option>
                            <option value="2">Catégorie 2</option>
                            <option value="3">Catégorie 3</option>
                        </Form.Select>
                        </Form.Group>
                        </Card.Body>
                        <br></br>
                        <Button variant="success" type="submit" className="Enregistrer-annuler">Enregistrer</Button>
                        <Button as={Link} to={'../ListeCarnet'}className="Enregistrer-annuler">Annuler</Button>
                    </Form>
                </Card>
            </div>
        </div>
    )
}