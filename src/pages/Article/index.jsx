import React, { useState, useEffect } from 'react';
import '../styles/Article.css';
import logements from '../../assets/data/logements.json';
import { useParams, useNavigate } from 'react-router-dom';
import Dropdown from '../../components/Dropdown';
import Carousel from '../../components/Carousel';

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  useEffect(() => {
    // Trouver l'article correspondant à l'ID dans le fichier JSON
    const foundArticle = logements.find(item => item.id === id);
    // Vérifie si l'article avec l'ID spécifié existe
    if (!foundArticle) {
      // Si l'article n'existe pas, navigue vers la page 404
      navigate('/NotFound');
    } else {
      // Mettre à jour l'état de l'article trouvé
      setArticle(foundArticle);
    }
  }, [id, navigate]);

  // Fonction pour convertir le rating en étoiles
  const getStarRating = (rating) => {
    const filledStars = '★'.repeat(rating);
    const emptyStars = '★'.repeat(5 - rating);
    return (
      <span className='stars'>
        <span className='star'>{filledStars}</span>
        <span className='emptystar'>{emptyStars}</span>
      </span>
    );
  };

  // Gestion du clic sur le dropdown
  const handleDropdownClick = (title) => {
    setSelectedTitle(selectedTitle === title ? null : title);
  };

  // Si l'article n'existe pas, retourne null pour éviter tout rendu indésirable
  if (!article) {
    return null;
  }

  const images = article.pictures || [];

  return (
    <div className='body'>
      <div className="article-details">
        <div className='banner2'>
          <Carousel images={images} />
        </div>
        <div className='flexbox'>
          <div className='flexbox3'>
            <div className='titre'>
              <h3>{article.title}</h3>
            </div>
            <div>
              <p>{article.location}</p>
            </div>
            <div className='tagContain'>
              <ul>
                {article.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className='flexbox2'>
            <div className="hostContain">
              <p className='host'>{article.host.name}</p>
              <img className='hostIMG' src={article.host.picture} alt={article.host.name} />
            </div>
            <div>{getStarRating(article.rating)}</div>
          </div>
        </div>
        <div className='flexbox'>
        </div>
        <div className='dropdowns2'>
          <div className='containDropdown'>
            <Dropdown
              title="Description"
              content={article.description}
              selectedTitle={selectedTitle}
              onClick={handleDropdownClick}
            />
          </div>
          <div className='containDropdown'>
            <Dropdown
              title="Equipements"
              content={article.equipments}
              selectedTitle={selectedTitle}
              onClick={handleDropdownClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
