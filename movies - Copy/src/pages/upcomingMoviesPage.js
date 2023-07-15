import React from "react";
import PageTemplate from "../components/templateMovieListPage"; 
import { useEffect, useState } from "react"; 
import { getUpcomingMovies } from "../api/tmdb-api";



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
    />
  );
};

export default UpcomingMoviesPage;
