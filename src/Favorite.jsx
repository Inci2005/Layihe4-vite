import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Favorite.css";

function Favorite({ favorites, removeFavorite, listFinalized, setListFinalized, favoriteListName, setFavoriteListName }) {
  const navigate = useNavigate();

  const handleFinalize = () => {
    setListFinalized(true);
  };

  return (
    <div className="favorite">
      <div className="list">
        {favorites.map((movie) => (
          <div key={movie.imdbID} className="favorite-item">
            <span>{movie.Title}</span>
            {!listFinalized && (
              <button
                className="remove-btn"
                onClick={() => removeFavorite(movie.imdbID)}
              >
                ✖
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="add">
        <input
          type="text"
          placeholder="List name..."
          value={favoriteListName}
          onChange={(e) => setFavoriteListName(e.target.value)}
          disabled={listFinalized}
        />
        <button
          disabled={!favoriteListName || listFinalized}
          onClick={handleFinalize}
        >
          Add favorite list
        </button>
        <button
          disabled={!listFinalized}
          onClick={() => navigate('/favorites')}
        >
          Favorite list
        </button>
      </div>
    </div>
  );
}


export default Favorite;
