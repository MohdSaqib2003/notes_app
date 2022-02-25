import App from './App.js';

const root = document.getElementById('app');

const app = new App(root);


// import NotesView from "./NotesView.js";
// import NotesAPI from './NotesAPI.js';

// const app = document.getElementById('app');
// const view = new NotesView(app, {
//     onNoteAdd() {
//         console.log('Note added');
//     },
//     onNoteEdit(newTitle, newBody) {
//         console.log(newTitle);
//         console.log(newBody);
//     },
//     onNoteSelect(id){
//         console.log(id);
//     },
//     onNoteDelete(id){
//         console.log("Deleted ",id);
//     }
// });

// const notes = NotesAPI.getAllNotes();
// view.updateNoteList(notes);
// view.updateActiveNote(notes[0]);
