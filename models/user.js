import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: String,
  });
  
const User = new mongoose.model("FoodUser", userSchema);