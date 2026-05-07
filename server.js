import express from "express";
import dotenv from "dotenv";
import connectDB from "./dbConnection.js";
import productsRouter from "./routes/products.js";

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();

app.use(express.json());

app.use("/", productsRouter);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
