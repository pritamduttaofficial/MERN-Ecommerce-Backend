const express = require("express");
const {
  createOrder,
  fetchOrdersByUser,
  updateOrder,
} = require("../controllers/order.controller.js");

const router = express.Router();
// orders is already added in base path
router
  .post("/", createOrder)
  .get("/", fetchOrdersByUser)
  .patch("/:id", updateOrder);

exports.router = router;
