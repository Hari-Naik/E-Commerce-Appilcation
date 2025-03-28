const Order = require("../models/Order");

const getOrdersByCustomerEmail = async (req, res) => {
  try {
    const { customerEmail } = req.params;
    console.log(customerEmail);

    const orders = await Order.find({ "customerDetails.email": customerEmail });

    if (orders.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No orders found for this customer",
      });
    }

    res.status(200).json({
      orders,
    });
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

const getOrderByOrderId = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findOne({ orderId });
    if (order.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }
    return res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching order",
      error: error.message,
    });
  }
};

module.exports = { getOrdersByCustomerEmail, getOrderByOrderId };
