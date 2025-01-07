const express = require("express");
const {
  getOrdersByCustomerEmail,
  getOrderByOrderId,
} = require("../controllers/order");

const router = express.Router();

router.get("/:customerEmail", getOrdersByCustomerEmail);
router.get("/order/:orderId", getOrderByOrderId);

module.exports = router;
