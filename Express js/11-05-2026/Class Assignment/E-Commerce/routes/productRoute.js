const express = require("express");
const Product = require("../models/Product");

const productRouter = express.Router();

productRouter.get("/products", async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            message: "Products Fetched",
            success: true,
            count: products.length,
            products
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
})
productRouter.get("/products/:id", async (req, res) => {

    try {

        const product = await Product.findOne({
         id: req.params.id
      });;

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            product
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

module.exports = productRouter;