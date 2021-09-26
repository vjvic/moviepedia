//convert vote average
export const convertAverage = (voteAverage) => {
  const average = (voteAverage / 2 || 0).toFixed(1);
  return +average;
};

//This wil convert the runtime to HH:MM format

export const getMovieLength = (runtime) => {
  const Minutes = runtime;
  const m = Minutes % 60;
  const h = (Minutes - m) / 60;
  const HHMM = h.toString() + "h " + (m < 10 ? "0" : "") + m.toString() + "m";

  return HHMM;
};
