const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRouter = require("./routes/product.route.js");
const categoryRouter = require("./routes/category.route.js");
const userRouter = require("./routes/user.route.js");
const authRouter = require("./routes/auth.route.js");
const cartRouter = require("./routes/cart.route.js");
const orderRouter = require("./routes/order.route.js");

const app = express();

// database connection
async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
    console.log("Database Connection Success");
  } catch (error) {
    console.log("Something went wrong while database connection: ", error);
  }
}
connectDB();

// middlewares
app.use(express.json());
app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);

// routes
app.use("/products", productRouter.router);
app.use("/categories", categoryRouter.router);
app.use("/users", userRouter.router);
app.use("/auth", authRouter.router);
app.use("/cart", cartRouter.router);
app.use("/orders", orderRouter.router);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server listening at PORT: ${PORT}`);
});
