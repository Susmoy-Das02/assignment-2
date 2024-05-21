import { Schema, model } from "mongoose";
import { SInventory, SProduct, SVariant } from "./product.interface";

const variantSchema = new Schema<SVariant>({
  type: { type: String, require: true },
  value: { type: String, require: true },
});
const inventorySchema = new Schema<SInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<SProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});

export const Product = model<SProduct>("Product", productSchema);
