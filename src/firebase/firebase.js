import firebase from "firebase/app";
import "firebase/auth";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBzvajqgpxrHnCWRpmvsPEnEXfZhk_DOjc",
    authDomain: "bhwy-47c34.firebaseapp.com",
    projectId: "bhwy-47c34",
    storageBucket: "bhwy-47c34.appspot.com",
    messagingSenderId: "324284995582",
    appId: "1:324284995582:web:a83e8ba1093393d3e752af",
    measurementId: "G-B3NE5BHFHM"
  };
  // Initialize Firebase
  export const app = firebase.initializeApp(firebaseConfig);
  // firebase.analytics();