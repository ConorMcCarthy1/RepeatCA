import React from "react";
import PageTemplate from "../components/templateMovieListPage"; 
import { useEffect, useState } from "react"; 
import { getUpcomingMovies } from "../api/tmdb-api"; 
import PlaylistAddIcon from "../components/cardIcons/PlaylistAddIcon";



const UpcomingMoviesPage = (props) => {
 
  // Get movies from local storage.
  
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);


  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies} 
      action={(movie) => {
        return <PlaylistAddIcon movie={movie} />
      }}
    />
  );
};

export default UpcomingMoviesPage;
