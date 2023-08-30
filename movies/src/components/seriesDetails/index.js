import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const SeriesDetails = ( props) => {
  const series = props.series

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {series.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {series.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${series.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${series.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${series.vote_average} (${series.vote_count}`}
        />
        <Chip label={`Released: ${series.release_date}`} />
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        sx={{
            position: "fixed",
            bottom: 2,
            right: 2
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      </>
  );
};
export default SeriesDetails ;