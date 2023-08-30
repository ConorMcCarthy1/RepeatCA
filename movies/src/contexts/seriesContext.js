import React, { useState } from "react";

export const seriesContext = React.createContext(null);

const SeriesContextProvider = (props) => {
  const [watchedSeries, setWatched] = useState( [] )

  const addToWatchedSeries = (series) => {
    let newWatched = [];
    if (!watchedSeries.includes(series.id)){
      newWatched = [...watchedSeries, series.id];
    }
    else{
      newWatched = [...watchedSeries];
    }
    setWatched(newWatched)
  }; 

  const [myReviews, setMyReviews] = useState( {} ) 

  const addReview = (series, review) => {
    setMyReviews( {...myReviews, [series.id]: review } )
  }; 

  console.log(myReviews);
   
  // We will use this function in a later section
  const removeFromWatched = (series) => {
    setWatched( watchedSeries.filter(
      (mId) => mId !== series.id
    ) )
  };

  return (
    <seriesContext.Provider
      value={{
        watchedSeries,
        addToWatchedSeries,
        removeFromWatched, 
        addReview,
      }}
    >
      {props.children}
    </seriesContext.Provider>
  );
};

export default SeriesContextProvider;