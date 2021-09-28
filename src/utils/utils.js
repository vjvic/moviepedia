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

//add token to localstorage
export const setToken = (token) => {
  return localStorage.setItem("token", token);
};

//remove token from localstorage
export const removeToken = () => {
  return localStorage.removeItem("token");
};

//convert text to lowercase & remove underscore
export const arrangeText = (text) => {
  return text.replace(/_/g, " ").toLowerCase();
};
