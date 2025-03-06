import emptyHeartIcon from "../assets/emptyHeartIcon.png"

function MovieCard({movie}){
    function onFavouriteClick(){
        
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt="" />
                <div className="movie-overlay">
                    <button className="favourite-button" onClick={onFavouriteClick}>
                        <img src={emptyHeartIcon}/>
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );
}

export default MovieCard;