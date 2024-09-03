const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/FoodApp");
const app = express();
app.use(express.json());
const port = 3000;
const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  email: String,
});
const MenuStr = new mongoose.Schema({
  name: String,
  price: Number,
  drink: String,
  flavour: String,
  category: String,
  sku: String,
});

const User = new mongoose.model("FoodUser", userSchema);
const Menu = new mongoose.model("Menu", MenuStr);

app.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send({ status: false, message: "User not found" });
    }
    if (user.password !== password) {
      return res.status(401).send({
        status: false,
        message: "Incorrect Password",
      });
    }
    return res.status(200).send({
      status: true,
      message: "Logged in Successfully!",
      redirectUrl: "/dashboard",
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: "An error occurred during login",
      error: error.message,
    });
  }
});
app.post("/addMenu", async (req, res) => {
  const { name, price, drink, category, flavour, sku } = req.body;
  try {
    const dbMenu = await Menu.find({ sku });
    console.log(dbMenu);

    if (dbMenu.length > 0) {
      return res.status(400).json({
        status: false,
        message: "Menu already exists",
      });
    } else {
      const newMenu = new Menu({ name, price, flavour, drink, category, sku });
      await newMenu.save();
      res.status(201).json({
        status: true,
        message: "Menu added successfully",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: "An error occurred during menu addition",
      error: error.message,
    });
  }
});
app.post("/register", async (req, res) => {
  const { name, username, password } = req.body;
  const usernamedb = await User.find({ username });
  if (usernamedb.length > 0) {
    return res.status(200).json({
      status: false,
      message: "Username already exists",
    });
  }
  const newUser = new User({ name, username, password });
  await newUser.save();
  res.status(201).json({
    status: true,
    message: "User registered successfully",
  });
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching users" });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
