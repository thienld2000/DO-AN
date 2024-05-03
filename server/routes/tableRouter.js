  const express = require('express');
  const router = express.Router();
  const Table = require('../models/tableModel');
  const Order = require('../models/orderModel');

  router.get('/available', async (req, res) => {
    try {
      const availableTables = await Table.find();
      // const availableTables = await Table.find({ status: 'available' });
      res.json(availableTables);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // GET: Lấy trạng thái của bàn theo ngày
  router.get('/status', async (req, res) => {
    try {
      const { date, timeOfDay } = req.query;
      const bookingsOnDate = await Order.find({
        visitDate: new Date(date),
        timeOfDay: timeOfDay
      });
  
      const tableStatus = {};
      const tables = await Table.find();
      tables.forEach((table) => {
        tableStatus[table._id] = 'available';
      });
  
      bookingsOnDate.forEach((booking) => {
        tableStatus[booking.table] = 'booked';
      });
  
      res.json(tableStatus);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.get('/get-table-status-by-date', async (req, res) => {
    try {
      const date = new Date(req.query.date);
      const tables = await Table.find({ updatedAt: { $gte: date, $lt: new Date(date.getTime() + 86400000) } }); // Lấy các bàn đã được cập nhật trong ngày

      res.status(200).json({ tables });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  module.exports = router;