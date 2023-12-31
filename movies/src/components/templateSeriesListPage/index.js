import React, { useState } from "react";
import SeriesHeaderList from "../headerSeriesList";
import FilterSeriesCard from "../filterSeriesCard";
import SeriesList from "../seriesList";
import Grid from "@mui/material/Grid"; 



function SeriesListPageTemplate({ series, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedSeries = series
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <SeriesHeaderList title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterSeriesCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <SeriesList action={action} series={displayedSeries}></SeriesList>
      </Grid>
    </Grid>
  );
}
export default SeriesListPageTemplate;
