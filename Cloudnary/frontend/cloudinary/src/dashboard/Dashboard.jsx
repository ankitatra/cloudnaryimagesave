import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from the server and update the state
    // Implement notification fetching logic here

    // Dummy data for testing
    const dummyNotifications = [
      { id: 1, message: 'Notification 1' },
      { id: 2, message: 'Notification 2' },
      { id: 3, message: 'Notification 3' },
    ];

    setNotifications(dummyNotifications);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
