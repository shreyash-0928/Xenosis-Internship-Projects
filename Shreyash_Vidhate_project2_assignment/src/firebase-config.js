// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQCtjv078ntqlOKOQVWTWo7gO3PT3tazo",
  authDomain: "ecommerce-app-730b8.firebaseapp.com",
  projectId: "ecommerce-app-730b8",
  storageBucket: "ecommerce-app-730b8.firebasestorage.app",
  messagingSenderId: "256446439459",
  appId: "1:256446439459:web:ba8143d616168965f39196",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
