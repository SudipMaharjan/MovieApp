const API_KEY = "a8e54377c3f8cfa3c6f5c9c53c76a357";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

export const getMovieWithTrailer = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      console.error("Error fetching movie data:", data);
      return null;
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};
