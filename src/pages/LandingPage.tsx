import * as motion from "motion/react-client";
import frame from "../assets/paper-frame.png";
import onehundred from "../assets/100_sketches.png";
import runner from "../assets/runner.png";
import pinkRunner from "../assets/pink_runner.png";
import greenRunner from "../assets/green_runner.png";

const LandingPage = () => {
  return (
    <div className="homebody">
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 10, duration: 1 }}
        className="w-full border-t-2 border-b-2 border-green-600 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="border-t-4 border-b-4 border-green-600"
        >
          <div className="flex w-full whitespace-nowrap">
            <div className="marquee">
              <h1 className="text-2xl md:text-6xl lg:text-8xl text-green-600 px-2">
                March 13th 7PM at Caveat NYC •
              </h1>
              <h1 className="text-2xl md:text-6xl lg:text-8xl text-green-600 px-2">March 13th 7PM at Caveat NYC •</h1>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div>
        <div className="flex pt-8 justify-center h-screen md:hidden">
          <motion.img
            initial={{ opacity: 0, left: "-20vw", translateX: "0%" }}
            animate={{ opacity: 1, left: "40%", translateX: "-50%" }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="runner"
            src={greenRunner}
            style={{ zIndex: 2 }}
          />
          <motion.img
            initial={{ opacity: 0, left: "-20vw", translateX: "0%" }}
            animate={{ opacity: 1, left: "50%", translateX: "-50%" }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="runner"
            src={runner}
            style={{ zIndex: 3 }}
          />
          <motion.img
            initial={{ opacity: 0, left: "-20vw", translateX: "0%" }}
            animate={{ opacity: 1, left: "60%", translateX: "-50%" }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="runner"
            src={pinkRunner}
            style={{ zIndex: 2 }}
          />

          <div className="relative w-[400px] h-[300px] ">
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", bounce: 0.5 },
              }}
              className="absolute top-0 left-0 w-full h-full"
              src={frame}
              style={{ zIndex: 1 }}
            />

            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                scale: { type: "spring", bounce: 0.5 },
                delay: 0.6,
              }}
              className="absolute bottom-0 left-5 w-[90%] h-auto"
              src={onehundred}
              style={{ zIndex: 3 }}
            />
          </div>
        </div>
        <div className="homebody hidden items-center justify-center h-screen md:flex">
          <motion.img
            initial={{ opacity: 0, left: "-20vw", translateX: "0%" }}
            animate={{ opacity: 1, left: "40%", translateX: "-50%" }}
            transition={{
              duration: 1.0,
              ease: "easeOut",
            }}
            className="absolute w-[40vw] max-w-[600px] h-auto"
            src={greenRunner}
            style={{ zIndex: 2 }}
          />
          <motion.img
            initial={{ opacity: 0, left: "-20vw", translateX: "0%" }}
            animate={{ opacity: 1, left: "50%", translateX: "-50%" }}
            transition={{
              duration: 1.0,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="absolute w-[40vw] max-w-[600px] h-auto"
            src={runner}
            style={{ zIndex: 3 }}
          />
          <motion.img
            initial={{ opacity: 0, left: "-20vw", translateX: "0%" }}
            animate={{ opacity: 1, left: "60%", translateX: "-50%" }}
            transition={{
              duration: 1.0,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="absolute w-[40vw] max-w-[600px] h-auto"
            src={pinkRunner}
            style={{ zIndex: 2 }}
          />

          <div className="relative h-[600px] w-[900px]">
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", bounce: 0.5 },
              }}
              className="absolute top-0 left-0 w-full h-full"
              src={frame}
              style={{ zIndex: 1 }}
            />

            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                scale: { type: "spring", bounce: 0.5 },
                delay: 0.6,
              }}
              className="absolute bottom-0 left-5 w-[90%] h-auto"
              src={onehundred}
              style={{ zIndex: 3 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { LandingPage };
