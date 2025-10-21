const express = require('express');
const mongoose = require('mongoose');
const Url = require('./models/Url');
const shortid = require('shortid');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const shortUrl = shortid.generate();
  const url = new Url({ longUrl, shortUrl });
  await url.save();
  res.json({ shortUrl: `${req.headers.host}/${shortUrl}` });
});

app.get('/:shortUrl', async (req, res) => {
  const url = await Url.findOne({ shortUrl: req.params.shortUrl });
  if (url) {
    url.clicks++;
    await url.save();
    return res.redirect(url.longUrl);
  }
  res.status(404).json('URL not found');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

