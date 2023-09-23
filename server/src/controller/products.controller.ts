import { Request, Response } from "express";
import fs from "fs-extra";
import path from "path";
import { addNewProduct } from "../services/products/addProduct.service";
import dbProducts from "../models/product.model";
/**
 * is eas
 * Register
 * @param req
 * @param res
 */

export const addProduct = async (req: Request, res: Response) => {
  res.header("access-Control-Allow-Origin", "*");
  const { user, description, title, price } = req.body;
  const imagePath = req.file?.path;

  if (user && description && title && price && imagePath) {
    const newImage = {
      title,
      user,
      description,
      price,
      imagePath,
    };

    const newProduct = await addNewProduct(newImage);

    console.log(newProduct);
    return res.status(200).json({
      message: "OK",
      data: newProduct,
    });
  } else {
    return res.status(400).send("incompleted form");
  }
};
export const getProduct = async (req: Request, res: Response) => {
  console.log(req.params.id);
  const { id } = req.params;
  try {
    const product = await dbProducts.findById(id);
    return res.json({ data: product });
  } catch (error) {
    return res.status(400).json({ message: "bad request" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  console.log(req.params.id);
  const { id } = req.params;
  try {
    const product = await dbProducts.findByIdAndDelete(id);
    if (product) {
      await fs.unlink(path.resolve(product.imagePath));
    }
    return res.json({ message: "Deleted", data: "OK" });
  } catch (error) {
    return res.status(400).json({ message: "not found" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  console.log(req.params.id);
  const { title, description, price } = req.body;
  const { id } = req.params;
  try {
    const product = await dbProducts.findByIdAndUpdate(id, {
      title,
      description,
      price,
    }, {new: true});
    return res.json({ message: "Updated", data: product });
  } catch (error) {
    return res.status(400).json({ message: "not found" });
  }
};

export const getProducts = async (_req: Request, res: Response) => {
  res.header("access-Control-Allow-Origin", "*");

  const products = await dbProducts.find({});
  res.send({ products });
};
