import {Form, Button, Card} from 'react-bootstrap'
import {useNavigate , useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

export default function ModifCarnet(){
    const [carnet, setcarnet] = useState ({})
    const [carnetEdit, setcarnetEdit] = useState({
        id:'',
        titre: '',
        categorie: '',
    })

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() =>{
        let liste = localStorage.getItem('Piscine-Carnet')
        liste = JSON.parse(liste)
        let res = liste.filter(carnet => carnet.id === Number(id))
        
        if (res.length === 0){
            alert('Aucune note dans la base')
            navigate('/ListeCarnet')
        }else {
            setcarnet(res[0])
            setcarnetEdit(res[0])
        }
        
    },[id, navigate])

    function edit(e){
        e.preventDefault()
        let liste = localStorage.getItem('Piscine-Carnet')
        liste = JSON.parse(liste)

        let i_a = -1
        for (let i = 0; i < liste.length; i++)
            if (liste[i].id === Number(id)) i_a = i

        if (i_a === -1){
            alert("Erreur lors de l'enregistrement")
            return null
        }
        liste[i_a] = carnetEdit
        localStorage.setItem('Piscine-Carnet', JSON.stringify(liste))
        navigate('/ListeCarnet')
    }
    function reset(){
        setcarnetEdit(carnet)
    }

    return (
        <div>
        <div className='cardContainer'>
            <Card className='cardButton'>
                <Card.Body>
                    <Card.Title id="creationTitle">Création d'une note</Card.Title>
                    <Button className="btnCreation1">Prévisualiser</Button>
                    <Button as={Link} to={'../ListeCarnet'} className="btnCreation1">Précédent</Button>
                </Card.Body>
            </Card>

            <Card className='cardCreation' >
            <Form onSubmit={e => edit(e)}>
                <Card.Body>
                    <Card.Title>
                        
                        <Form.Group>
                        <Form.Control type="text" placeholder='Insérez un titre à votre note' 
                        value ={carnetEdit.titre} 
                        onChange={e => {let tmp ={ ...carnetEdit } 
                        tmp.titre=e.target.value 
                        setcarnetEdit(tmp)}} required />
                        </Form.Group>
                        
                    </Card.Title>
                    <Form.Group>
                    <Form.Select value={carnetEdit.categorie} onChange={e => {
                        let tmp = {...carnetEdit}
                        tmp.categorie = e.target.value
                        setcarnetEdit(tmp)
                    }}
                    required>
                        <option>Sélectionnez une catégorie</option>
                        <option value="1">Catégorie 1</option>
                        <option value="2">Catégorie 2</option>
                        <option value="3">Catégorie 3</option>
                    </Form.Select>
                    </Form.Group>
                </Card.Body>
                    <br></br>
                    <Button variant="success" type="submit" className="Enregistrer-annuler">Modifier et Enregistrer</Button>
                    <Button className="Enregistrer-annuler">Annuler la modification</Button>
                </Form>
            </Card>
        </div>

    </div>
    )
}