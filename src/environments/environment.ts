// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC0YawBqXljOXd94RoZDjaMpvvrKgDSaGM",
  authDomain: "examen-79dab.firebaseapp.com",
  databaseURL: "https://examen-79dab-default-rtdb.firebaseio.com",
  projectId: "examen-79dab",
  storageBucket: "examen-79dab.firebasestorage.app",
  messagingSenderId: "937254503666",
  appId: "1:937254503666:web:ab6e765f568ae2e411fc6b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);