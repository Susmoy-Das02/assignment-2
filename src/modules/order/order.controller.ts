import { Request, Response } from "express";
import { OrderService } from "./order.servive";

const createOrder = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await OrderService.createOrder(req.body);
  res.json({
    success: true,
    message: "Order is created successfully ! ",
    data: result,
  });
};
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getAllOrder();
    res.status(200).json({
      success: true,
      message: "Order retrieved successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error fetching products",
      error: error,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrder,
};
