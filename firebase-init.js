
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-1lP0bansXU1GBMMMkrIb8kk1oywCwHE",
  authDomain: "parcsdb.firebaseapp.com",
  projectId: "parcsdb",
  storageBucket: "parcsdb.appspot.com",
  messagingSenderId: "550534457926",
  appId: "1:550534457926:web:6aea87fc25717a04767847",
  measurementId: "G-KGE7PFW3BP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
