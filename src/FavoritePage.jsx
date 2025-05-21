import { useNavigate } from 'react-router-dom';
import "./FavoritePage.css";

function FavoritePage({ favorites, favoriteListName }) {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="page1">
        <h2>List: {favoriteListName || "Favorite Movies"}</h2>
        
        <div className="movies-list-scroll">
          <ul>
            {favorites.map((movie) => (
              <li key={movie.imdbID}>
                {movie.Title}
                <a
                  href={`https://www.imdb.com/title/${movie.imdbID}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="imdb-link"
                >
                  IMDb
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <button onClick={() => navigate('/')}>Movies</button>
      </div>
    </div>
  );
}

export default FavoritePage;
