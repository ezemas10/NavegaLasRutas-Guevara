import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTOuQ00GncqR3YOf-tP14KbCDNpdP50Kg",
  authDomain: "e-commerce-ile.firebaseapp.com",
  projectId: "e-commerce-ile",
  storageBucket: "e-commerce-ile.firebasestorage.app",
  messagingSenderId: "776526479608",
  appId: "1:776526479608:web:4bb8360bbab4db4ef07b0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);