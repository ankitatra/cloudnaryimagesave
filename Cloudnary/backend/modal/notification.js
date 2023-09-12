const mongoose = require('mongoose');

// Define a notification schema
const notificationSchema = new mongoose.Schema({
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
  message: String,
  status: { type: String, enum: ['unread', 'read', 'approved', 'denied'], default: 'unread' },
  timestamp: { type: Date, default: Date.now },
});

const Notification = mongoose.model('Notification', notificationSchema);

// Update status when a notification is read
socket.on('notificationRead', (notificationId) => {
  Notification.findByIdAndUpdate(notificationId, { status: 'read' }, (err, updatedNotification) => {
    if (err) {
      console.error('Error updating notification status:', err);
    } else {
      // Notify the vendor that the notification was read (if needed)
      // ...
    }
  });
});