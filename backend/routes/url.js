const express = require('express');
const router = express.Router();
const Url = require('../models/Url');
const shortid = require('shortid');

// Shorten a URL
router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const shortUrl = shortid.generate();
  const url = new Url({ longUrl, shortUrl });
  await url.save();
  res.json({ shortUrl: `${req.headers.host}/${shortUrl}` });
});

// Redirect from short URL to long URL
router.get('/:shortUrl', async (req, res) => {
  const url = await Url.findOne({ shortUrl: req.params.shortUrl });
  if (url) {
    url.clicks++;
    await url.save();
    return res.redirect(url.longUrl);
  }
  res.status(404).json('URL not found');
});

module.exports = router;

