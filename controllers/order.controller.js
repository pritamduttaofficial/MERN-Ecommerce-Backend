const { Order } = require("../models/order.model.js");
const { User } = require("../models/user.model.js");

exports.fetchOrdersByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await Order.find({ user: userId });

    res.status(200).json(orders);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createOrder = async (req, res) => {
  const order = new Order(req.body);
  try {
    const doc = await order.save();
    // await User.findByIdAndUpdate(user, { $push: { orders: doc.id } });
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

// exports.deleteOrder = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const order = await Order.findByIdAndDelete(id);
//     res.status(200).json(order);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// };

exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json(err);
  }
};
