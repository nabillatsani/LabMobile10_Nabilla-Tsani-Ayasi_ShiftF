// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAu1slE51aYTTuUp93jN-0dZw5xkxBsODQ",
    authDomain: "vue-firebase-6be7e.firebaseapp.com",
    projectId: "vue-firebase-6be7e",
    storageBucket: "vue-firebase-6be7e.firebasestorage.app",
    messagingSenderId: "108175449010",
    appId: "1:108175449010:web:2e4e4aa6261cf6466c22ab",
    measurementId: "G-F5455EFLM8"
  };

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, db };