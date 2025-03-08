import {createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider =({children}) => {

    const [favourites, setFavourites] = useState([]);
    const [watchlist, setWatchList] = useState([]); 

    useEffect(() => {
        const storedFavourites = localStorage.getItem("favourites");
        const storedWatchlist = localStorage.getItem("watchlist");

        if (storedFavourites) {
            setFavourites(JSON.parse(storedFavourites));
        }

        if(storedWatchlist) {
            setWatchList(JSON.parse(storedWatchlist));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }, [watchlist]);

    const addToFavourites = (movie) => {
        setFavourites(prev => [...prev, movie]);
    };

    const removeFromFavourites = (movieId) => {
        setFavourites(prev => prev.filter(movie => movie.id !== movieId));
    }

    const isFavourite = (movieId) => {
        return favourites.some(movie => movie.id === movieId);
    }

    const addToWatchlist = (movie) => {
        setWatchList(prev => [...prev, movie]);
    };

    const removeFromWatchlist = (movieId) => {
        setWatchList(prev => prev.filter(movie => movie.id!== movieId));
    }

    const isInWatchlist = (movieId) =>{
        return watchlist.some(movie => movie.id === movieId);
    }

    const value = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite,

        watchlist,
        addToWatchlist,
        removeFromWatchlist,
        isInWatchlist,
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}