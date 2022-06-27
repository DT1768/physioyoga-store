const {Order,ProductCart} = require("../models/order");

exports.getOrderById = (req,res,next,id) =>{
    Order.findById(id)
    .populate("products.product", "name price")
    .exec((err,order)=>{
        if(err){
            return res.stauts(400).json({
                error: "No order Found."
            });
        }
        req.order = order;
        next();
    });
};

exports.createOrder = (req,res) =>{
    req.body.order.user = req.profile;
    const order = new Order(req.body.order);
    order.save((err,order) =>{
        if(err){
            return res.stauts(400).json({
                error: "Failed to Save order in DB."
            });
        }
        res.json(order);
    });
};

exports.getAllOrders = (req,res) =>{
    Order.find()
    .populate("user", "_id name")
    .exec((err,order)=>{
        if(err){
            return res.status(400).json({
                error: "No order Found."
            });
        };
        res.json(order);
    });
};

exports.getOrderStatus = (req,res)=>{
    res.json(Order.schema.path("stauts").enumValues);
};

exports.updateStatus = (req,res) =>{
    Order.update(
        {_id: req.body.orderId},
        {$set: {status: req.body.status}},
        (err,order)=>{
            if(err){
                return res.stauts(400).json({
                    error: "Can't update order status."
                });
            }
            res.json(order);
        }
    );
};