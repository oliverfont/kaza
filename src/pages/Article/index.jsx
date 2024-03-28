import React from 'react';
import '../styles/Article.css';
import logements from '../../assets/data/logements.json';
import { useParams } from 'react-router-dom';
import Dropdown from '../../components/Dropdown';

const Article = () => {
  const { id } = useParams();
  const article = logements[id];

  // Fonction pour convertir le rating en étoiles
  const getStarRating = (rating) => {
    const filledStars = '★'.repeat(rating);
    const emptyStars = '★'.repeat(5 - rating);
    return (
      <span>
        <span style={{ color: '#FF6060', fontSize: '40px' }}>{filledStars}</span>
        <span style={{ color: '#E3E3E3', fontSize: '40px' }}>{emptyStars}</span>
      </span>
    );
  };

  return (
    <div className='body'>
      <div className="article-details">
        <div className='banner2'>
          <img src={article.cover} alt={`Image de "${article.title}"`} className="artBan" />
        </div>
        <div className='flexbox'>
          <div className='flexbox3'>
            <div className='titre'>
              <h3>{article.title}</h3>
            </div>
            <div>
              <p>{article.location}</p>
            </div>
          </div>
          <div className='flexbox2'>
            <p className='host'>{article.host.name}</p>
            <img className='hostIMG' src={article.host.picture} alt={`Image de "${article.host.name}"`} />
          </div>
        </div>
        <div className='flexbox'>
          <div className='tagContain'>
            <ul>
              {article.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>{getStarRating(article.rating)}</p>
          </div>
        </div>
        <div className='dropdowns2'>
          <div className='containDropdown'>
            {/* Utilisation du composant Dropdown pour la description */}
            <Dropdown
              title="Description"
              content={article.description}
            />
          </div>
          <div className='containDropdown'>
            {/* Utilisation du composant Dropdown pour les équipements */}
            <Dropdown
              title="Equipements"
              content={article.equipments.join(', ')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
