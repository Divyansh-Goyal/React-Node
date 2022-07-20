const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");
const expressApp = require("./express");


const app = express();
require("dotenv").config();


// Database conection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((resp) => {
    console.log(`DB connection Succesfull ${resp}`);
  })
  .catch((err) => {
    console.log(err.message);
  });

//Server PORT running   
const server = app.listen(process.env.PORT, async() => {
  await expressApp(app)
  console.log(`Server started on Port ${process.env.PORT}`);
});
