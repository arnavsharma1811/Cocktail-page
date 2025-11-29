import About from './components/About.jsx'
import Art from './components/Art.jsx'
import Cocktails from './components/Cocktails.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/navbar.jsx'
import Menu from './components/Menu.jsx'
import Contact from './components/Contact.jsx'
const App = () => {
    return(
        <>
        <Navbar/>
        <Hero/>
        <Cocktails/>
        <About/>
        <Art/>
        <Menu/>
        <Contact/>
        </>
    )
}

export default App