// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRUIXc3tGgIQgECpop35iJwvoDkRYgfto",
    authDomain: "quiz-app-9de2d.firebaseapp.com",
    projectId: "quiz-app-9de2d",
    storageBucket: "quiz-app-9de2d.appspot.com",
    messagingSenderId: "430643974579",
    appId: "1:430643974579:web:025c94967659a0bd4d7bc6",
    measurementId: "G-JXYK69KB9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
