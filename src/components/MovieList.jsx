import React from "react";
// import "./../css/MovieList.css";
import "./../css/MovieList.css";

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    return (
        <div className="movies-grid">
            {props.movies &&
                props.movies.map((movie, index) => (
                    <div
                        // className="image-container d-flex justify-content-start m-3"
                        key={`movie${index}`}
                    >
                        <div
                            onClick={() => props.handleFavouritesClick(movie)}
                            // className="overlay d-flex align-items-center justify-content-center"
                        >
                            <div className="col1">{movie.Title}</div>
                            <FavouriteComponent className="col2" />
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default MovieList;
