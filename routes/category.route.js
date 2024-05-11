const express = require("express");
const {
  fetchCategories,
  createCategory,
} = require("../controllers/category.controller.js");

const router = express.Router();

router.get("/", fetchCategories).post("/", createCategory);

exports.router = router;
