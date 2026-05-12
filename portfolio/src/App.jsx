import { Routes, Route } from 'react-router-dom'
import { useTheme } from './themecontext'
import StarBackground from './components/background'
import Navbar from './components/navigationbar'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import Personal from './components/personal'
import Cooking from './pages/cooking'

function Home() {
  const { darkMode } = useTheme()
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <StarBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/cooking" element={<Cooking />} />
    </Routes>
  )
}

export default App