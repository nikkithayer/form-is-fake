import Header from '../Header/Header'
import Paragraphs from '../Paragraphs/Paragraphs'
import { about } from '../../content/about'
import './About.css'

function About() {

  return (
    <>
    <Header />
    <main className='about container'>
      <h1>{about.title}</h1>
      <img src={about.image} alt={about.imageAlt} />
      <Paragraphs body={about.body} />

      {about.sections.map((section) => (
        <section key={section.title}>
          <h2 className="subtitle">{section.title}</h2>
          <Paragraphs body={section.body} />
        </section>
      ))}
    </main>
    </>
  )
}

export default About
