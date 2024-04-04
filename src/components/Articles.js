import React from 'react';
import { Link } from 'react-router-dom';
import logements from '../assets/data/logements.json';
import './styles/Articles.css';

function Articles() {
  const articlesArray = Object.values(logements);

  return (
    <div className="articles">
      {articlesArray.map((logement) => (
        <Link to={`/article/${logement.id}`} key={logement.id} className="article-link">
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
