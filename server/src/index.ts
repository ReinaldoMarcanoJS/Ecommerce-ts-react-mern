import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import loginRoute from "./routes/Auth.routes";
import { connectDB } from "./db";
import { PORT } from "./config";
const app = express();
app.use(express.json());

connectDB();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
app.use(cookieParser());
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//Routes

app.use("/api",loginRoute);

export default app;
