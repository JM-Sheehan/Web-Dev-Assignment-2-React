import firebase from "firebase/app";
require('firebase/database');
require('firebase/auth');

var firebaseConfig = {
    apiKey: "AIzaSyCyiOYlSXGebt-HYbClHbkFYFlb-1ncMCc",
    authDomain: "tmdb-movie-app-808ea.firebaseapp.com",
    databaseURL: "https://tmdb-movie-app-808ea-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tmdb-movie-app-808ea",
    storageBucket: "tmdb-movie-app-808ea.appspot.com",
    messagingSenderId: "675723746172",
    appId: "1:675723746172:web:5bb2eefdc73042ae8622f9",
    measurementId: "G-RJZE9E6Z9T"
  };

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase, googleAuthProvider, database as default};
//   var reference = firebase.database().ref();

//   reference.set({
//       name: "web dev journey"
//   });