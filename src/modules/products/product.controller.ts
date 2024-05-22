import { Request, Response } from "express";
import { ProductService } from "./product.servive";

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductService.createProduct(req.body);
  res.json({
    success: true,
    message: "Product is created successfully ! ",
    data: result,
  });
};
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProducts();
    res.status(200).json({
      success: true,
      message: "Products retrieved successfully!",
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

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductService.getSingleProduct(productId);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product retrieved successfully!",
      data: result,
    });
  } catch (error: any) {
    console.error("Error fetching product:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching product",
      error: error,
    });
  }
};

const searchProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const result = await ProductService.searchProducts(searchTerm);
    res.status(200).json({
      success: true,
      message: "Products retrieved successfully!",
      data: result,
    });
  } catch (error) {
    console.error("Error searching products:", error);
    res.status(500).json({
      success: false,
      message: "Error searching products",
      error: error,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductService.deleteProduct(productId);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting product",
      error: error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  searchProducts,
  deleteProduct,
};
