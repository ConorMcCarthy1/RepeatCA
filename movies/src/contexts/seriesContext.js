import React, { useState } from "react";

export const seriesContext = React.createContext(null);

const SeriesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )

  const addToFavorites = (series) => {
    let newFavorites = [];
    if (!favorites.includes(series.id)){
      newFavorites = [...favorites, series.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  }; 

  const [myReviews, setMyReviews] = useState( {} ) 

  const addReview = (series, review) => {
    setMyReviews( {...myReviews, [series.id]: review } )
  }; 

  console.log(myReviews);
   
  // We will use this function in a later section
  const removeFromFavorites = (series) => {
    setFavorites( favorites.filter(
      (mId) => mId !== series.id
    ) )
  };

  return (
    <seriesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites, 
        addReview,
      }}
    >
      {props.children}
    </seriesContext.Provider>
  );
};

export default SeriesContextProvider;