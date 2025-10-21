const express = require('express');
const mongoose = require('mongoose');
const urlRoutes = require('./routes/url');
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

// Use routes
app.use('/', urlRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
