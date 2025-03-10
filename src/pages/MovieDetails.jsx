import Youtube from "react-youtube";
import "../css/MovieDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieWithTrailer } from "../services/api";

function MovieDetails() {
  const param = useParams();
  const movieId = parseInt(param.id);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [genres, setGenres] = useState([]);

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m.`;
  };

  async function loadMovieAndTrailer() {
    const movieData = await getMovieWithTrailer(movieId);

    if (movieData) {
      setSelectedMovie(movieData);

      const trailerData = movieData?.videos?.results?.find(
        (vid) => vid.name === "Official Trailer"
      );

      setGenres(movieData.genres.map((genre) => genre.name));

      if (trailerData) {
        setTrailer(trailerData);
      } else {
        console.log("No 'Official Trailer' found");
      }
    } else {
      console.log("Movie data is null");
    }
  }

  useEffect(() => {
    loadMovieAndTrailer();
  }, [movieId]); // Run only when movieId changes

  if (!selectedMovie) {
    return <div className="trailer-failed">Failed to load the movie</div>; // Show a loading state while fetching the movie details and trailer
  }

  return (
    <div className="movie-details">
      <h1>{selectedMovie.title}</h1>
      <div className="movie-stats">
        <p>{selectedMovie.release_date?.split("-")[0]}</p>
        <p>{formatRuntime(selectedMovie.runtime)} </p>
      </div>
      <div className="genre-container">
        {genres.map((genre) => (<div className="genres">{genre}</div>))}
      </div>
      <p className="overview">{selectedMovie.overview}</p>
      <div className="movie-trailer-container">
        {trailer ? (
          <Youtube
            className="trailer-video"
            videoId={trailer?.key}
            opts={{
              width: "100%",
              height: "600rem",
              playerVars: { autoplay: 0 },
            }}
          />
        ) : (
          <div className="trailer-failed">No officiail Trailer available</div>
        )}
      </div>
      {console.log(selectedMovie)}
    </div>
  );
}

export default MovieDetails;
