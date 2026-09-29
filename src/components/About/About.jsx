import Paragraphs from '../Paragraphs/Paragraphs'
import { about } from '../../content/about'
import AngledSection from '../AngledSection/AngledSection'
import './About.css'

// The About section at the bottom of the page (old /about links redirect here).
function About() {
  return (
    <AngledSection id="about" className="about">
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
    </AngledSection>
  )
}

export default About
