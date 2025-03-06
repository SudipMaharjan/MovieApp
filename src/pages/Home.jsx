import MovieCard from "../components/MovieCard";
import searchIcon from "../assets/searchIcon.png"
import { useState } from "react";

function Home(){
    const [searchTerm, setSearchTerm] = useState("");

    const movies = [{id: 1, title: "John Wick", release_date: "2002"}
                  ,{id: 2, title: "The Shawshank Redemption", release_date: "1994"}
                  ,{id: 3, title: "Inception", release_date: "2010"}
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Searching for "${searchTerm}"`);
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search movies..." 
                value={searchTerm}
                className="search-input"
                onChange={(e)=> setSearchTerm(e.target.value) }
                />
                <button 
                    type="submit" 
                    className="search-button">
                        Search
                        <img src={searchIcon} alt="search Icon"/>
                </button>
            </form>

            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Home;