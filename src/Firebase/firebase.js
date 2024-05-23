// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPhS0APk1P12KUWGtEIqBbiC-wkABkPHk",
  authDomain: "adv-exercise.firebaseapp.com",
  projectId: "adv-exercise",
  storageBucket: "adv-exercise.appspot.com",
  messagingSenderId: "465521088731",
  appId: "1:465521088731:web:35d9f889846ba49178d4fe",
  measurementId: "G-GCLGM3HEPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
