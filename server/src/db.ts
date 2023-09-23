import mongoose from "mongoose";

const API_URI_DB = process.env.API_URI_DB
const connectDB = async () => {
  try {
    await mongoose.connect(`${API_URI_DB}`)
    .then(() => console.log("Succesfully conection"));
  } catch (err) {
    console.log(err);
  }
};

export { connectDB };
