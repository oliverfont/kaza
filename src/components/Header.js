import { NavLink } from 'react-router-dom';
import logo from '../assets/img/LOGO.png';
import './styles/Header.css';

function Header() {
  return (
    <header>
      <NavLink to="/" exact>
        <img src={logo} alt="Logo Kaza" className="logo" />
      </NavLink>
      <nav>
        <NavLink to="/" exact activeClassName="active">
          Accueil
        </NavLink>
        <NavLink to="/apropos" activeClassName="active">
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
