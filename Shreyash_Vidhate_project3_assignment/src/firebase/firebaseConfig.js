// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqOU55MhnQAwY4UAqy_5ijZCTQiuRvpeA",
  authDomain: "social-media-dashboard-ad7f3.firebaseapp.com",
  projectId: "social-media-dashboard-ad7f3",
  storageBucket: "social-media-dashboard-ad7f3.firebasestorage.app",
  messagingSenderId: "143558282560",
  appId: "1:143558282560:web:a5a2629bef19977745fea5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
