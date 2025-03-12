import { useState, useEffect } from "react";

const Timer = () => {
  const initialTime = 3600;

  // Initialize state from localStorage, or fallback to default values.
  const [timeElapsed, setTimeElapsed] = useState<number>(() => {
    const storedTime = localStorage.getItem("timeElapsed");
    return storedTime ? Number(storedTime) : initialTime;
  });
  const [isPaused, setIsPaused] = useState<boolean>(() => {
    const storedPaused = localStorage.getItem("isPaused");
    return storedPaused ? JSON.parse(storedPaused) : true;
  });
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  // Update localStorage whenever timeElapsed changes.
  useEffect(() => {
    localStorage.setItem("timeElapsed", timeElapsed.toString());
  }, [timeElapsed]);

  // Update localStorage whenever isPaused changes.
  useEffect(() => {
    localStorage.setItem("isPaused", JSON.stringify(isPaused));
  }, [isPaused]);

  useEffect(() => {
    if (isPaused || timeElapsed <= 0) return;
    const interval = setInterval(() => {
      setTimeElapsed((prev) => prev - 1);
    }, 1020);
    return () => clearInterval(interval);
  }, [isPaused, timeElapsed]);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const resetTimer = () => {
    setTimeElapsed(initialTime);
    setIsPaused(true);
    setShowConfirm(false);
  };

  const minutes = Math.floor(timeElapsed / 60);
  const seconds = timeElapsed % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="relative flex h-[500px] w-[500px] flex-col items-center bg-white bg-opacity-50 p-2">
      <h1 className="text-9xl text-sketch-pink">TIMER</h1>
      <div
        key={formattedTime}
        className="animate-flip mt-[16px] p-8 text-9xl font-bold text-sketch-green transition-transform duration-200"
      >
        <h1>{formattedTime}</h1>
      </div>
      <div className="mt-4 flex space-x-4">
        <button
          onClick={togglePause}
          className="px-4 py-2 text-4xl text-sketch-pink transition-colors duration-200"
        >
          <h2>{isPaused ? "Resume" : "Pause"}</h2>
        </button>
        <button
          onClick={() => setShowConfirm(true)}
          className="px-4 py-2 text-4xl text-sketch-pink transition-colors duration-200"
        >
          <h2>Reset</h2>
        </button>
      </div>

      {/* Confirmation modal */}
      {showConfirm && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-2xl font-bold text-sketch-pink">
              Are you sure you want to reset the timer?
            </h3>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="rounded bg-sketch-green px-4 py-2 text-white transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={resetTimer}
                className="rounded bg-sketch-pink px-4 py-2 text-white transition-colors duration-200"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { Timer };
