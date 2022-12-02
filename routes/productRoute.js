import express from "express";
import { addProduct, deleteProduct, showProduct, updateProduct } from "../controller/product.js";
const routes = express.Router();


routes.post('/addproduct', addProduct)
routes.get('/product', showProduct)
routes.put('/updateproduct/:_id',  updateProduct)
routes.delete('/product/:_id',  deleteProduct)


export default routes