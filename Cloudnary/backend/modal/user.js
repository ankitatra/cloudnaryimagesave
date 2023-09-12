const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String, // 'user', 'vendor', 'superadmin', etc.
});

module.exports = mongoose.model('User', userSchema);
