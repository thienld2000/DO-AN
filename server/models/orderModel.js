const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true, },
  setMenu: { type: String, required: true },
  datetime: { type: Date, required: true },
  guests: { type: Number, required: true },
  note: { type: String,required: false },
  table: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Table',
    required: true
  },
  visitDate: { type: Date, required: true }, 
  bookingDate: { type: Date, default: Date.now },
  timeOfDay: { type: String, enum: ['lunch', 'dinner'], required: true },
  confirmationCode: { type: Number, required: true },
  isConfirmed: { type: Boolean, default: false }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
