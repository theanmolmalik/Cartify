const express = require("express");
const cros = require("cors");
const connectDb = require("./connectDb");
const app = express();
const port = process.env.PORT || 4000;
const productRoute = require("./route/product");

if (process.env.NODE_ENV !== "production") require("dotenv").config();
connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/products", cros(), productRoute);
app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);
