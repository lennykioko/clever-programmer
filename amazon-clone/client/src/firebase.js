import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK8mZD6H4T0ecRlcrhcLuXT7086tv6NMQ",
  authDomain: "clone-9cc10.firebaseapp.com",
  projectId: "clone-9cc10",
  storageBucket: "clone-9cc10.appspot.com",
  messagingSenderId: "571309354084",
  appId: "1:571309354084:web:3207843415d451bef18371",
  measurementId: "G-HHCWNDG58L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };