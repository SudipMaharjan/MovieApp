import emptyHeartIcon from "../assets/icons/emptyHeartIcon.png";
import filledHeartIcon from "../assets/icons/filledHeartIcon.png";
import emptyWatchlist from "../assets/icons/emptyWatchlist.png";
import filledWatchlist from "../assets/icons/filledWatchlist.png";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/movieContext";

function MovieCard({ movie }) {
  const {
    addToFavourites,
    removeFromFavourites,
    isFavourite,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
  } = useMovieContext();

  const favourite = isFavourite(movie.id);
  const watchlistElement = isInWatchlist(movie.id);

  function onFavouriteClick(e) {
    e.preventDefault();
    favourite ? removeFromFavourites(movie.id) : addToFavourites(movie);
  }

  function onWatchlistClick(e) {
    e.preventDefault();
    watchlistElement ? removeFromWatchlist(movie.id) : addToWatchlist(movie);
  }

  function onWatchTrailerClick(e) {
    e.preventDefault();
    alert("Coming Soon!");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
        <div className="movie-overlay">
          <button
            className={`favourite-button ${favourite ? "active" : ""}`}
            title="Favourites"
            onClick={onFavouriteClick}
          >
            <img src={favourite ? filledHeartIcon : emptyHeartIcon} />
          </button>
          <button
            className={`watchlist-button ${watchlistElement ? "active" : ""}`}
            title="Watchlist"
            onClick={onWatchlistClick}
          >
            <img src={watchlistElement ? filledWatchlist : emptyWatchlist} />
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
