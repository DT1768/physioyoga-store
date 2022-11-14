var express = require("express");
var router = express.Router();

const { body, check, validationResult } = require('express-validator');

const { signout, signup, signin, isSignedIn } = require("../controllers/auth");
const user = require("../models/user");

router.post(
    "/signup",
    [
        check("name", "first name should not be empty.").isLength({ min: 1}),
        check("lastname", "last name should not be empty.").isLength({ min: 1}),
        check("email", "valid email Required").isEmail().normalizeEmail(),
        body("email").custom( value => {
            return user.find({
                email: value
            }).then(user =>{
            if(user.length > 0){
                return Promise.reject("Email Already in Use.");
            }
            })
        }),
        check("password", "Invalid Password").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i"),
    ],
    signup
);

router.post(
    "/signin",
    [
        check("email", "email Required").isEmail(),
        check("password", "password field is required.").isLength({ min: 1}),
    ],
    signin
);

router.get("/signout", signout);

router.get("/testroute", isSignedIn, (req,res)=>{
    res.json(req.auth);
});

module.exports = router;