import * as motion from "motion/react-client";
import Marquee from "react-fast-marquee";
import frame from "../assets/paper-frame.png";
import onehundred from "../assets/100_sketches.png";
import runner from "../assets/runner.png";
import pinkRunner from "../assets/pink_runner.png";
import greenRunner from "../assets/green_runner.png";
import twinkle from "../assets/twinkle.png";

const LandingPage = () => {
  return (
    <div className="homebody">
      <div className="">
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            duration: 0.8,
            delay: 0.5,
          }}
          className="absolute w-full overflow-hidden border-b-2 border-t-2 border-sketch-green"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.5 }}
            className="border-b-4 border-t-4 border-green-600"
          >
            <a href="https://www.caveat.nyc/events/100-sketches-per-hour-3-13-2025">
              <div className="flex w-full whitespace-nowrap">
                <Marquee autoFill={true}>
                  <div className="marquee">
                    <h1 className="px-4 pt-2 text-2xl text-sketch-green md:text-6xl lg:text-8xl">
                      March 13th 7PM at Caveat NYC •
                    </h1>
                  </div>
                </Marquee>
              </div>
            </a>
          </motion.div>
        </motion.div>
        <div className="pt-8">
          <div className="flex justify-center pt-8 md:h-screen">
            <div className="md:mt-[120px]">
              <motion.img
                initial={{ opacity: 0, left: "-20vw", translateX: "0%" }}
                animate={{ opacity: 1, left: "40%", translateX: "-50%", x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  stiffness: 300,
                  damping: 10,
                }}
                className="runner"
                src={greenRunner}
                style={{ zIndex: 2 }}
                drag="x"
                dragElastic={0.7}
                dragConstraints={{ left: -100, right: 100 }}
                whileDrag={{ scale: 1.1 }}
              />
              <motion.img
                initial={{ opacity: 0, left: "-20vw", translateX: "0%" }}
                animate={{ opacity: 1, left: "50%", translateX: "-50%", x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  stiffness: 300,
                  damping: 10,
                  delay: 0.2,
                }}
                className="runner"
                src={runner}
                style={{ zIndex: 3 }}
                drag="x"
                dragElastic={0.7}
                dragConstraints={{ left: -100, right: 100 }}
                whileDrag={{ scale: 1.1 }}
              />
              <motion.img
                initial={{ opacity: 0, left: "-20vw", translateX: "0%" }}
                animate={{ opacity: 1, left: "60%", translateX: "-50%", x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  stiffness: 300,
                  damping: 10,
                  delay: 0.4,
                }}
                className="runner"
                src={pinkRunner}
                style={{ zIndex: 2 }}
                drag="x"
                dragElastic={0.7}
                dragConstraints={{ left: -100, right: 100 }}
                whileDrag={{ scale: 1.1 }}
              />
            </div>
            <div className="pointer-events-none relative flex h-auto w-[400px] flex-col items-center md:mt-[100px] md:h-[400px] md:w-[600px]">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", bounce: 0.5 },
                }}
                className="w-full"
                src={frame}
                style={{ zIndex: 1 }}
              />
              <motion.div
                initial={{
                  opacity: 0,
                  translateX: "0%",
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 1.5,
                }}
                className="absolute right-[80%] top-0 max-w-[60px]"
                style={{ zIndex: 2 }}
              >
                <motion.img
                  initial={{
                    translateX: "0%",
                  }}
                  animate={{
                    rotate: [0, 180, 0, 0, 180],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeOut",
                    times: [0, 0.8, 1.0, 1.6, 2],
                    repeat: Infinity,
                    repeatDelay: 1,
                    delay: 1.5,
                  }}
                  className="max-w-[60px]"
                  src={twinkle}
                  style={{ zIndex: 2 }}
                />
              </motion.div>
              <div className="pointer-events-none absolute top-[200px] flex w-[90%] flex-col items-center md:top-[300px]">
                <motion.img
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    scale: { type: "spring", bounce: 0.5 },
                    delay: 0.6,
                  }}
                  className="w-full"
                  src={onehundred}
                  style={{ zIndex: 3 }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    scale: { type: "spring", bounce: 0.5 },
                    delay: 1.2,
                  }}
                  className="mt-4 text-center"
                  style={{ zIndex: 3 }}
                >
                  <h1 className="text-4xl text-sketch-green md:text-6xl">
                    In one hour (or less)
                  </h1>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col justify-center gap-0">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            scale: { type: "spring", bounce: 0.5 },
            delay: 2.0,
          }}
          className="mt-4"
          style={{ zIndex: 3 }}
        >
          <h2 className="mx-4 mt-[100px] max-w-[600px] text-center text-2xl text-sketch-pink md:mx-auto md:mt-2 md:text-6xl">
            Next Show At Caveat NYC <br /> March 13th at 7:00PM.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, left: "-20vw", translateX: "-50%" }}
          animate={{ opacity: 1, left: "50%", translateX: "0%" }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          transition={{
            duration: 1,
            scale: { type: "spring", bounce: 0.5 },
            delay: 2.5,
          }}
          className="mt-4"
          style={{ zIndex: 3 }}
        >
          <a href="https://www.caveat.nyc/events/100-sketches-per-hour-3-13-2025">
            <h2 className="mx-4 max-w-[600px] text-center text-4xl font-extrabold text-sketch-pink underline md:mx-auto md:mt-2 md:text-6xl">
              CLICK HERE TO BUY TICKETS
            </h2>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            scale: { type: "spring", bounce: 0.5 },
            delay: 2.0,
          }}
          className="mt-2"
          style={{ zIndex: 3 }}
        >
          <h2 className="mx-4 max-w-[600px] text-center text-2xl text-sketch-green md:mx-auto md:mt-0 md:text-6xl">
            The only sketch comedy group in new york city doing 100 sketches in
            under an hour.
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export { LandingPage };
