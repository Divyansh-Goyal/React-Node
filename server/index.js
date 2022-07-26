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
    console.log(`DB connection Succesfull `);
  })
  .catch((err) => {
    console.log(err.message);
  });
  var db = mongoose.connection
  db.on('error', console.error.bind(console, 'MongoDb Connection Error'));


//Server PORT running   
const server = app.listen(process.env.PORT, async() => {
  await expressApp(app)
  console.log(`Server started on Port ${process.env.PORT}`);
});
