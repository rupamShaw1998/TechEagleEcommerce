const mongoose = require("mongoose");

require('dotenv').config();

const URI = "mongodb+srv://rupamShaw1998:rupam@cluster0.5rqasic.mongodb.net/TechEagle";

const connect = mongoose
  .connect(URI)
  .then(() => console.log("DB connected Successfully"))
  .catch((err) => {
    console.error(err);
  });

module.exports = connect;
