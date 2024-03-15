const mongoose = require('mongoose')
// const dotenv = require('dotenv');

// dotenv.config();


mongoose.connect(("mongodb://127.0.0.1:27017/Yakimono-orders")
)
  .catch((err) => console.error(err.message));
  
const db = mongoose.connection

module.exports = db