// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzFYVzqPF6lGr87DxKuAdbFO75qKtFf_U",
  authDomain: "todoappexp-6e66d.firebaseapp.com",
  projectId: "todoappexp-6e66d",
  storageBucket: "todoappexp-6e66d.appspot.com",
  messagingSenderId: "842621533629",
  appId: "1:842621533629:web:d939781dfd48659e1426d4",
  measurementId: "G-3FK5SR0BP2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
