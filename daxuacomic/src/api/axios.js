import axios from "axios";
const instance = axios.create({
  // baseURL: "https://comicgame.herokuapp.com/",
  baseURL: "http://localhost:5000/",
  headers: {
    ADMIN: "ADMIN",
  }
})
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;
