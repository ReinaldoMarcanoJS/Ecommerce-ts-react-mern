import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import loginRoute from "./routes/Auth.routes";
import { connectDB } from "./db";
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

connectDB();
app.use(cors({
  origin: "*",
  credentials: true
}))
app.use(cookieParser());
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//Routes

app.use("/api",loginRoute);

export default app;
