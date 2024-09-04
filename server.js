import express from "express";
import { config } from "dotenv";
import { connectDB } from "./data/database.js";

export const app = express();

config({
  path: "./data/config.env",
});
connectDB();
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
