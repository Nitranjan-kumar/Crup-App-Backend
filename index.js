const express = require("express");
const mongoose = require("mongoose");
const productroute = require("./routes/product.route.js"); // Import the product route

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the product route
app.use("/api/product", productroute);

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to my application node app");
});

// Start the server
app.listen(3000, () => {
  console.log("listening on port 3000");
});

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://nitranjan7488:8dFnjbtDlW7LsasV@crudbackend.r6az3.mongodb.net/Crud_Api?retryWrites=true&w=majority&appName=CrudBackend"
  )
  .then(() => console.log("mongodb_Connected Successfully"))
  .catch((error) => console.log("connection error", error));
