import { NavLink } from 'react-router-dom';
import logo from '../assets/img/LOGO.png';
import './styles/Header.css';

function Header() {
  return (
    <header>
      <NavLink to="/kaza" exact="true">
        <img src={logo} alt="Logo Kaza" className="logo" />
      </NavLink>
      <nav>
        <NavLink to="/kaza" exact="true">
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
