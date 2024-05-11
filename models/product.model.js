const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price must not be negative"],
      max: [100000],
    },
    discountPercentage: {
      type: Number,
      required: true,
      min: [1, "Wrong minimum discount"],
      max: [99, "Wrong maximum discount"],
    },
    rating: {
      type: Number,
      min: [0, "Wrong minimum rating"],
      max: [5, "Wrong maximum rating"],
      default: 0,
    },
    stock: {
      type: Number,
      min: [1, "Minimum stock quantity is 1"],
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const virtual = productSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
productSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Product = mongoose.model("Product", productSchema);
