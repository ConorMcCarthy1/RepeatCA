import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import  PlaylistAdd  from "@mui/icons-material/PlaylistAdd";

const PlaylistAddIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToPlaylist = (e) => {
     e.preventDefault();
     context.mustWatch(movie);
   };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToPlaylist}>
      <PlaylistAdd color="primary" fontSize="large" />
    </IconButton>
  );
};

export default PlaylistAddIcon;
