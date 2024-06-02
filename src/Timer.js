import React, { useState, useEffect } from "react";

export default function Timer({ setIsFinished }) {
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(
    function timerCountDown() {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsFinished(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    },
    [setIsFinished]
  );

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <p>{formatTime(timeLeft)}</p>
    </div>
  );
}
