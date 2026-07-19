/**
 * Root application shell.
 * Composes all portfolio sections in scroll order with global chrome
 * (loading screen, scroll progress, navbar, footer).
 */
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Projects from './components/Projects'
import GitHub from './components/GitHub'
import Certifications from './components/Certifications'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <GitHub />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
