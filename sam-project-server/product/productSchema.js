const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    section: String,
    name: String,
    description: String,
    price: Number,
    discount: Number
  },
  { versionKey: false }
);

module.exports = mongoose.model("products", Product);
