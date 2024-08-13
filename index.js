const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// MIDDLEWARE
app.use(express.json());

// routes
app.use("/api/products", productRoute);

// Do you hear me?????
app.get("/", (req, res) => {
  res.send("Test 1.2.3., is this thing on?");
});

mongoose
  .connect(
    "mongodb+srv://keremeren:0BvubtFv6IpBmhHZ@backenddb.jz8jq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch((err) => console.log(err));
