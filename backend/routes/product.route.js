import express from 'express';
import { getAllProducts, createProduct, deleteProduct, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getAllProducts);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);


export default router;