import React, { useContext } from "react";
import { SeriesContext } from "../../contexts/seriesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const seriesAddToFavoritesIcon = ({ series }) => {
  const context = useContext(SeriesContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.TVaddToFavorites(series);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default seriesAddToFavoritesIcon;
