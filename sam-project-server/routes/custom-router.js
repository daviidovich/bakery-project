const express = require("express");
const router = express.Router();

const ProductCtrl = require("../controllers/product-ctrl");

router.get("/", ProductCtrl.getProducts);
router.get("/:id", ProductCtrl.getProductById);
router.get("/:flag", ProductCtrl.findProductByFlag);
router.post("/order", ProductCtrl.makeOrder);

// router.delete("/product/:id", ProductCtrl.deleteProduct);
// router.put("/product/:id", ProductCtrl.updateProduct);
// router.post("/create", ProductCtrl.createProduct);
module.exports = router;
