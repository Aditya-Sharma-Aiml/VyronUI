// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vyronui.firebaseapp.com",
  projectId: "vyronui",
  storageBucket: "vyronui.firebasestorage.app",
  messagingSenderId: "781311963051",
  appId: "1:781311963051:web:b29986a5cba000fda1acee",
  measurementId: "G-H2D35FF19K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}
