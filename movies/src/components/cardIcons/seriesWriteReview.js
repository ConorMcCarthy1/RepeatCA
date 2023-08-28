import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router-dom";

const seriesWriteReviewIcon = ({ series }) => {
  return (
    <Link
      to={`/reviews/form`}
      state={{
          seriesId: series.id,
      }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default seriesWriteReviewIcon;
