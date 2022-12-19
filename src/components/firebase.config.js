import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDHzzOqYCj0_VHLvXfL_nxHh5ecBYdPbs0",
    authDomain: "react-proyect-4eac6.firebaseapp.com",
    projectId: "react-proyect-4eac6",
    storageBucket: "react-proyect-4eac6.appspot.com",
    messagingSenderId: "311447371082",
    appId: "1:311447371082:web:c6872e60d68e88926195b3"
  };
  

const fb = initializeApp(firebaseConfig);
const db = getFirestore(fb)

export {db}