const admin = require('firebase-admin');
const serviceAccount = require('../test-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: 'test-project-1b36f',
});

module.exports = admin.firestore();