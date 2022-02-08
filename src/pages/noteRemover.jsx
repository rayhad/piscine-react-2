
export class noteRemover{
    notes
    constructor() {
        this.notes = this.setNotes()
    }
    
    remove(notes) {
        let indice = -1
        for (let i = 0; i < this.notes.length; i++)
            if (this.notes[i].id === Number(notes.id)) indice = i
    
        if (indice === -1) return false
    
        this.notes.splice(indice, 1)
        this.save()
        return true
    }
}