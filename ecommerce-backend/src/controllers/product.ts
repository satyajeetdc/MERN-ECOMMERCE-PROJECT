import { Request } from "express";
import { TryCatch } from "../middlewares/error.js";
import { NewProductRequestBody } from "../types/types.js";
import { Product } from "../models/product.js";
import ErrorHandler from "../utils/utility-class.js";
import { rm } from "fs";

export const newProduct = TryCatch(
  async (req: Request<{}, {}, NewProductRequestBody>, res, next) => {
    const { name, category, price, stock } = req.body;
    const photo = req.file;

    if (!photo)
      return next(new ErrorHandler("Please add a product image", 400));

    if (!name || !category || !price || !stock) {
      rm(photo.path, () => {
        console.log("Photo Deleted");
      });
      return next(
        new ErrorHandler("Please enter all the necessary product details", 400)
      );
    }

    await Product.create({
      name,
      category: category.toLowerCase(),
      price,
      stock,
      photo: photo.path,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully.",
    });
  }
);
