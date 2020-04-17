const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema(
  {
    items: Array,
    name: String,
    address: String,
    phone: String,
    info: String,
    payment: String,
    totalPrice: Number,
  },
  { versionKey: false }
);

module.exports = mongoose.model("orders", Order);
