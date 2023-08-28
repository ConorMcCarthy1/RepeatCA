import { useEffect, useState } from "react";
import {getSeries} from '../api/tmdb-api'

const useSeries = id => {
  const [series, setSeries] = useState(null);
  useEffect(() => {
    getSeries(id).then(series => {
      setSeries(series);
    });
  }, [id]);
  return [series, setSeries];
};

export default useSeries;
