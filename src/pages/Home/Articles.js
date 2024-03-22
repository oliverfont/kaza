import logements from './data/logements.json';
import '../styles/Articles.css';

function Articles() {
    return (
        <div className="articles">
            {logements.map((logement, index) => (
                <div className="article" key={index}>
                    <h2>{logement.title}</h2>
                    <img src={logement.cover} alt={`Image de "${logement.title}"`} className="imgArticle" />
                </div>
            ))}
        </div>
    );
}

export default Articles;
