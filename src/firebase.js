import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKvaYcPHtxORX8dZePR_ByIaMyF2Tx_qs",
  authDomain: "financepro-f2c6b.firebaseapp.com",
  projectId: "financepro-f2c6b",
  storageBucket: "financepro-f2c6b.firebasestorage.app",
  messagingSenderId: "184646031485",
  appId: "1:184646031485:web:5a2d9b0370d5b1cfd5b914",
  measurementId: "G-JLGWKMB852",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };