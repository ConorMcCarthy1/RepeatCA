import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getSeriesReviews } from "../../api/tmdb-api";
import { excerpt } from "../../util";
import { TvRounded } from "@mui/icons-material";

 function SeriesReviews({ series }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getSeriesReviews(series.id).then((reviews) => {
      setReviews(reviews);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="reviews table">
        <TableHead>
          <TableRow>
            <TableCell >Author</TableCell>
            <TableCell align="center">Excerpt</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews.map((tvr) => (
            <TableRow key={tvr.id}>
              <TableCell component="th" scope="row">
                {tvr.author}
              </TableCell>
              <TableCell >{excerpt(tvr.content)}</TableCell>
              <TableCell >
              <Link
                  to={`/reviews/${tvr.id}`}
                  state={{
                      review: tvr,
                      series: series,
                  }}
                >
                  Full Review
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SeriesReviews;