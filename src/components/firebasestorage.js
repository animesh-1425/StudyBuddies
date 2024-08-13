// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVtq_NOtzra_7jPVej7dGflb6b7ghyqgg",
  authDomain: "studyhub-d1f7f.firebaseapp.com",
  projectId: "studyhub-d1f7f",
  storageBucket: "studyhub-d1f7f.appspot.com",
  messagingSenderId: "205595839879",
  appId: "1:205595839879:web:bf3c099d7d8ab06b165722"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);