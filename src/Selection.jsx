import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./Selection.css";

function Selection({ favorites, addFavorite }) {
  const [movies, setMovies] = useState([]);
  const [names, setNames] = useState("harry");
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleButton = () => {
    setNames(search);
    setSearch("");
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${names}&apikey=c97932a`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search.slice(0, 10));
        }
      })
      .catch((error) => {
        console.error("Xəta baş verdi:", error);
      });
  }, [names]);

  return (
    <div className="wrapper">
      <div className="search">
        <input value={search} onChange={handleSearch} type="text" placeholder="Search" />
        <button onClick={handleButton}>Search</button>
      </div>

      <div className="selection-div">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            addFavorite={addFavorite}
            isFavorited={favorites.some(f => f.imdbID === movie.imdbID)}
          />
        ))}
      </div>
    </div>
  );
}

export default Selection;
