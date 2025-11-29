import About from './components/About.jsx'
import Art from './components/Art.jsx'
import Cocktails from './components/Cocktails.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/navbar.jsx'
import Menu from './components/Menu.jsx'
const App = () => {
    return(
        <>
        <Navbar/>
        <Hero/>
        <Cocktails/>
        <About/>
        <Art/>
        <Menu/>
        </>
    )
}

export default App