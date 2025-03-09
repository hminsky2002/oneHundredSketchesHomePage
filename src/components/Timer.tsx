import { useState, useEffect } from "react";

const Timer = () => {
  // Timer counts from 0 seconds up to 3700 seconds
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    if (isPaused || timeElapsed >= 3700) return;
    const interval = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPaused, timeElapsed]);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const minutes = Math.floor(timeElapsed / 60);
  const seconds = timeElapsed % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="flex h-[500px] w-[500px] flex-col items-center bg-white bg-opacity-50 p-2">
      <h1 className="text-9xl text-sketch-pink">TIMER </h1>
      <div
        key={formattedTime}
        className="animate-flip mt-[16px] p-8 text-9xl font-bold text-sketch-green transition-transform duration-200"
      >
        <h1>{formattedTime}</h1>
      </div>
      <button
        onClick={togglePause}
        className="mt-4 px-4 py-2 text-4xl text-sketch-pink transition-colors duration-200"
      >
        <h2>{isPaused ? "Resume" : "Pause"}</h2>
      </button>
    </div>
  );
};

export { Timer };
