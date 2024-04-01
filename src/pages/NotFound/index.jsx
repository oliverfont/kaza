import React from 'react';
import '../styles/Home.css';
import '../styles/NotFound.css';
import { Link } from 'react-router-dom';
import qcq from '../../assets/img/404.svg'

function App() {
  return (
    <div className='body'>
      <div className='notfound'>
        <img src={qcq} alt="Error 404" className='qcq' />
        <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="backHome">Retourner sur la page d’accueil</Link>
      </div>
    </div>
  );
}

export default App;
