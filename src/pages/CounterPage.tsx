import { Counter } from "../components/Counter";
import { Timer } from "../components/Timer";
import sketchesLogo from "../assets/100SketchesLogo.png";

const CounterPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <img
        src={sketchesLogo}
        alt="sketches"
        className="absolute top-0 mb-8 h-auto w-full max-w-[20%]"
      />
      <div className="flex flex-col items-start justify-center space-x-[200px] pt-[200px] md:flex-row">
        <Timer />
        <Counter />
      </div>
    </div>
  );
};

export { CounterPage };
