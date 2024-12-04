const express = require("express");
const cors = require("cors");
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

const YOUR_DOMAIN = "http://localhost:5173";

//checkout api

app.post("/api/create-checkout-session", async (req, res) => {
  const { products } = req.body;
  const lineItems = products.map(product => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.title,
        images: [product.thumbnail],
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: lineItems,
    success_url: `${YOUR_DOMAIN}/checkout-success`,
    cancel_url: `${YOUR_DOMAIN}/viewcart`,
  });
  res.json({ id: session.id });
});

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
