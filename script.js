
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const noteText = document.getElementById('note-text');
    const addNoteBtn = document.getElementById('add-note-btn');
    const notesList = document.getElementById('notes-list');

    // Function to add a new note
    const addNote = () => {
        const text = noteText.value.trim();
        if (!text) {
            alert('Note cannot be empty!');
            return;
        }

        const noteItem = document.createElement('li');
        noteItem.className = 'note-item';

        const noteContent = document.createElement('span');
        noteContent.textContent = text;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            notesList.removeChild(noteItem);
        });

        noteItem.appendChild(noteContent);
        noteItem.appendChild(deleteBtn);

        notesList.appendChild(noteItem);
        noteText.value = '';
    };

    addNoteBtn.addEventListener('click', addNote);
});


//
// const API_URL = 'https://pmsrpshxw4.execute-api.ap-south-1.amazonaws.com/prod';
//
// const addNote = async () => {
//     const text = noteText.value.trim();
//     if (!text) {
//         alert('Note cannot be empty!');
//         return;
//     }
//
//     await fetch(API_URL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ NoteID: Date.now().toString(), content: text })
//     });
//
//     await loadNotes();
//     let noteText;
//     noteText.value = '';
// };
//
// const loadNotes = async () => {
//     const response = await fetch(API_URL);
//     const notes = await response.json();
//     let notesList;
//     notesList.innerHTML = '';
//     notes.forEach(note => {
//         const noteItem = document.createElement('li');
//         noteItem.className = 'note-item';
//
//         const noteContent = document.createElement('span');
//         noteContent.textContent = note.content;
//
//         const deleteBtn = document.createElement('button');
//         deleteBtn.textContent = 'Delete';
//         deleteBtn.addEventListener('click', async () => {
//             await fetch(API_URL, {
//                 method: 'DELETE',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ NoteID: note.NoteID })
//             });
//             await loadNotes();
//         });
//
//         noteItem.appendChild(noteContent);
//         noteItem.appendChild(deleteBtn);
//         notesList.appendChild(noteItem);
//     });
// };
//
// let addNoteBtn;
// addNoteBtn.addEventListener('click', addNote);
// document.addEventListener('DOMContentLoaded', loadNotes);
//
