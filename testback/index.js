const express = require("express");

const app = express();

const port = 3000;

const admin = ((req,res)=> res.send("Admin Dash."));

const isAdmin = (req,res, next)=>{
    console.log("isAdmin is running.");
    next();
};

const isLoggedIn = (req,res,next)=>{
    console.log("isLoggedIn is true.");
    next();
}

app.get("/admin", isLoggedIn, isAdmin, admin);

app.get('/',(req, res) => res.send('Hello World!'));

app.get('/login',(req, res) => res.send('Login!'));

app.get('/signup',(req, res) => res.send('Sign up!'));

app.get('/logout',(req, res) => res.send('You are logged out.'));

app.get('/myname',(req, res) => res.send('My Name is Dhurv.'))

app.listen(port, () => console.log(`Example app listening on port ${port}.`));