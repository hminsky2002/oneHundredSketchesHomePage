import * as motion from "motion/react-client";
import frame from "../assets/paper-frame.png";
import onehundred from "../assets/100_sketches.png";
import runner from "../assets/runner.png";
import pinkRunner from "../assets/pink_runner.png";
import greenRunner from "../assets/green_runner.png";

const LandingPage = () => {
  return (
    <div className="homebody flex items-center justify-center h-screen">
      <motion.img
        initial={{ opacity: 0, left: "-20vw", translateX: "0%" }}
        animate={{ opacity: 1, left: "45%", translateX: "-50%" }}
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
          delay: 0.2
        }}
        className="absolute w-[40vw] max-w-[600px] h-auto"
        src={runner}
        style={{ zIndex: 3 }}
      />
      <motion.img
        initial={{ opacity: 0, left: "-20vw", translateX: "0%" }}
        animate={{ opacity: 1, left: "55%", translateX: "-50%" }}
        transition={{
          duration: 1.0,
          ease: "easeOut",
          delay: 0.4
        }}
        className="absolute w-[40vw] max-w-[600px] h-auto"
        src={pinkRunner}
        style={{ zIndex: 2 }}
      />

      <div className="relative w-[300px] h-[250px] md:h-[600px] md:w-[900px]">
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
  );
};

export { LandingPage };
