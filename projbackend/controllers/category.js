const Category = require("../models/category");

exports.getCategoryById = (req, res, next, id) =>{
    Category.findById(id).exec((err,category)=>{
        if(err){
            res.status(400).json({
                error: "Category not Found."
            });
        }
        else{
            req.category = category;
        next();
        }
    });
};

exports.createCategory = (req,res) =>{
    const category = new Category(req.body);
    category.save((err,category) =>{
        if(err){
            res.status(400).json({
                error: "Not able to create category."
            });
        }
        else{
            res.json({category});
        }
    });
};

exports.getCategory = (req,res) => {
    return res.json(req.category);
};
exports.getAllCategory = (req,res) => {
    Category.find().exec((err,categories) => {
        if(err){
            res.status(400).json({
                error: "No categories found."
            });
        }
        else{
            res.json(categories);
        }
    });
};

exports.updateCategory = (req,res) => {
    const category = req.category;
    category.name = req.body.name;

    category.save((err,updatedCategory) =>{
        if(err){
            res.status(400).json({
                error: "Not able to update category."
            });
        }
        else{
            res.json(updatedCategory);
        }
    });
};

exports.removeCategory = (req,res) => {
    const category = req.category;
    category.remove((err, category)=>{
        if(err){
            res.status(400).json({
                error: "Failed to delete category."
            });
        }
        else{
        res.json({
            message: `Successfully Deleted ${category}.`
        })}
    });
};