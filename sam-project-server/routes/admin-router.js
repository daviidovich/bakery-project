const express = require("express");
const router = express.Router();

const AdminCtrl = require("../controllers/admin-ctrl");
const ProductCtrl = require("../controllers/product-ctrl");

//router.get("/", AdminCtrl.getPageAutho);
router.post("/", AdminCtrl.makeAuthorization);
router.get("/admhome", AdminCtrl.getHomePage);

router.get("/admhome/products", ProductCtrl.getProducts);
router.post("/admhome/product", ProductCtrl.createProduct);
router.get("/admhome/product/:id", ProductCtrl.getProductById);
router.delete("/admhome/product/:id", ProductCtrl.deleteProduct);
router.put("/admhome/product/:id", ProductCtrl.updateProduct);

module.exports = router;
