import React from "react";
import { useParams } from 'react-router-dom';
import SeriesDetails from "../components/seriesDetails";
import TemplateSeriesPage from "../components/templateSeriesPage";
import { getSeries } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const TVPage = (props) => {
  const { showID } = useParams();
  const { data: series, error, isLoading, isError } = useQuery(
    ["series", { id: showID }],
    getSeries
  );
console.log(showID)
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
          <TemplateSeriesPage series={series}>
            <SeriesDetails series={series} />
          </TemplateSeriesPage>
        </>
      ) : (
        <p>Waiting for series details</p>
      )}
    </>
  );
};

export default TVPage;