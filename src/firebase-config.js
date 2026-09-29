// Loaded only when someone submits the signup form (see SignUpForm.jsx), so
// visitors who never sign up don't download Firebase or create an account.
import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { getAuth, signInAnonymously } from "firebase/auth"

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
const auth = getAuth(app)
const signupsRef = collection(getFirestore(app), "Signups")

// Sign in anonymously once, on the first signup; the Firestore rules only
// accept writes from signed-in users. A failed sign-in can be retried.
let signedIn = null

export async function addSignup(newSignup) {
  signedIn ??= signInAnonymously(auth).catch((error) => {
    signedIn = null
    throw error
  })
  await signedIn
  await addDoc(signupsRef, newSignup)
}
