import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdmYOnHRMQ7y1v1bKQ17TV8PLlX2KAznI",
  authDomain: "clone-6fa8f.firebaseapp.com",
  projectId: "clone-6fa8f",
  storageBucket: "clone-6fa8f.appspot.com",
  messagingSenderId: "91987233005",
  appId: "1:91987233005:web:f332dfe870c8c6e9c624e4",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
