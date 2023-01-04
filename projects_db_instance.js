import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDw5hnjTxxrDnml3FP4HHQe5uU7s7TcoH0",
  authDomain: "website-373507.firebaseapp.com",
  databaseURL: "https://website-373507-default-rtdb.firebaseio.com",
  projectId: "website-373507",
  storageBucket: "website-373507.appspot.com",
  messagingSenderId: "369185750880",
  appId: "1:369185750880:web:df32c889660211f83d6805",
  measurementId: "G-HQE56D0V12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db;