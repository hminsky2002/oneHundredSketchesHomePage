import * as motion from "motion/react-client";
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
          className="w-full border-t-2 border-b-2 border-sketch-green overflow-hidden absolute"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.5 }}
            className="border-t-4 border-b-4 border-green-600"
          >
            <div className="flex w-full whitespace-nowrap">
              <div className="marquee">
                <h1 className="text-2xl md:text-6xl lg:text-8xl text-sketch-green px-4 pt-2">
                  March 13th 7PM at Caveat NYC •
                </h1>
                <h1 className="text-2xl md:text-6xl lg:text-8xl text-sketch-green px-4 pt-2">
                  March 13th 7PM at Caveat NYC •
                </h1>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div className="pt-8">
          <div className="flex pt-8 justify-center md:h-screen ">
            <div className="md:mt-[120px]">
              <motion.img
                initial={{ opacity: 0, left: "-20vw", translateX: "0%" }}
                animate={{ opacity: 1, left: "40%", translateX: "-50%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="runner"
                src={greenRunner}
                style={{ zIndex: 2 }}
              />
              <motion.img
                initial={{ opacity: 0, left: "-20vw", translateX: "0%" }}
                animate={{ opacity: 1, left: "50%", translateX: "-50%" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="runner"
                src={runner}
                style={{ zIndex: 3 }}
              />
              <motion.img
                initial={{ opacity: 0, left: "-20vw", translateX: "0%" }}
                animate={{ opacity: 1, left: "60%", translateX: "-50%" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="runner"
                src={pinkRunner}
                style={{ zIndex: 2 }}
              />
            </div>
            <div className="relative w-[400px] h-auto flex flex-col items-center md:h-[400px] md:w-[600px] md:mt-[100px]">
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
                  delay: 1.5
                }}
                className=" absolute top-0 right-[80%] max-w-[60px]"
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
                    delay: 1.5
                  }}
                  className="max-w-[60px]"
                  src={twinkle}
                  style={{ zIndex: 2 }}
                />
              </motion.div>
              <div className="absolute top-[200px] w-[90%] flex flex-col items-center md:top-[300px]">
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
                  className="text-center mt-4"
                  style={{ zIndex: 3 }}
                >
                  <h1 className="text-4xl md:text-6xl  text-sketch-green">
                    In one hour (or less)
                  </h1>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto justify-center flex flex-col ">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            scale: { type: "spring", bounce: 0.5 },
            delay: 2,
          }}
          className=""
          style={{ zIndex: 3 }}
        >
          <h2 className="mt-[150px] mx-4 md:mt-0 md:mx-auto text-2xl md:text-6xl max-w-[600px] text-center  text-black ">
            The only sketch comedy group in new york city doing 100 sketches in
            under an hour.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            scale: { type: "spring", bounce: 0.5 },
            delay: 2.5,
          }}
          className="mt-4"
          style={{ zIndex: 3 }}
        >
          <h2 className=" md:mt-2 mx-4 md:mx-auto text-2xl md:text-6xl max-w-[600px] text-center  text-sketch-pink ">
            Next Show At Caveat NYC March 13th at 7:00PM. Ticket Link coming
            soon
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export { LandingPage };
