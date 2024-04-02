// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5vTTHil8ItVqvf7MpmmvcDk5714t4QiA",
  authDomain: "carpishop-57b90.firebaseapp.com",
  projectId: "carpishop-57b90",
  storageBucket: "carpishop-57b90.appspot.com",
  messagingSenderId: "399131450153",
  appId: "1:399131450153:web:a02acb6a2a408af3f97538"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);