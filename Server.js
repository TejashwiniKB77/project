import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);

app.listen(3002, () => {
  console.log("Server running at http://localhost:3002");
});
