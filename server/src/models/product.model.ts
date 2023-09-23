import {Schema,model} from "mongoose";
import { productType } from "../types";
const ProductSchema = new Schema(
  {
    user: {
        type: String,
        required: true,
        trim: true
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
    },
    imagePath: {
        type: String,
        required: true,
      },
  },
  {
    timestamps: true,
  }
);



const Mongodb = model<productType>("Product", ProductSchema)
export default Mongodb