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

export const auth = getAuth(app)
export const db = getFirestore(app)

// Sign in once when the module loads; signups wait on this before writing.
const signedIn = signInAnonymously(auth)

const signupsRef = collection(db, "Signups")

export async function addSignup(newSignup) {
  await signedIn
  await addDoc(signupsRef, newSignup)
}
