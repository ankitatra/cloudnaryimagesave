const express = require('express');
const router = express.Router();
const Notification = require('../modal/notificationuser');

// Create a new notification
router.post('/', async (req, res) => {
  try {
    const { message, userId } = req.body;
    const notification = new Notification({ message, userId, timestamp: new Date(), status: 'unread' });
    await notification.save();
    res.json({ message: 'Notification created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all notifications for a user
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const notifications = await Notification.find({ userId });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
