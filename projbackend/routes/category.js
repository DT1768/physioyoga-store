const express = require("express");
const router = express.Router();

const {getCategoryById, createCategory, getCategory, getAllCategory, updateCategory, removeCategory} = require("../controllers/category");
const {isSignedIn ,isAuthenticated, isAdmin} = require("../controllers/auth");
const {getUserByID} = require("../controllers/user");

//params
router.param("userId",getUserByID);
router.param("categoryId", getCategoryById);

//CREATE
router.post("/category/create/:userId", isSignedIn, isAuthenticated, isAdmin, createCategory);

//Read
router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategory);

//UPDATE
router.put("/category/:categoryId/:userId",isSignedIn, isAuthenticated, isAdmin, updateCategory);

//DELETE
router.delete("/category/:categoryId/:userId",isSignedIn, isAuthenticated, isAdmin, removeCategory);

module.exports = router;