const express = require("express");
const router = express.Router();
const Url = require("../models/Url");
const { nanoid } = require("nanoid");

router.post("/shorten", async (req, res) => {
  const { url } = req.body;
  const shortUrl = nanoid(7);

  try {
    const newUrl = new Url({ url, shortUrl });
    await newUrl.save();
    res.json({ shortenedUrl: `${process.env.BASE_URL}/${shortUrl}` });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/:shortUrl", async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const urlDoc = await Url.findOne({ shortUrl });
    if (urlDoc) {
      urlDoc.clicks += 1;
      await urlDoc.save();
      res.redirect(urlDoc.url);
    } else {
      res.status(404).send("URL not found");
    }
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
