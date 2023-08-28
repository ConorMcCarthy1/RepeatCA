import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { SeriesContext } from "../../contexts/seriesContext";

const seriesRemoveFromFavoritesIcon = ({ series }) => {
  const context = useContext(SeriesContext);

  const handleRemoveFromFavorites = (e) => {
    e.preventDefault();
    context.TVremoveFromFavorites(series);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default seriesRemoveFromFavoritesIcon;
