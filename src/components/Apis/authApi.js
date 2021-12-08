import axios from "axios";

export default axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
  params: {
    key: process.env.REACT_APP_FIREBASE_API_KEY,
  },
});
