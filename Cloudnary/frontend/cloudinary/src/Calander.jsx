import React, { useState } from 'react';
import './Calendar.css';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(currentDate);

  const renderCalendar = () => {
    const calendar = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
      calendar.push(
        <div key={day} className="calendar-day">
          <div className="day-of-week">{dayOfWeek}</div>
          <div className="day-number">{day}</div>
        </div>
      );
    }
    return calendar;
  };

  const handlePrevClick = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextClick = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="calendar">
      <button className="prev-button" onClick={handlePrevClick}>&lt;</button>
      <div className="calendar-dates">{renderCalendar()}</div>
      <button className="next-button" onClick={handleNextClick}>&gt;</button>
    </div>
  );
}

export default Calendar;
