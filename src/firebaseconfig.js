// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {getAuth}from 'firebase/auth'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBUnKicAufKIcFdcdtcyasSn_mUFEHQlRg",
  authDomain: "registration-forms-5de53.firebaseapp.com",
  projectId: "registration-forms-5de53",
  storageBucket: "registration-forms-5de53.appspot.com",
  messagingSenderId: "700745949960",
  appId: "1:700745949960:web:c8d1b810ec13089ca0c2bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth=getAuth(app);
export const storage = getStorage(app);
export default db;

// export const database = app.firestore();
