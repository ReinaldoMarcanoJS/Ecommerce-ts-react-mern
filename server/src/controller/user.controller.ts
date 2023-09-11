import { RegisterUser } from "../services/register.service";
import { getDetailUser } from "../services/getUser.service";
import { Request, Response } from "express";
import { createAccessToken } from "../services/jwt.service";
import bcrypt from "bcryptjs";
import dbUser from "../models/user.model";
/**
 * is eas
 * Register
 * @param req
 * @param res
 */

export const RegisterUsers = async (req: Request, res: Response) => {
  const { email, name,  lastname, password } = req.body;

    const response = await dbUser.findOne({ email });
    if (response) return res.status(544).send("This email already exist");

    const user = await RegisterUser({ name,lastname, email, password });
    const token = await createAccessToken({ payload: user._id });
    console.log(token);
    console.log(user);
    
    res.cookie("token", token);
    return res.status(200).send("Registred");
 
};

export const getUser = async (req: Request, res: Response) => {
  const { email } = req.body;
  console.log(req.body);

  const user = await getDetailUser(email);
  res.send({ user });
};

export const LoginUsers = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const response = await dbUser.findOne({ email });
  if (!response) return res.status(404).send("This email not is register");
  const ismatch = await bcrypt.compare(password, response.password);
  if (!ismatch) return res.status(400).send("Incorrect password");
  try {
    const token = await createAccessToken({ payload: response._id });
    res.cookie("token", token);
    return res.status(200).json({
      id: response._id,
      name: response.name,
      lastname: response.lastname,
      email: response.email,
      createAt: response.createdAt,
      updateAt: response.updatedAt,
    });
  } catch (error) {
    return res.status(401).send("Error Login");
  }
};
