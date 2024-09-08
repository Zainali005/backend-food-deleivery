import { Employees } from "../models/employee";

export const addEmployee = async (req, res) => {
    try {
     const {Emp_id,name,phone,address} =req.body;
     const newEmployee = new Employees({Emp_id,name,phone,address});
     await newEmployee.save();
     res.status(201).json({
        status: true,
        message: "Employee added successfully",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error adding employees" });
    }
  }