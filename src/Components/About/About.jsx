import Header from '../Header/Header'
import './About.css'

function About() {

  return (
    <>
    <Header />
    <div className='about'>
      <h1>About Us</h1>
      <img src="/nikkianddavid.jpg" />
    <p>David Daw is a writer, developer and TTRPG designer who simply cannot stop throwing themed, experience design centric parties, the first being an iteration of Dance Party at the End of the World in 2006.</p>
    
    <p>Nikki Thayer is an experience designer, artist, and comedian. Professionally, she's designed websites and products for folks like Team Coco and the Sundance Film Festival. Outside of work, she's been an editor and producer at the Upright Citizens Brigade and participated in the 2019 Odyssey Works Master Class.</p>
    
    <p>We’ve been married since 2016 and share our home just outside of LA with a little dog named Oscar, who is a good boy but not a strong creative contributor.</p>

    <h2>Why Form is Fake?</h2>
    <p>When we tried to come up with the overlap on our sensibilities and preoccupations, David pointed out a certain malleability of form. </p>
    <p>If there’s a 4th wall, we want to toy with it. If there’s a structure an idea HAS to follow, we want to know why. What do we get when we tweak the boundaries set by form and go somewhere new? Why not both? Why not segue from one to the other? What if other people build on the world we’re trying to make? And through all of it - how can we make sure attendees are well taken care of and having a great time?</p>

    <p>Form is the layer of meeting the audience's expectation that has to exist to get to a deeper truth. But it’s fake.</p>
    </div>
    </>
  )
}

export default About
