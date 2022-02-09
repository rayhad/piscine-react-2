import { Container, Row, Col, Form, Button, Card} from 'react-bootstrap'
import {Link,useNavigate,useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

export default function ModifNote(){
    const [Note, setNote] = useState ({})
    const [NoteEdit, setNoteEdit] = useState({
        id:'',
        id_Carnet:'',
        titre: '',
        affnote: '',
    })

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() =>{
        let liste = localStorage.getItem('Piscine-Notes')
        liste = JSON.parse(liste)
        let res = liste.filter(Note => Note.id === Number(id))

        if (res.length === 0){
            alert('Aucune note dans la base')
            navigate('/Liste')
        }else {
            setNote(res[0])
            setNoteEdit(res[0])
        }
    },[id, navigate])

    function edit(e){
        e.preventDefault()
        let liste = localStorage.getItem('Piscine-Notes')
        liste = JSON.parse(liste)

        let i_a = -1
        for (let i = 0; i < liste.length; i++)
            if (liste[i].id === Number(id)) i_a = i

        if (i_a === -1){
            alert("Erreur lors de l'enregistrement")
            return null
        }
        liste[i_a] = NoteEdit
        localStorage.setItem('Piscine-Notes', JSON.stringify(liste))
        navigate('/ListeCarnetNote/' + Note.id_Carnet )

    }
    function reset(){
        setNoteEdit(Note)
    }
    return (
        <div>
        <div className='cardContainer'>

            <Card className='cardCreation' >
            <Form onSubmit={e => edit(e)}>
                <Card.Body>
                    <Card.Title>
                        
                        <Form.Group>
                        <Form.Control type="text" placeholder='Insérez un titre à votre note' 
                        value ={NoteEdit.titre} 
                        onChange={e => {let tmp ={ ...NoteEdit } 
                        tmp.titre=e.target.value 
                        setNoteEdit(tmp)}} required />
                        </Form.Group>
                        
                    </Card.Title>
                </Card.Body>
                <Form.Group>
                    <Form.Control id="entreeNote" placeholder="Votre note..." value={NoteEdit.affnote} onChange={e => {
                        let tmp = {...NoteEdit}
                        tmp.affnote = e.target.value
                        setNoteEdit(tmp)
                    }} required/>
                </Form.Group>
                    <br></br>
                    <Button variant="success" type="submit" className="Enregistrer-annuler">Modifier et Enregistrer</Button>
                    <Button as={Link} to={'/ListeCarnetNote/' + Note.id_Carnet} className="Enregistrer-annuler">Annuler la modification</Button>
                </Form>
            </Card>
        </div>

    </div>
    )
}