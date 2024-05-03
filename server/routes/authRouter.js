const expres = require('express')
const router  = expres.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/userModel')
const authenticateJWT = require('../middleware');

router.get('/protected-route', authenticateJWT, (req, res) => {
    res.send('You have accessed a protected route!');
  });
// Đăng nhập và phát sinh JWT
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (!await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ message: 'Incorrect password' });
    }
    const payload = {
      userId: user._id,
      isAdmin: user.isAdmin
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
    res.status(200).json({ token, isAdmin: user.isAdmin });
  } catch (error) {
    res.status(500).send('An error occurred on the server.');
  }
});
module.exports = router;