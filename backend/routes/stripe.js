const express = require("express");

const {
  handleCheckout,
  handleStripeWebhook,
} = require("../controllers/stripe");

const router = express.Router();

router.post("/create-checkout-session", handleCheckout);
router.post("/webhook", handleStripeWebhook);

module.exports = router;
