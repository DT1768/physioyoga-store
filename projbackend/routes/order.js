const express = require("express");
const router = express.Router();

const {isSignedIn ,isAuthenticated, isAdmin} = require("../controllers/auth");
const {getUserByID, pushOrderInPurchaseList} = require("../controllers/user");
const {updateStock} = require("../controllers/product");
const {getOrderById, createOrder, getAllOrders, getOrderStatus, updateStatus} = require("../controllers/order");

//PARAMS
router.param("userId", getUserByID);
router.param("orderId", getOrderById);

//ROUTES
//CREATE
router.post("/order/create/:userId", isSignedIn, isAuthenticated, pushOrderInPurchaseList, updateStock, createOrder);
//READ
router.get("/order/all/:userId", isSignedIn, isAuthenticated, isAdmin, getAllOrders);
//STATUS
router.get("/order/status/:userId", isSignedIn, isAuthenticated, isAdmin, getOrderStatus);
router.put("/order/:orderId/status/:userId", isSignedIn, isAuthenticated, isAdmin, updateStatus);

module.exports = router;