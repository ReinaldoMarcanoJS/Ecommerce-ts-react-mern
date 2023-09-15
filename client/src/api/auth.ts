import axios from "./axios";
import { LoginUser, User } from "../types";

export const apiRegister = async (user: User) => {
  const response = await axios.post("/register", {
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
  });

  return response;
};

export const apiLogin = async (user: LoginUser) => {
  const response = await axios.post("/login", {
    email: user.email,
    password: user.password,
  });
  console.log(response);
  
  return response;
};

export const apiLogout = async () => {
  const response = await axios.post("/logout");
  console.log(response);

  return response;
};
