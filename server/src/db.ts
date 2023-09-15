import mongoose from "mongoose";

const API_URI_DB = process.env.API_URI_DB
const connectDB = async () => {
  try {
    await mongoose.connect(`${API_URI_DB}`)
    .then(res => console.log(res.Aggregate));
  } catch (err) {
    console.log(err);
  }
};

export { connectDB };
