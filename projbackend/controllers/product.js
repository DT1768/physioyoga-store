const Product = require("../models/product");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.getProductById = (req,res,next,id) => {
    Product.findById(id).populate("category").exec((err,product)=>{
        if(err){
            res.status(400).json({
                error: "Product Not Found."
            });
        };
        req.product = product;
        next();
    });
};

exports.createProduct = (req,res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        if(err){
            res.status(400).json({
                error: "problem creating product."
            });
        }

        //De-structure the fields 
        const {name, description, price, category, stock,} = fields;

        if(!name || !description || !price || !category || !stock){
            return res.status(400).json({
                error: "Please include all fields"
            });
        }

        //TODO: Restriction on field
        let product = new Product(fields);

        //Handling Files
        if(file.photo){
            if(file.photo.size > (1024*1024*3)){
                return res.status(400).json({
                    error: "File size is too big!!"
                });
            }
            product.photo.data = fs.readFileSync(file.photo.path);
            product.photo.contentType = file.photo.type;
        };
        //console.log(product);

        //Save to DB
        product.save((err,product) => {
            if(err){
                return res.status(400).json({
                    error: "Saving Product in DB Failed"
                });
            }
            res.json(product);
        })
    });
};

exports.getProduct = (req,res) => {
    req.product.photo = undefined
    return res.json(req.product);
}

exports.photo = (req,res,next) => {
    if(req.product.photo.data){
        ress.set("Content-Type", req.product.photo.contentType);
        return res.send(req.product.photo.data);
        next();
    }
}

exports.deleteProduct = (req,res) => {
    const product = req.product;
    product.remove((err, product)=>{
        if(err){
            res.status(400).json({
                error: "Failed to delete product."
            });
        };
        res.json({
            message: "Product Successfully Deleted.",
            product
        });
    });
};

exports.updateProduct = (req,res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        if(err){
            res.status(400).json({
                error: "problem creating product."
            });
        }

        //De-structure the fields 
        const {name, description, price, category, stock,} = fields;


        //updation code
        let product = req.product;
        product = _.extend(product, fields);

        //Handling Files
        if(file.photo){
            if(file.photo.size > (1024*1024*3)){
                return res.status(400).json({
                    error: "File size is too big!!"
                });
            }
            product.photo.data = fs.readFileSync(file.photo.path);
            product.photo.contentType = file.photo.type;
        };
        //console.log(product);

        //Save to DB
        product.save((err,product) => {
            if(err){
                return res.status(400).json({
                    error: "Product Updation Failed."
                });
            }
            res.json(product);
        })
    });
};
