import type { User } from "../types";
import userModel from "../models/user.model";
import bcrypt from "bcryptjs";
/**
 * Registrar usuario
 * @param user
 * @returns
 */

const RegisterUser = async (user: User) => {
  const passwordHash = await bcrypt.hash(user.password, 10);
  const newUser = {
    ...user,
    password: passwordHash,
  };
  const response = await userModel.create(newUser);
  return response;
};

export { RegisterUser };
