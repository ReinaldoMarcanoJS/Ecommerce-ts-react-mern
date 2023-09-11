import axios from "./axios";
import { LoginUser, User } from "../types";

export const apiRegister = async (user: User) => {
  const response = await axios.post(
    "/register",
    {
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  return response;
};

export const apiLogin = async (user: LoginUser) => {
  const response = await axios.post(
    "/login",
    {
      email: user.email,
      password: user.password,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
    console.log(response);
    
  return response;
};
