const express = require("express");
const cors = require("cors");
const auth= require('./Routes/auth')
const users = require('./Routes/users')


module.exports = async (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended:true, limit:'1mb'}))
    

    //api_routes
    auth(app);
    users(app);
}

