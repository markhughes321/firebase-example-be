const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notes');
const db = require('../config/firebase.js');

router.get('/', notesController.getNotes);
router.post('/', notesController.createNote);
router.put('/:noteId', notesController.updateNote);
router.delete('/:noteId', notesController.deleteNote);

module.exports = router;
