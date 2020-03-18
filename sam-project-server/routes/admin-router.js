const express = require("express");
const router = express.Router();

const AdminCtrl = require("../controllers/admin-ctrl");

//router.get("/", AdminCtrl.getPageAutho);
router.post("/", AdminCtrl.makeAuthorization);
router.get("/", AdminCtrl.getHomePage);

module.exports = router;
