import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>
      <Projects></Projects>
      <Services></Services>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
