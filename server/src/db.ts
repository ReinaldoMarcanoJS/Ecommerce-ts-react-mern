import mongoose from "mongoose";
import { API_URI_DB } from "./config";

const connectDB = async () => {
  try {
    await mongoose.connect(API_URI_DB);
    console.log(">>>>> DB is connected");
  } catch (err) {
    console.log(err);
  }
};

export { connectDB };
