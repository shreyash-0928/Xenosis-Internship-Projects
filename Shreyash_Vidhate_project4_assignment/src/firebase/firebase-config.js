// src/firebase/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPp9YtTD7uTJijPMpfgTY3M8K2Pcop4HU",
  authDomain: "video-streaming-platform-516c5.firebaseapp.com",
  projectId: "video-streaming-platform-516c5",
  storageBucket: "video-streaming-platform-516c5.firebasestorage.app",
  messagingSenderId: "992392824245",
  appId: "1:992392824245:web:cef58d5e0b66c85ba545fc",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
