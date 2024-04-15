import { NavLink } from 'react-router-dom';
import logo from '../assets/img/LOGO.png';
import './styles/Header.css';

function Header() {
  return (
    <header>
      <NavLink to="/" exact="true">
        <img src={logo} alt="Logo Kasa" className="logo" />
      </NavLink>
      <nav>
        <NavLink to="/" exact="true">
          Accueil
        </NavLink>
        <NavLink to="/apropos">
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
