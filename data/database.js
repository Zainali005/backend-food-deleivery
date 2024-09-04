import mongoose from "mongoose";

export const connectDB = () => {
    console.log("MongoDB URI:", process.env.MONGO_URI);
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "FoodApp",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};
