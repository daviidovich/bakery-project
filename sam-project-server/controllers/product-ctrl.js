const Product = require("../product/productSchema");
const Order = require("../admin/orderSchema");

createProduct = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a product",
    });
  }

  const product = new Product(body);

  if (!product) {
    return res.status(400).json({ success: false, error: err });
  }

  product
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: product._id,
        message: "Product created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Product not created!",
      });
    });
};

getProducts = async (req, res) => {
  await Product.find({}, (err, products) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!products.length) {
      return res
        .status(404)
        .json({ success: false, error: `Product not found` });
    }
    return res.status(200).json({ success: true, data: products });
  }).catch((err) => console.log(err));
};

getProductById = async (req, res) => {
  await Product.findOne({ _id: req.params.id }, (err, product) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: `Product not found` });
    }
    return res.status(200).json({ success: true, data: product });
  }).catch((err) => console.log(err));
};

deleteProduct = async (req, res) => {
  await Product.findOneAndDelete({ _id: req.params.id }, (err, product) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!Product) {
      return res
        .status(404)
        .json({ success: false, error: `Product not found` });
    }

    return res.status(200).json({ success: true, data: product });
  }).catch((err) => console.log(err));
};

updateProduct = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Product.findOne({ _id: req.params.id }, (err, product) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Product not found!",
      });
    }
    product.section = body.section;
    product.name = body.name;
    product.description = body.description;
    product.price = body.price;
    product.discount = body.discount;
    product.flag = body.flag;

    product
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: product._id,
          message: "Product updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Product not updated!",
        });
      });
  });
};

findProductByFlag = async (req, res) => {
  await Product.find({ flag: req.params.flag }, (err, product) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!Product) {
      return res
        .status(404)
        .json({ success: false, error: `Product not found` });
    }

    return res.status(200).json({ success: true, data: product });
  }).catch((err) => console.log(err));
};

makeOrder = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide an order",
    });
  }

  const order = new Order(body);

  if (!order) {
    return res.status(400).json({ success: false, error: err });
  }

  order
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: order._id,
        message: "Order created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Order not created!",
      });
    });
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  findProductByFlag,
  makeOrder,
};
