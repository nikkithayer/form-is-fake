import Section from './Components/Section/Section'
import Columns from './Components/Columns/Columns'
import Header from './Components/Header/Header'
import SignUpForm from './Components/SignUp/SignUpForm'
import { sections, projects, signup } from './content/home'

function App() {
  return (
    <>
    <Header />
    <main>
    <h1 className="visually-hidden">Form is Fake</h1>
    <div>
      {sections.map((section) => <Section key={section.title} {...section} />)}
      <Columns {...projects} />
      <SignUpForm {...signup} />
    </div>
    </main>
    </>
  )
}

export default App
