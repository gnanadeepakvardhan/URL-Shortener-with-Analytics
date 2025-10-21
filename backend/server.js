const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connected");
});

const urlRoutes = require("./routes/url");
app.use("/api", urlRoutes);

// Root route for Render health check
app.get("/", (req, res) => {
  res.send("URL Shortener Backend is live!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
