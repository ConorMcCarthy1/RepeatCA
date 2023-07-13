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
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { createRoot } from "react-dom/client";





const App = () => {
  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 360000,
        refetchInterval: 360000, 
        refetchOnWindowFocus: false
      },
    },
  });
 
    return (
      <QueryClientProvider client={queryClient}>
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
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
  };
  



const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);

