// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT0CG4EBV-cqW4BfHgUfNVxnfuuhdRYBk",
  authDomain: "react-email-login-form.firebaseapp.com",
  projectId: "react-email-login-form",
  storageBucket: "react-email-login-form.appspot.com",
  messagingSenderId: "987602527145",
  appId: "1:987602527145:web:cbab3faf1548999f79dab8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;