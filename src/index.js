const express = require("express");
const cors = require("cors");

require("./configs/db");

const app = express();
app.use(cors());
app.use(express.json());




app.listen(5000, () => {
    console.log("Listening...");
});
