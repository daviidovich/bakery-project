const db = require("../db/index");
const Order = require("../schemas/orderSchema");

// getPageAutho = (req, res) => {
//   res.sendFile(__dirname + "/authorization.html");
// };

makeAuthorization = (req, res) => {
  db.collection("admins").findOne({ login: req.body.login }, function (
    err,
    admin
  ) {
    console.log("User found");
    // In case the user not found
    if (err) {
      console.log("THIS IS ERROR RESPONSE");
      res.send(err);
    }
    if (admin && admin.password === req.body.password) {
      console.log("User and password is correct");
      res.status(200).send("okey");
    } else {
      console.log("Credentials wrong");
      res.status(404).send("Login invalid");
    }
  });
};

getHomePage = (req, res) => {
  res.status(200).redirect("/admhome");
};

getOrders = async (req, res) => {
  await Order.find({}, (err, orders) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!orders.length) {
      return res.status(404).json({ success: false, error: `Order not found` });
    }
    return res.status(200).json({ success: true, data: orders });
  }).catch((err) => console.log(err));
};

deleteOrder = async (req, res) => {
  await Order.findOneAndDelete({ _id: req.params.id }, (err, order) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!Order) {
      return res.status(404).json({ success: false, error: `Order not found` });
    }

    return res.status(200).json({ success: true, data: order });
  }).catch((err) => console.log(err));
};

getOrderById = async (req, res) => {
  await Order.findOne({ _id: req.params.id }, (err, order) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!order) {
      return res.status(404).json({ success: false, error: `Order not found` });
    }
    return res.status(200).json({ success: true, data: order });
  }).catch((err) => console.log(err));
};

module.exports = {
  //getPageAutho,
  makeAuthorization,
  getHomePage,
  getOrders,
  deleteOrder,
  getOrderById,
};
