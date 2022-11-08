import firebase from "firebase";
import 'firebase/auth'
import'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDI-cQpD5dEM9JcQWzjpZCZ2DH4PgY0AkE",
    authDomain: "react-olx-1a294.firebaseapp.com",
    projectId: "react-olx-1a294",
    storageBucket: "react-olx-1a294.appspot.com",
    messagingSenderId: "883701187946",
    appId: "1:883701187946:web:51c6007a9454ed688a1113",
    measurementId: "G-QPWZN6K4FG"
  };

  export default firebase.initializeApp(firebaseConfig)