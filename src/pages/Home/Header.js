import logo from './assets/LOGO.png'
import '../styles/Header.css'

function Header() {
    return <header>
                <a href='/'><img src={logo} alt='Logo Kaza' className='logo' /></a>
                <nav>
                        <a href='/'>Accueil</a>
                        <a href='/apropos'>A propos</a>
                </nav>
            </header>
}

export default Header