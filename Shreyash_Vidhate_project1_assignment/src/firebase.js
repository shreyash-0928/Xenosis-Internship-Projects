import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtm6gN9R8W87mp2FGdtPf3ZmkxIAUkmdQ",
  authDomain: "realtime-task-manager.firebaseapp.com",
  projectId: "realtime-task-manager",
  storageBucket: "realtime-task-manager.firebasestorage.app",
  messagingSenderId: "225637228982",
  appId: "1:225637228982:web:9b4607c1071215b202e117",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
