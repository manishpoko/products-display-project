import express from "express";
import mongoose from "mongoose";

import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/productController.js";

const ourRouter = express.Router();

ourRouter.post("/", createProduct )
ourRouter.get("/", getProducts )
//updating the product, (this will be done from the frontend)
ourRouter.put("/:id", updateProduct )
ourRouter.delete("/:id", deleteProduct)

export default ourRouter;