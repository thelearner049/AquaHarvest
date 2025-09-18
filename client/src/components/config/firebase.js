// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTjaKrSpPZcQ8MVcXVxUKwwJuqmi95M18",
  authDomain: "aquaharvest-81933.firebaseapp.com",
  projectId: "aquaharvest-81933",
  storageBucket: "aquaharvest-81933.firebasestorage.app",
  messagingSenderId: "432082753182",
  appId: "1:432082753182:web:2eef3d24f4a6eee76d4d8f",
  measurementId: "G-M3XV47PE2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);