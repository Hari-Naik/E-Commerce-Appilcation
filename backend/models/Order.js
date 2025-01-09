const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  productId: Number,
  title: String,
  price: Number,
  discountPercentage: Number,
  thumbnail: String,
  quantity: Number,
});

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
      default: () => "OD" + Date.now() + Math.floor(Math.random() * 1000),
    },
    stripeSessionId: {
      type: String,
      required: true,
      unique: true,
    },
    items: [orderItemSchema],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "completed",
    },

    customerDetails: {
      email: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    shippingAddress: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
  },
  { timestamps: true }
);

// Hooks
orderSchema.pre("save", function (next) {
  if (this.isNew && !this.orderId) {
    // Generate unique order number logic here
    this.orderId = "OD" + Date.now() + Math.floor(Math.random() * 1000);
  }
  next();
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
