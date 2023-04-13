const db = require('../config/firebase.js');

exports.getNotes = (req, res) => {
  db.collection('notes')
    .get()
    .then(snapshot => {
      const notes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.json(notes);
    })
    .catch(err => res.status(500).json({ error: err }));
};

exports.createNote = (req, res) => {
  const note = {
    title: req.body.title,
    content: req.body.content,
  };

  db.collection('notes')
    .add(note)
    .then(docRef => {
      res.json({ id: docRef.id, ...note });
    })
    .catch(err => res.status(500).json({ error: err }));
};

exports.updateNote = (req, res) => {
  const note = {
    title: req.body.title,
    content: req.body.content,
  };

  db.collection('notes')
    .doc(req.params.noteId)
    .set(note, { merge: true })
    .then(() => {
      res.json({ id: req.params.noteId, ...note });
    })
    .catch(err => res.status(500).json({ error: err }));
};

exports.deleteNote = (req, res) => {
  db.collection('notes')
    .doc(req.params.noteId)
    .delete()
    .then(() => {
      res.json({ message: 'Note deleted' });
    })
    .catch(err => res.status(500).json({ error: err }));
};
