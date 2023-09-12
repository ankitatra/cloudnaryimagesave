const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  message: String,
  timestamp: Date,
  status: String, // 'unread', 'read', 'approved', 'denied', etc.
  userId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Notification', notificationSchema);
