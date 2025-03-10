import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const updateCount = (delta: number) => {
    setCount((prev) => prev + delta);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 200);
    if(count !== 50){
      setHasClicked(false)
    }
  };

  return (
    <div className="relative flex h-[500px] w-[500px] flex-col items-center space-y-4 bg-white bg-opacity-50 p-2 text-center">
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
      {count === 50 && !hasClicked && (
        <AnimatePresence>
          <motion.div
            className="absolute cursor-pointer"
            onClick={() => setHasClicked(true)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="pointer-events-none"
              animate={{
                x: [0, 200, -400, 0, -600, 200, 0, -300, -800, 300, -1000, 0],
                y: [0, 100, -100, 0, -50, 100, 20, -10, 100, 50, -10, 10],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <motion.h1 className="bg-sketch-green p-4 text-9xl text-sketch-pink">
                HALFTIME SHOW
              </motion.h1>
            </motion.div>
            <motion.div
              className="pointer-events-none"
              animate={{
                x: [
                  0, 200, -400, 0, -600, 200, 0, -300, -800, 300, -1000, 0,
                ].reverse(),
                y: [
                  0, 100, -100, 0, -50, 100, 20, -10, 100, 50, -10, 10,
                ].reverse(),
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <motion.h1 className="bg-sketch-green p-4 text-9xl text-sketch-pink">
                HALFTIME SHOW
              </motion.h1>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export { Counter };
