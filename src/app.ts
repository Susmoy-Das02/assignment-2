import express, { Request, Response } from "express";
import { ProductRoute } from "./modules/products/product.route";

const app = express();

//parsers

app.use(express.json());

app.use("/api/products", ProductRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
