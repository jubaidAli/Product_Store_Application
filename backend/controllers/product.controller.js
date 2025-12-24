import mongoose from "mongoose";
import Product from "../models/product.model.js";


export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log("Error fetching products:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const createProduct = async (req, res) => {
    const product = req.body; // user will send this data
    
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct, message: `Product ${newProduct.name} created successfully` });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
}  


export const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    
    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, message: `Product ${deletedProduct.name} deleted successfully` });
    } catch (error) {
        res.status(500).json({ success: false, message: "Product not found" });
    }
}

export const updateProduct = async (req, res) => {
    const productId = req.params.id;
    const updates = req.body;
    
    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, updates, {new: true,runValidators: true});
        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, data: updatedProduct, message: `Product ${updatedProduct.name} updated successfully` });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
} 