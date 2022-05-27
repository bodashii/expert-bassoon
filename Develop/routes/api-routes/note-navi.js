const router = require("express").Router();
const { filterByQuery, findById, createNewNote } = require('../../public/assets/js/notes');
const { notes } = require('../../db/notes.json')

// filter queries
router.get('/notes', (req, res) => {
    let result = notes;
    if (req.query) {
        result = filterByQuery(req.query, results);
    }
    res.json(result);
})

// lookup by id
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.sendStatus(404)
    }
})

// create note
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!verifyNote(req.body)) {
        res.status(400).send("Whoops this note needs to be revised.");
    } else {
        const note = createNewNote(req.body, notes);
        res.json(req.body);
    }
})

module.exports = router;