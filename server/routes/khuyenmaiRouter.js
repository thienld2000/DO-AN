// routes/khuyenmai.js
const express = require('express');
const router = express.Router();
const KhuyenMai = require('../models/khuyenmaiModel');

// Định nghĩa các route
router.get('/khuyen_mais', async (req, res) => {
  try {
    const danhSachKhuyenMai = await KhuyenMai.find();
    res.json(danhSachKhuyenMai);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/create_khuyen_mai', async (req, res) => {
  const khuyenMai = new KhuyenMai({
    name: req.body.name,
    description: req.body.description,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    discount: req.body.discount,
    imageUrl: req.body.imageUrl
  });

  try {
    const newKhuyenMai = await khuyenMai.save();
    res.status(201).json(newKhuyenMai);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const khuyenMai = await KhuyenMai.findById(req.params.id);

    if (!khuyenMai) {
      return res.status(404).json({ message: 'Khuyến mãi không tồn tại' });
    }

    khuyenMai.name = req.body.name;
    khuyenMai.description = req.body.description;
    khuyenMai.startDate = req.body.startDate;
    khuyenMai.endDate = req.body.endDate;
    khuyenMai.discount = req.body.discount;
    khuyenMai.imageUrl = req.body.imageUrl;

    const updatedKhuyenMai = await khuyenMai.save();
    res.json(updatedKhuyenMai);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const khuyenMai = await KhuyenMai.findByIdAndDelete(req.params.id);
    if (!khuyenMai) {
      return res.status(404).send('KhuyenMai not found');
    }
    res.send(khuyenMai);
  }
  catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
