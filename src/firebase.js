
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA09pqZvQGUggsE1hVA1jB_DZ7ndp8PoJw",
  authDomain: "chat-app-20cab.firebaseapp.com",
  projectId: "chat-app-20cab",
  storageBucket: "chat-app-20cab.appspot.com",
  messagingSenderId: "203039754710",
  appId: "1:203039754710:web:70a8502118dde9c83f3c77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db=getFirestore()