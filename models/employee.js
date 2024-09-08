import mongoose from "mongoose";

export const Employees = new mongoose.Schema({
  Emp_id: Number,
  name: String,
  contact: Number,
  Address: String,
});

const Employees = new mongoose.model("Employees", MenuStr);
