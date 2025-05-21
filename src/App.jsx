import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Selection from './Selection';
import Favorite from './Favorite';
import FavoritePage from './FavoritePage';
import { useState, useEffect } from 'react';
import "./App.css"
function App() {
  const [favorites, setFavorites] = useState([]);
  const [listFinalized, setListFinalized] = useState(false);
  const location = useLocation();
const [favoriteListName, setFavoriteListName] = useState('');

  const addFavorite = (movie) => {
    if (!favorites.some(fav => fav.imdbID === movie.imdbID)) {
      setFavorites(prev => [...prev, movie]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(prev => prev.filter(movie => movie.imdbID !== id));
  };


  useEffect(() => {
    if (location.pathname === '/') {
      setFavorites([]);
      setListFinalized(false); 
       setFavoriteListName('');
    }
  }, [location.pathname]);

  return (
    <>
      {location.pathname !== '/favorites' && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Selection favorites={favorites} addFavorite={addFavorite} />
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
          element={<FavoritePage favorites={favorites} favoriteListName={favoriteListName} />}
        />
      </Routes>
    </>
  );
}

export default App;
