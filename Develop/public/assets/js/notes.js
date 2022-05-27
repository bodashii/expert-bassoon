const fs = require('fs');
const path = require('path');

function filterByQuery(query, notes) {
    let result = notes;

    if (query.title) {
        result = result.filter((note) => note.title === query.title);
    }
    return result;
}

function findById(id, notes) {
    const result = notes.filter((note) => note.id === id)[0];
    return result;
}

function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../db/notes.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return note;
}

function verifyNote(note) {
    if (!note.title || typeof note.title !== "string") {
        return false;
    }
    if (!note.text || typeof note.text !== "string") {
        return false;
    }
    return true;
}

function deleteNote(note, notes) {
    const index = notes.indexOf(note);
    notes.splice(index, 1);
    fs.writeFileSync(
        path.join(__dirnmae, '../db/notes.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return notes;
}

module.exports = { filterByQuery, findById, createNewNote, verifyNote, deleteNote };