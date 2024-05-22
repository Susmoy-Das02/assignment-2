import { Schema, model } from "mongoose";
import { SOrder } from "./order.interface";

const orderSchema = new Schema<SOrder>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const Order = model<SOrder>("Order", orderSchema);
