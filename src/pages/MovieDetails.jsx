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

  async function loadMovieAndTrailer() {
    const movieData = await getMovieWithTrailer(movieId);

    if (movieData) {
      setSelectedMovie(movieData);

      const trailerData = movieData?.videos?.results?.find(
        (vid) => vid.name === "Official Trailer"
      );

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
    if (movieId) {
      loadMovieAndTrailer();
    }
  }, [movieId]); // Run only when movieId changes

  if (!selectedMovie || !trailer) {
    return <div className="trailer-failed" >Failed to play the Trailer</div>; // Show a loading state while fetching the movie details and trailer
  }

  return (
    <div className="movie-details">
      <h1>{selectedMovie.title}</h1>
      <p>{selectedMovie.overview}</p>
      <div className="movie-trailer-container">
        <Youtube
          className="trailer-video"
          videoId={trailer?.key}
          opts={{
            width: "100%",
            height: "600rem",
            playerVars: { autoplay: 1 },
          }}
        />
      </div>
    </div>
  );
}

export default MovieDetails;
