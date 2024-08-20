import Section from './Components/Section/Section'
import Columns from './Components/Columns/Columns'
import Header from './Components/Header/Header'
import SignUpForm from './Components/SignUp/SignUpForm'
import './App.css'
import { auth, db } from './firebase-config'
import { collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js"


function App() {

  signInAnonymously(auth)
  .then(() => {
    console.log(auth)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

  const entriesCollectionRef = collection(db, "Signups")

  const Signup = async (newLog) => {
    await addDoc(entriesCollectionRef, newLog)
  }


  const BeachEpisode = {
    title: "Beach Episode",
    description: ["A one sheet TTRPG about the balance between self care and being down for the cause."],
    image: "/beachepisode.png",
    link: "https://formisfake.itch.io/beach-episode",
    linkText: "Download on itch.io"
  }
  

  const IronCity = {
    title: "Iron City",
    description: ["Iron City is an immersive experience that takes place in a world where the Fae have returned and you need to help a lawfirm dealing with magical contract law.", 
    "Guests will explore a world of fairies, magic, and legal jargon in our first ever open to the public immersive show.",
    "It's as much fun as you can have with the legal profession...Legally!"],
    image: "/ironcity.png",
    buttonFunction: 'scroll',
    linkText: "I'm intrigued and wish to subscribe to your newsletter."
  }

  const aboutUs = {
    title: "What on earth?",
    description: ["We’re a (two person) team of interdisciplinary writers, coders, and artists who make events, games, and spectacles by smushing mediums and genres together."],
    buttonFunction: 'route',
    linkText: "What does that even mean?"
  }

  return (
    <>
    <Header />
    <div>
      <Section ProjectInfo={aboutUs} />
      <Section ProjectInfo={IronCity} />
      <Section ProjectInfo={BeachEpisode} />
      <Columns />
      <SignUpForm Signup={Signup} />
    </div>
    </>
  )
}

export default App
