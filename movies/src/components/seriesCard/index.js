import React, { useContext  } from "react";
import { Link } from "react-router-dom"; 
import Avatar from '@mui/material/Avatar';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import  Tv  from "@mui/icons-material/Tv";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png' 




export default function SeriesCard({ series, action }) {


  /*const { watchedSeries, addToWatched } = useContext(seriesContext);

  if (watchedSeries.find((id) => id === series.id)) {
    series.watched = true;
  } else {
    series.watched = false
  }

  const handleAddToWatchedSeries = (e) => {
    e.preventDefault();
    addToWatched(series);
  };

 */
  return (
    <Card sx={{ maxWidth: 345 }}>
            <CardHeader
        avatar={
          series? (
            <Avatar sx={{ backgroundColor: 'red' }}>
            <Tv/>
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {series.title}{" "}
          </Typography>
        }
      />

      <CardMedia
        sx={{ height: 500 }}
        image={
          series.poster_path
            ? `https://image.tmdb.org/t/p/w500/${series.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {series.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {series.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
  {action(series)}
  <Link to={`/series/${series.id}`}>
    <Button variant="outlined" size="medium" color="primary">
      More Info ...${series.id}
    </Button>
  </Link>
</CardActions>
    </Card>
  );
}