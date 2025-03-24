import mongoose from "mongoose";
const { Schema } = mongoose;

// Schema definieren:
const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    currency: String,
});

// Model definieren:
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
