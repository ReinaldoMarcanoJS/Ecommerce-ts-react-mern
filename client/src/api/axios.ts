import axios from "axios";

const instance = axios.create({
  baseURL: "https://goodshopbackend.up.railway.app/api",
  // baseURL: "http://localhost:3001/api",
  
  headers: {
    "Content-Type": "application/json",
    "same-site": "none",
    Accept: "application/json",
  },
  withCredentials: true
});

export default instance;
