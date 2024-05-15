const express = require("express");
const {
  fetchUserById,
  updateUser,
} = require("../controllers/user.controller.js");

const router = express.Router();

router.get("/:id", fetchUserById).patch("/:id", updateUser);

exports.router = router;
