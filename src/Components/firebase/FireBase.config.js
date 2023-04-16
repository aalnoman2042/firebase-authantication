// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz3LfWDmlxBGT7pfs46c2D1iBBWeICo4o",
  authDomain: "email-password-auth-515a3.firebaseapp.com",
  projectId: "email-password-auth-515a3",
  storageBucket: "email-password-auth-515a3.appspot.com",
  messagingSenderId: "301818596705",
  appId: "1:301818596705:web:55666f789a02e9f1cfc920"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app