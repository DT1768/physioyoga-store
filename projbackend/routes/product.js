const express = require("express");
const router = express.Router();

const {getProductById, createProduct, getProduct, photo, deleteProduct, updateProduct} = require("../controllers/product");
const {} = require("../controllers/category");
const {isSignedIn ,isAuthenticated, isAdmin} = require("../controllers/auth");
const {getUserByID} = require("../controllers/user");

//PARAMS
router.param("userId",getUserByID); 
router.param("productId",getProductById);

//ROUTES

//CREATE
router.post("/product/create/:userId", isSignedIn, isAuthenticated, isAdmin, createProduct);
//READ
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);
//DELETE
router.delete("/product/:productId/:userId", isSignedIn, isAuthenticated, isAdmin, deleteProduct);
//UPDATE
router.put("/product/:productId/:userId", isSignedIn, isAuthenticated, isAdmin, updateProduct);
//Listing Route


module.exports = router;