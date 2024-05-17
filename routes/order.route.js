const express = require("express");
const {
  createOrder,
  fetchOrdersByUser,
  updateOrder,
  fetchAllOrders,
} = require("../controllers/order.controller.js");

const router = express.Router();

router
  .post("/", createOrder)
  .get("/user/:userId", fetchOrdersByUser)
  .patch("/:id", updateOrder)
  .get("/", fetchAllOrders);

exports.router = router;
