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
export const OrderService = {
  createOrder,
  getAllOrder,
};
