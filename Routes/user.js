const { loggedIn, Register, getAllUsers } = require("../Controllers/user");
import express from "express";
const router = express.Router();
router.post("/", loggedIn);

router.post("/register", Register);

router.get("/users", getAllUsers);
