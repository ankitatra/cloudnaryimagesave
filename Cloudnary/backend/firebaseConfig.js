const firebase = require('firebase/app');
require('firebase/database'); // Import Firebase Realtime Database module
const firebaseConfig = require('./firebaseConfig'); // Import your Firebase configuration

firebase.initializeApp(firebaseConfig);
