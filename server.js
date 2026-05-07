import express from "express";
import dotenv from "dotenv";
import connectDB from "./dbConnection.js";
import productsRouter from "./routes/products.js";

const app = express();
const PORT = 4000;

dotenv.config();

app.use(express.json());

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Serve running on port ${PORT}`);
  });
});

app.use("/", productsRouter);

app.listen(3000, () => {
  console.log(`example`);
});
