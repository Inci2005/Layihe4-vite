import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./Selection.css";

function Selection({ favorites, addFavorite, listFinalized }) {
  const [movies, setMovies] = useState([]);
  const [names, setNames] = useState("harry");
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false); // ✨ Yeni state

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleButton = () => {
    if (search.trim()) {
      setNames(search.trim());
      setSearch("");
    }
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${names}&apikey=c97932a`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search.slice(0, 10));
          setNotFound(false); 
        } else {
          setMovies([]);
          setNotFound(true); 
        }
      })
      .catch((error) => {
        console.error("Xəta baş verdi:", error);
        setNotFound(true);
      });
  }, [names]);

  return (
    <div className="wrapper">
      <div className="search">
        <input value={search} onChange={handleSearch} type="text" placeholder="Search" />
        <button onClick={handleButton}>Search</button>
      </div>

      <div className="selection-div">
        {notFound ? (
          <p style={{ fontSize: "18px", color: "red", textAlign: "center", marginTop: "20px" }}>
            “{names}” sözünə uyğun filmlər tapılmadı.
          </p>
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              addFavorite={addFavorite}
              isFavorited={favorites.some(f => f.imdbID === movie.imdbID)}
              listFinalized={listFinalized}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Selection;
