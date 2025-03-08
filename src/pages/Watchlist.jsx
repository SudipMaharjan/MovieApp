import { useMovieContext } from "../contexts/movieContext";
import MovieCard from "../components/MovieCard";
import "../css/Watchlist.css";
import "../css/MovieCard.css";

function Watchlist() {
  const { watchlist } = useMovieContext();
  if (watchlist.length > 0) {
    return (
      <div className="movie-grid">
        {watchlist.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }

  return (
    <div className="watchlist-empty">
      <h2>No movies in watchlist added</h2>
      <p>Add movies to your watchlist</p>
    </div>
  );
}

export default Watchlist;
