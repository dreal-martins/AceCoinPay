import React, { useState, useEffect } from "react";
import "./style.css";

function TimeComponent() {
  const [hourDigits, setHourDigits] = useState([]);
  const [minuteDigits, setMinuteDigits] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      let hour = currentDate.getHours();
      let minute = currentDate.getMinutes();
      hour = hour < 10 ? "0" + hour : hour;
      minute = minute < 10 ? "0" + minute : minute;
      const hourArray = hour.toString().split("").map(Number);
      const minuteArray = minute.toString().split("").map(Number);
      setHourDigits(hourArray);
      setMinuteDigits(minuteArray);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <span className="time_digit">{hourDigits[0]}</span>
      <span className="time_digit">{hourDigits[1]}</span>
      <span>
        <strong>:</strong>
      </span>
      <span className="time_digit">{minuteDigits[0]}</span>
      <span className="time_digit">{minuteDigits[1]}</span>
    </div>
  );
}

export default TimeComponent;
