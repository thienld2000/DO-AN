// khuyenmai.js
const mongoose = require('mongoose');

const khuyenMaiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  discount: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

const KhuyenMai = mongoose.model('KhuyenMai', khuyenMaiSchema);

module.exports = KhuyenMai;
