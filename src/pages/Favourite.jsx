import { useMovieContext } from "../contexts/movieContext";
import MovieCard from "../components/MovieCard";
import "../css/Favourite.css";
import "../css/MovieCard.css";

function Favourite() {
  const { favourites } = useMovieContext();
  if (favourites.length > 0) {
    return (
      <div className="movie-grid">
        {favourites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }

  return (
    <div className="favourite-empty">
      <h2>No favourite movies added</h2>
      <p>Add movies to your favourites</p>
    </div>
  );
}

export default Favourite;
