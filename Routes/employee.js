import express from "express";
import { addEmployee } from "../Controllers/Employee";
const router = express.Router();

router.post("/addEmployee", addEmployee);