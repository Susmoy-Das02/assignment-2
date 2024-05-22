"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const order_servive_1 = require("./order.servive");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_servive_1.OrderService.createOrder(req.body);
    res.json({
        success: true,
        message: "Order is created successfully ! ",
        data: result,
    });
});
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_servive_1.OrderService.getAllOrder();
        res.status(200).json({
            success: true,
            message: "Order retrieved successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching products",
            error: error,
        });
    }
});
const getOrdersByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const orders = yield order_servive_1.OrderService.getOrdersByEmail(email);
        res.status(200).json({
            success: true,
            message: "Orders retrieved successfully",
            data: orders,
        });
    }
    catch (error) {
        console.error("Error retrieving orders by email:", error);
        res.status(500).json({
            success: false,
            message: "Error retrieving orders by email",
            error: error,
        });
    }
});
exports.OrderControllers = {
    createOrder,
    getAllOrder,
    getOrdersByEmail,
};
