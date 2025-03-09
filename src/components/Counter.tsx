import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  const updateCount = (delta: number) => {
    setCount((prev) => prev + delta);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 200);
  };

  return (
    <div className="flex h-[500px] w-[500px] flex-col items-center space-y-4 bg-white bg-opacity-50 object-contain p-2 text-center">
      <h1 className="text-9xl text-sketch-green md:text-8xl">CURRENT SKETCH</h1>
      <div
        className={`text-9xl font-bold text-sketch-pink transition-transform duration-200 md:text-8xl ${
          animate ? "scale-110" : ""
        }`}
      >
        <h1>{count}</h1>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => updateCount(-1)}
          className="rounded bg-sketch-pink px-4 py-2 text-white transition-colors duration-200 hover:bg-red-600"
        >
          -
        </button>
        <button
          onClick={() => updateCount(1)}
          className="rounded bg-sketch-green px-4 py-2 text-white transition-colors duration-200 hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
};

export { Counter };
