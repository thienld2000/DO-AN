const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');
const Table = require('../models/tableModel'); 
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.Email_Username, 
    pass: process.env.Email_Password 
  }
});

const sendConfirmationCodeEmail = async (email, confirmationCode) => {
  try {
    const mailOptions = {
      from: process.env.Email_Username,
      to: email,
      subject: 'Mã xác nhận đặt bàn',
      text: `Mã xác nhận của bạn là: ${confirmationCode}`
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
// Route để lấy tất cả các đơn hàng 
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find().populate('table');;
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post('/create-orders', async (req, res) => {
  try {
    const { name, email, phone, setMenu, datetime, guests, note, table, visitDate, timeOfDay, isConfirmed, confirmationCode } = req.body;
    await sendConfirmationCodeEmail(email, confirmationCode);
    const order = new Order({ 
      name, 
      email, 
      phone, 
      setMenu, 
      datetime, 
      guests, 
      note, 
      table, 
      visitDate, 
      timeOfDay, 
      confirmationCode,
      isConfirmed
    });
    const savedOrder = await order.save();
    await Table.findByIdAndUpdate(table, { [`status.${timeOfDay}`]: 'booked' });

   
    
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.post('/confirm-booking', async (req, res) => {
  try {
    const { email, confirmationCode } = req.body;
    const booking = await Order.findOne({ email, confirmationCode });

    if (booking && !booking.isConfirmed) {
      booking.isConfirmed = true;
      await booking.save();
      res.status(200).json({ message: 'Booking confirmation code sent.' });
    } else if (booking && booking.isConfirmed) {
      res.status(400).json({ message: 'Booking already confirmed.' });
    } else {
      res.status(400).json({ message: 'Invalid confirmation code or booking not found.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:orderId', async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:orderId', async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.orderId, req.body, { new: true });
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.delete('/:orderId', async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.orderId);
    res.json(deletedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
