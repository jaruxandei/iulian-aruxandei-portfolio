import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <SocialLinks />
      <Skills />
      <Contact />
    </>
  )
}

export default App
