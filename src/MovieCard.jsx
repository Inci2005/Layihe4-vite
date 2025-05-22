import "./MovieCard.css";

function MovieCard({ movie, addFavorite, isFavorited, listFinalized}) {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
        alt={movie.Title}
      />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>Year: {movie.Year}</p>
       <button
  className="fav-btn"
  onClick={() => addFavorite(movie)}
  disabled={isFavorited || listFinalized}
>
  {isFavorited || listFinalized ? "Favorited" : "Favorite"}
</button>
      </div>
    </div>
  );
}

export default MovieCard;
