import { MenuStr } from "../models/menu";

export const addMenu = async (req, res) => {
    const { name, price, drink, category, flavour, sku } = req.body;
    try {
      const dbMenu = await MenuStr.find({ sku });
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
  }

  export const getOrders = async (req, res) => {
    try {
      const orders = await Menu.find();
      res.status(200).json({ orders });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error fetching users" });
    }
  }