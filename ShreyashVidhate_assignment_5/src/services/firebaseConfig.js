import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpvQTWxK0BlMpz03YaeUPw8pehzHlWV2A",
  authDomain: "shreyashvidhateassignment5.firebaseapp.com",
  projectId: "shreyashvidhateassignment5",
  storageBucket: "shreyashvidhateassignment5.firebasestorage.app",
  messagingSenderId: "504676043161",
  appId: "1:504676043161:web:6738cacdb94e1c7f9ceb08",
  measurementId: "G-KW8157GXY3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
