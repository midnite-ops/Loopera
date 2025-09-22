// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFunctions } from "firebase/functions";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIR5jteFSYzcwIxRTwsaW0EHKxzsK7Z_c",
  authDomain: "loopera-waitlist.firebaseapp.com",
  projectId: "loopera-waitlist",
  storageBucket: "loopera-waitlist.firebasestorage.app",
  messagingSenderId: "700416589699",
  appId: "1:700416589699:web:9cc1195cda681b389cc0b6",
  measurementId: "G-MZNW1D990J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const functions = getFunctions(app);
export default app;