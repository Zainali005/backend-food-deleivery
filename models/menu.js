import mongoose from "mongoose";

export const MenuStr = new mongoose.Schema({
    name: String,
    price: Number,
    drink: String,
    flavour: String,
    category: String,
    sku: String,
  });
  
  const Menu = new mongoose.model("Menu", MenuStr);