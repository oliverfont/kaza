import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom
import logements from './data/logements.json';
import '../styles/Articles.css';

function Articles() {
  return (
    <div className="articles">
      {logements.map((logement, index) => (
        <Link to={`/article/${index}`} key={index} className="article-link">
          <div className="article">
            <h2>{logement.title}</h2>
            <img src={logement.cover} alt={`Image de "${logement.title}"`} className="imgArticle" />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Articles;
