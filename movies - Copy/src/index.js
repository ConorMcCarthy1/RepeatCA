import React from "react"; 
import { styled } from '@mui/material/styles';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; 
import MovieReviewPage from "./pages/movieReviewPage";  
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import SiteHeader from './components/siteHeader'



const App = () => { 

  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);


  return (
    <BrowserRouter>
    <SiteHeader /> 
    <Offset />
    <Routes> 
      <Route path="/movies/upcoming" element={ <UpcomingMoviesPage/> } />
      <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
      <Route path="/movies/favorites" element={ <FavoriteMoviesPage />} />
      <Route path="/movies/:id" element={ <MoviePage /> } />
      <Route path="/" element={ <HomePage /> } />
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
  </BrowserRouter>

  );
};

ReactDOM.render(<App />, document.getElementById("root"));
