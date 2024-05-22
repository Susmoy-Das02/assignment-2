import { SOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (payLoad: SOrder) => {
  const result = await Order.create(payLoad);
  return result;
};
const getAllOrder = async () => {
  const result = await Order.find();
  return result;
};

const getOrdersByEmail = async (email: string) => {
  try {
    const orders = await Order.find({ email });
    return orders;
  } catch (error) {
    throw new Error("Error retrieving orders by email: " + error);
  }
};

export const OrderService = {
  createOrder,
  getAllOrder,
  getOrdersByEmail,
};
