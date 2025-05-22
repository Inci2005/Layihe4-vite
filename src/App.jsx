import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Selection from './Selection';
import Favorite from './Favorite';
import FavoritePage from './FavoritePage';
import { useState, useEffect } from 'react';
import "./App.css";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [listFinalized, setListFinalized] = useState(false);
  const [favoriteListName, setFavoriteListName] = useState('');
  const location = useLocation();

  const addFavorite = (movie) => {
    if (!favorites.some(fav => fav.imdbID === movie.imdbID)) {
      setFavorites(prev => [...prev, movie]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(prev => prev.filter(movie => movie.imdbID !== id));
  };

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/Layihe4-vite/') {
      setFavorites([]);
      setListFinalized(false);
      setFavoriteListName('');
    }
  }, [location.pathname]);

  return (
    <>
      {/* Show Header except on favorites page */}
      {location.pathname !== '/favorites' && location.pathname !== '/Layihe4-vite/favorites' && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Selection favorites={favorites} addFavorite={addFavorite}  listFinalized={listFinalized}/>
              <Favorite
                favorites={favorites}
                removeFavorite={removeFavorite}
                listFinalized={listFinalized}
                setListFinalized={setListFinalized}
                favoriteListName={favoriteListName}
                setFavoriteListName={setFavoriteListName}
              />
            </div>
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritePage
              favorites={favorites}
              favoriteListName={favoriteListName}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
