const express = require("express");
const router = express.Router();

const AdminCtrl = require("../controllers/admin-ctrl");
const ProductCtrl = require("../controllers/product-ctrl");

//router.get("/", AdminCtrl.getPageAutho);
router.post("/", AdminCtrl.makeAuthorization);
router.get("/gethome", AdminCtrl.getHomePage);

router.get("/list", ProductCtrl.getProducts);
router.post("/product", ProductCtrl.createProduct);
router.get("/product/:id", ProductCtrl.getProductById);
router.delete("/product/:id", ProductCtrl.deleteProduct);
router.put("/product/:id", ProductCtrl.updateProduct);

router.get("/orders", AdminCtrl.getOrders);

module.exports = router;
