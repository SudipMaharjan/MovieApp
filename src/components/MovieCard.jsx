import emptyHeartIcon from "../assets/icons/emptyHeartIcon.png";
import "../css/MovieCard.css";

function MovieCard({ movie }) {
  function onFavouriteClick() {}

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
        <div className="movie-overlay">
          <button className="favourite-button" onClick={onFavouriteClick}>
            <img src={emptyHeartIcon} />
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
