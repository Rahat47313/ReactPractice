import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyArdWWjmuZEjkypUj4eq4TOZ4PPaZkE184",
  authDomain: "react-note-app-d5dd1.firebaseapp.com",
  projectId: "react-note-app-d5dd1",
  storageBucket: "react-note-app-d5dd1.appspot.com",
  messagingSenderId: "65122875352",
  appId: "1:65122875352:web:9065c9cc8dbbe9921724ad"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")