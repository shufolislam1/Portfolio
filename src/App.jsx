import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
    </div>
  )
}

export default App
