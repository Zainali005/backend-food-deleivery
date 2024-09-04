const { addMenu, getOrders } = require("../Controllers/menu");
import express from "express";
const router = express.Router();
app.post("/addMenu", addMenu);

router.get("/orders", getOrders);
