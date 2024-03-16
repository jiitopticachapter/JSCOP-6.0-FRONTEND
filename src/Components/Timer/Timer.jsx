import React, { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeRemaining = getTimeRemaining();
      setTimeRemaining(newTimeRemaining);

      if (newTimeRemaining.total <= 0) {
        clearInterval(interval);
        console.log("Timer has ended!");
      }
    }, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  function getTimeRemaining() {
    const currentDate = new Date();
    const targetDate = new Date("2024-03-17T03:44:00"); // Set your target date and time

    const total = targetDate - currentDate;
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="timer">
      <section className="time-container">
        <div className="time-header">Time To Go !!</div>
        <br />
        <div className="time-content">
          <div className="time days">
            <span className="time-number">
              {timeRemaining.days > 0 ? timeRemaining.days : "00"}
            </span>
            <span className="time-text">days</span>
          </div>
          <div className="time hours">
            <span className="time-number">
              {timeRemaining.hours > 0 ? timeRemaining.hours : "00"}
            </span>
            <span className="time-text">hours</span>
          </div>
          <div className="time minutes">
            <span className="time-number">
              {timeRemaining.minutes > 0 ? timeRemaining.minutes : "00"}
            </span>
            <span className="time-text">minutes</span>
          </div>
          <div className="time seconds">
            <span className="time-number">
              {timeRemaining.seconds > 0 ? timeRemaining.seconds : "00"}
            </span>
            <span className="time-text">seconds</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timer;
