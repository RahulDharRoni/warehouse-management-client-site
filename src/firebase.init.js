// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNeM_ZrNv8DmCtJtXVx76IZzzZfl3V_uY",
    authDomain: "books-publishers.firebaseapp.com",
    projectId: "books-publishers",
    storageBucket: "books-publishers.appspot.com",
    messagingSenderId: "406964078701",
    appId: "1:406964078701:web:40895bd5f91a84ab705764"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;