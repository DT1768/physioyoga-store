const User = require("../models/user");
const { check, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");


exports.signup = (req,res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({
            errorMessage: errors.array()[0].msg,
            parameter: errors.array()[0].param,
            location: errors.array()[0].location
        });  
    };

    const user = new User(req.body);
    user.save((err, user)=>{
        if(err){
            return res.status(400).json({
                err: "Not Able to save user in DB."
            });
        };
        res.json({
            name: user.name,
            email: user.email,
            ID: user._id,
        });
    });
};

exports.signin = (req,res) =>{
    const errors = validationResult(req);
    const {email, password} = req.body;

    if(!errors.isEmpty()){
        return res.status(422).json({
            errorMessage: errors.array()[0].msg,
            parameter: errors.array()[0].param,
            location: errors.array()[0].location
        });  
    };

    User.findOne({email}, (err,user)=>{
        if(err || !user){
            return res.status(400).json({
                error: "User Email Doesn't Exist."
            });
        }

        if(!user.authenticate(password)){
            return res.status(401).json({
                error: "Email and password do not match."
            });
        }

        //Create Token
        const token = jwt.sign({_id: user._id}, process.env.SECRET);
        //Putting token in cookie
        res.cookie("token",token,{expire: new Date() + 9999});
        
        //Sending resposne to front-end
        const {_id, name, email, role} = user;
        return res.json({token, user:{_id, name, email, role}})
    });
};

exports.signout = (req,res)=>{
    res.clearCookie("token");

    res.json({
        message: "User Signed Out Succesfully."
    });
};

//protected Routes
exports.isSignedIn = expressJwt({
    secret: process.env.SECRET,
    userProperty: "auth"
});

//custom middleware
exports.isAuthenticated = (req, res, next) => {
    let checker = req.profile && req.auth && req.profile._id == req.auth._id;
    if(!checker){
        return res.status(403).json({
            error: "Access Denied"
        });
    };
    next();
}

exports.isAdmin = (req, res, next) => {
    if(req.profile.role === 0){
        return res.status(403).json({
            error: "You're not Admin."
        });
    };
    next();
}