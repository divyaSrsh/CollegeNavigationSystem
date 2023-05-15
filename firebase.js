// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnT9LNwWLU4vib4e2JcW4LpxkexyBwyvQ",
  authDomain: "cetgo-acb67.firebaseapp.com",
  projectId: "cetgo-acb67",
  storageBucket: "cetgo-acb67.appspot.com",
  messagingSenderId: "459348264594",
  appId: "1:459348264594:web:dee40fb6cbc400cffa084b",
  measurementId: "G-BKW8JQ2CEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);