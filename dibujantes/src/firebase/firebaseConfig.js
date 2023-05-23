import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk6sU7WgZ16aYpxaO7eg0cMQoyv2OQOYE",
  authDomain: "drawers7t.firebaseapp.com",
  projectId: "drawers7t",
  storageBucket: "drawers7t.appspot.com",
  messagingSenderId: "528627521574",
  appId: "1:528627521574:web:e7edd20ad5d0c8687feee7"
};

// Inicializar Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  const auth = getAuth()
  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, db, googleAuthProvider, firebase };