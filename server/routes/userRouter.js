const expres = require('express')
const router  = expres.Router()
const User = require('../models/userModel')
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
          ...req.body,
          password: hashedPassword, // Sử dụng mật khẩu đã mã hóa
        });
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
})
// Định nghĩa route để lấy thông tin tất cả người dùng
router.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Định nghĩa route để lấy thông tin của một người dùng dựa trên id
  router.get('/users/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Định nghĩa route để cập nhật thông tin của một người dùng dựa trên id
  router.put('/users/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Định nghĩa route để xóa một người dùng dựa trên id
  router.delete('/users/:id', async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(deletedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
module.exports = router