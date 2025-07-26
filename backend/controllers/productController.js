import express from "express";
import mongoose from "mongoose";
import Product from "../models/ProductModel.js";

export const createProduct = async (req, res) => {
    const product = req.body; // user will send this data

    if( !product.name || !product.price || !product.image) {
        return res.status(400).json({success: false, message: "pls provide all details"});
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct})
    } catch (error) {
        console.error("error in creating product", error.message)
        res.status(500).json({success: false, message: "server error"})
    }
}

export const getProducts = async(req, res) => {
    try {
        const allProducts = await Product.find({})
        res.status(200).json({message: "all products list", data: allProducts})

    } catch (error) {
        console.error("error in getting all products", error.message)
        res.status(400).json({success: false, message: "server error", })
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params
    const productToUpdate = req.body


    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, productToUpdate, {new:true})
        res.status(200).json({success: true, message: "product updated", data: updatedProduct})
    } catch (error) {
        console.log("error in updating", error.message )
        res.status(500).json({success: false, message: "server error"})
        
    }
}

export const deleteProduct = async(req, res) => {

    const { id } = req.params; 
    console.log("id is:", id);

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ success: false, message: "invalid product id"})

    }    

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "product deleted"})
    } catch (error) {
        console.error("error in deleting", error.message)
        res.status(500).json({success: false, message: "server error"})
    }
}
