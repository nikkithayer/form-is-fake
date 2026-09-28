import Section from './Components/Section/Section'
import Columns from './Components/Columns/Columns'
import Header from './Components/Header/Header'
import SignUpForm from './Components/SignUp/SignUpForm'

function App() {

  const BeachEpisode = {
    title: "Beach Episode",
    description: ["A one sheet TTRPG about the balance between self care and being down for the cause."],
    image: "/beachepisode.png",
    imageAlt: "Beach Episode, a solo journaling game by David Daw, shown as a notepad page among a palm-tree postcard and an airmail envelope",
    link: "https://formisfake.itch.io/beach-episode",
    linkText: "Download on itch.io"
  }
  

  const IronCity = {
    title: "Iron City",
    description: ["Iron City is an immersive experience that takes place in a world where the Fae have returned and you need to help a lawfirm dealing with magical contract law.", 
    "Guests will explore a world of fairies, magic, and legal jargon in our first ever open to the public immersive show.",
    "It's as much fun as you can have with the legal profession...Legally!"],
    image: "/ironcity.png",
    imageAlt: "A glowing fairy hand reaches toward a wireframe sculpture over a desk of legal paperwork and a Greystone/Canning “Fae Arbitration Experts” mug",
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
    <main>
    <h1 className="visually-hidden">Form is Fake</h1>
    <div>
      <Section ProjectInfo={aboutUs} />
      <Section ProjectInfo={IronCity} />
      <Section ProjectInfo={BeachEpisode} />
      <Columns />
      <SignUpForm />
    </div>
    </main>
    </>
  )
}

export default App
