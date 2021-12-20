// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLfRD1Saj7dA2v2Owg85OyPoOornrJpmQ",
  authDomain: "personal-web-indramahkota-info.firebaseapp.com",
  projectId: "personal-web-indramahkota-info",
  storageBucket: "personal-web-indramahkota-info.appspot.com",
  messagingSenderId: "916473936708",
  appId: "1:916473936708:web:b2101c16be1dd2a847b511",
  measurementId: "G-L22HYVFN2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);