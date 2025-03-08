import emptyHeartIcon from "../assets/icons/emptyHeartIcon.png";
import filledHeartIcon from "../assets/icons/filledHeartIcon.png";

import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/movieContext";

function MovieCard({ movie }) {
  const { addToFavourites, removeFromFavourites, isFavourite } = useMovieContext();
  const favourite = isFavourite(movie.id);

  function onFavouriteClick(e) {
    e.preventDefault();
    if (favourite) {
      removeFromFavourites(movie.id);
    } else {
      addToFavourites(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
        <div className="movie-overlay">
          <button className={`favourite-button ${favourite ? "active" : ""}`} onClick={onFavouriteClick}>
            <img src={favourite ? filledHeartIcon : emptyHeartIcon} />
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
