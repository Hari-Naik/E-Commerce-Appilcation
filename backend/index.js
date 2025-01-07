const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./connectDB/connectDB");
const paymentRoutes = require("./routes/stripe");
const orderRoutes = require("./routes/order");

const app = express();
app.use(
  express.json({
    verify(req, res, buf, encoding) {
      if (req.path.includes("webhook")) {
        req.rawBody = buf.toString(); // sets raw string in req.rawBody variable
      }
    },
  })
);

app.use(cors());

//connectDB
connectDB();

//routes
app.use("/api", paymentRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
