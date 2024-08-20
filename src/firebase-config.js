// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqHX0u7lJrOJjuxJj4TeXj47RYJ302eco",
  authDomain: "formisfakenewsletter.firebaseapp.com",
  projectId: "formisfakenewsletter",
  storageBucket: "formisfakenewsletter.appspot.com",
  messagingSenderId: "871031542669",
  appId: "1:871031542669:web:86aedff5404fd2c941e3c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
