import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/", ProductControllers.createProduct);
router.get("/", ProductControllers.getAllProducts);
router.get("/:productId", ProductControllers.getSingleProduct);
router.get("/api/products", ProductControllers.searchProducts);
router.delete("/:productId", ProductControllers.deleteProduct);

export const ProductRoute = router;
