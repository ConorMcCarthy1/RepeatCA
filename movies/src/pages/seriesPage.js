import React from "react";
import { getSeries } from "../api/tmdb-api";
import PageTemplate from '../components/templateSeriesListPage'; 
import { useQuery } from 'react-query';
import Spinner from '../components/spinner'; 
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites"; 



const SeriesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getSeries)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const series = data.results;

  // Redundant, but necessary to avoid app crashing.
  const watched = series.filter(m => m.watched)
  localStorage.setItem('watched', JSON.stringify(watched))
  

  return (
    <PageTemplate
      title="Discover The Best TV Series"
      series={series}
      action={(series) => {
        return <AddToFavoritesIcon series={series} />
      }}
    />
);

};
export default SeriesPage;
