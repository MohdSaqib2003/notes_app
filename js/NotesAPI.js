export default class NotesAPI {

    static getAllNotes() {
        const notes = JSON.parse(window.localStorage.getItem('notes') ? window.localStorage.getItem('notes') : '[]');

        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNote(noteToSave) {
        let notes = NotesAPI.getAllNotes();
        const existing = notes.find(note=>note.id == noteToSave.id);

        // updated note
        if(existing) {
            existing.title = noteToSave.title,
            existing.body = noteToSave.body,
            existing.updated = new Date().toISOString(); 
        }else{
            noteToSave.id = Math.floor(Math.random() * 100000);
            noteToSave.updated = new Date().toISOString();
            notes = [...notes,noteToSave];           // same as push operation notes.push(noteToSave)
        }
        
        window.localStorage.setItem('notes',JSON.stringify(notes));
        
    }
    
    static deleteNote(id) {
        const notes = NotesAPI.getAllNotes();
        const newNotes  = notes.filter(note=>note.id != id);
        window.localStorage.setItem('notes',JSON.stringify(newNotes));
    }
}