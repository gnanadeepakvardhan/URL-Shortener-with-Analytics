const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connected");
});

// Routes
const urlRoutes = require("./routes/url");
app.use("/api", urlRoutes);

// Health check route for Render
app.get("/", (req, res) => {
  res.send("URL Shortener Backend is live!");
});

// Redirect route for shortened URLs
const Url = require("./models/Url");

app.get("/:shortUrl", async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const urlDoc = await Url.findOne({ shortUrl });
    if (urlDoc) {
      urlDoc.clicks += 1;
      await urlDoc.save();
      return res.redirect(urlDoc.url);
    } else {
      return res.status(404).send("Short URL not found");
    }
  } catch (err) {
    return res.status(500).send("Server error");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
