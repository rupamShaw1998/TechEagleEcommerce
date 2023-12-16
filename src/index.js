const express = require("express");
const cors = require("cors");
const userController = require("./controllers/user.controllers");
const inventoryController = require("./controllers/inventory.controllers");
const orderControllers = require("./controllers/order.controllers");

require("./configs/db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", userController);
app.use("/inventory", inventoryController);
app.use("/order", orderControllers);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});
