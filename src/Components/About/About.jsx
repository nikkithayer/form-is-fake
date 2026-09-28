import Paragraphs from '../Paragraphs/Paragraphs'
import { about } from '../../content/about'
import './About.css'

// The About slide at the bottom of the page (old /about links redirect here).
function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner container">
        <h2 className="title">{about.title}</h2>
        <p className="about-intro">{about.intro}</p>
        <img src={about.image} alt={about.imageAlt} />
        <Paragraphs body={about.body} />

        {about.sections.map((section) => (
          <section key={section.title}>
            <h3 className="subtitle">{section.title}</h3>
            <Paragraphs body={section.body} />
          </section>
        ))}
      </div>
    </section>
  )
}

export default About
