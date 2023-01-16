import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9jRcjEFfEVDdX5c0s-COONnr8AqJhYV8",
  authDomain: "react-26eef.firebaseapp.com",
  projectId: "react-26eef",
  storageBucket: "react-26eef.appspot.com",
  messagingSenderId: "538683812962",
  appId: "1:538683812962:web:9bf4eb974e1820c7db753b"
  };
  

const fb = initializeApp(firebaseConfig);
const db = getFirestore(fb)

export {db}