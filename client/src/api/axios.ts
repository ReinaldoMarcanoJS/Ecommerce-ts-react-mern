import axios from "axios";

const instance = axios.create({
  baseURL: "https://goodshopbackend-production.up.railway.app/api",
  // baseURL: "http://localhost:3001/api",

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true
});

export default instance;
