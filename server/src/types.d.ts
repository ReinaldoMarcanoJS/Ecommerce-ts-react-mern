import { Document } from "mongoose";
export type User = {
  email: string;
  name: string;
  lastname: string;
  password: string;
};

export type LoginUser = Omit<User, "name">;

export type Product = {
  name: string;
  description: string;
  img: HTMLImageElement
  price: string;
};

export type ArrayProducts = {
  products: Product[]
}

export interface productType extends Document {
  user: string,
  title: string,
  description: string,
  price: string,
  imagePath: string,
}