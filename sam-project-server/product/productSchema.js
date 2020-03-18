const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    section: String,
    imageS: String,
    product: {
      name: String,
      imageP: String,
      description: String,
      discount: Number,
      price: Number
    }
  },
  { versionKey: false }
);

module.exports = mongoose.model("products", Product);
