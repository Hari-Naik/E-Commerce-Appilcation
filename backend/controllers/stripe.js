const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Order = require("../models/Order");

const YOUR_DOMAIN = "https://hari-ecommerce-application.vercel.app";
const endpointSecret = "whsec_zLU3wOlqpxwypNi35YR03QK63TvLjTgJ";

const handleCheckout = async (req, res) => {
  try {
    const { items, email } = req.body;

    const itemsWithReqInfo = items.map(item => {
      return {
        productId: item.id,
        title: item.title,
        price: item.price,
        discountPercentage: item.discountPercentage,
        thumbnail: item.thumbnail,
        quantity: item.quantity,
      };
    });

    const lineItems = items.map(product => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.title,
          images: [product.thumbnail],
        },
        unit_amount: Math.round(product.price * 100),
      },
      quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      phone_number_collection: {
        enabled: true,
      },
      success_url: `${YOUR_DOMAIN}/checkout-success`,
      cancel_url: `${YOUR_DOMAIN}/viewcart`,
      metadata: {
        customerEmail: email,
        items: JSON.stringify(itemsWithReqInfo),
      },
    });

    res.json({ id: session.id, data: items });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

const handleStripeWebhook = async (request, response) => {
  console.log("webhook triggered");
  const sig = request.headers["stripe-signature"];
  //   let data;
  let eventType;

  let event;
  if (endpointSecret) {
    try {
      event = stripe.webhooks.constructEvent(
        request.rawBody,
        sig,
        endpointSecret
      );
    } catch (err) {
      console.log(`Webhook Error: ${err.message}`);
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // data = event.data.object;
    eventType = event.type;
  } else {
    // data = req.body.data.object;
    eventType = request.body.type;
  }

  // Handle the event
  if (eventType === "checkout.session.completed") {
    // console.log("Checkout Session Completed");
    const session = event.data.object;
    console.log("session", session);
    // console.log("metadata", session.metadata);

    try {
      const orderItems = JSON.parse(session.metadata.items);
      const newOrder = new Order({
        stripeSessionId: session.id,
        items: orderItems,
        totalAmount: session.amount_total,
        status: "completed",
        customerDetails: {
          email: session.customer_details?.email,
          name: session.customer_details?.name,
          phone: session.customer_details?.phone,
        },
        shippingAddress: {
          street: session.customer_details?.address?.line1,
          city: session.customer_details?.address?.city,
          state: session.customer_details?.address?.state,
          zipCode: session.customer_details?.address?.postal_code,
          country: session.customer_details?.address?.country,
        },
      });

      const savedOrder = await newOrder.save();
      console.log("processed order: ", savedOrder);
    } catch (error) {
      console.log("order save error:", error);
    }
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send().end();
};

module.exports = {
  handleCheckout,
  handleStripeWebhook,
};
