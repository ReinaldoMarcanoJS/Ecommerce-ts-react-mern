import  express from 'express'
import multer from "../libs/multer"
import { addProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controller/products.controller'
// import {ValidateSchema} from '../middlewares/validator.squema'
// import { ProductSchema } from '../squemas/product.schema'
const router = express.Router()

router.route("/products")
.get(getProducts) 
.post(multer.single('image'),addProduct) 

router.route("/products/:id")
.get(getProduct) 
.delete(deleteProduct)
.put(updateProduct)



export default router