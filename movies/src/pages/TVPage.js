import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getSeries } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'



const TVPage = (props) => {
  const { id } = useParams();
  const { data: series, error, isLoading, isError } = useQuery(
    ["series", { id: id }],
    getSeries
  );
console.log(id)
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {series ? (
        <>
          <PageTemplate series={series}>
            <MovieDetails series={series} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for series details</p>
      )}
    </>
  );
};

export default TVPage;
