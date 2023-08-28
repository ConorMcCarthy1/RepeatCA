import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { StackedLineChart } from "@mui/icons-material";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography"; 
import Drawer from "@mui/material/Drawer";
import SeriesReviews from "../seriesReviews"



const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const SeriesDetails = ({ series }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);
  

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
        <Chip icon={<AccessTimeIcon />} label={`${series.season_number} Seasons.`} />
        <Chip
          icon={<StackedLineChart />}
          label={`${series.popularity.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${series.vote_average} (${series.vote_count}`}
        />
        <Chip label={`First aired: ${series.first_air_date}`} />
      </Paper>
           <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <SeriesReviews series={series} />
      </Drawer>
       
    
      </>
  );
};
export default SeriesDetails;
