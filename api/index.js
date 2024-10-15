//express to create our REST API SERVER
const express = require("express");
//mongoose to connect to data base mongo db
const mongoose = require("mongoose");
//dotenv to hide our secret keys
const dotenv = require("dotenv");
//routes
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

const cors = require("cors");
//
const app = express();
//
dotenv.config();
//
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
//
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

//
app.listen(process.env.port || 5050, () => {
  console.log("hello from backend server");
});
