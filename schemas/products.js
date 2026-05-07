import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  picture: { type: String, required: true },
  producer: { type: String, required: true },
  material: { type: String, required: false },
  description: { type: String, required: true },
  price: { type: String, required: true },
  seller: { type: String, required: true },
});
const Products = mongoose.model("Product", productSchema);

export default Products;
