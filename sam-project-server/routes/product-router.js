const express = require("express");
const router = express.Router();

const ProductCtrl = require("../controllers/product-ctrl");

router.get("/", ProductCtrl.getProducts);
router.post("/create", ProductCtrl.createProduct);
router.get("/:id", ProductCtrl.getProductById);
// router.delete("/product/:id", ProductCtrl.deleteProduct);
//router.put("/product/:id", ProductCtrl.updateProduct);

module.exports = router;
