import { Request, Response } from "express";
import { OrderService } from "./order.servive";

const createOrder = async (req: Request, res: Response) => {
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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching products",
      error: error,
    });
  }
};

const getOrdersByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;

    const orders = await OrderService.getOrdersByEmail(email);

    res.status(200).json({
      success: true,
      message: "Orders retrieved successfully",
      data: orders,
    });
  } catch (error) {
    console.error("Error retrieving orders by email:", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving orders by email",
      error: error,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrder,
  getOrdersByEmail,
};
