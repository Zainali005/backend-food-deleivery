import { connectDB } from "./data/database";

const express = require("express");
const mongoose = require("mongoose");
export const app = express();

config({
  path: "./data/config.env",
});
connectDB();

app.use(express.json());

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
