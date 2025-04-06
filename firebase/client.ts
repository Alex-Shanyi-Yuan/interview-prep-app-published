// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF_UAgzXpIjNH_tgwKyVPw_FFEChhUyr8",
  authDomain: "prepwise-6720a.firebaseapp.com",
  projectId: "prepwise-6720a",
  storageBucket: "prepwise-6720a.firebasestorage.app",
  messagingSenderId: "951069192371",
  appId: "1:951069192371:web:4845d71b5e5dbe818d40c6",
  measurementId: "G-9KF8QTXR40"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)