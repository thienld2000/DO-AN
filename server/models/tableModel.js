const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  name: { type: String, required: true },
  floor: { type: Number, required: true },
  capacity: { type: Number, required: true },
  status: {
    lunch: {
      type: String,
      enum: ['available', 'booked'],
      default: 'available'
    },
    dinner: {
      type: String,
      enum: ['available', 'booked'],
      default: 'available'
    }
  }
});

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;
