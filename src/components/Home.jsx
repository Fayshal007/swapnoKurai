import Banner from "./Banner";
import MissionAndVision from "./pages/MissionAndVision";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <>
      <Marquee className="mt-2.5 mb-2.5">
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
      <div className="text-center mdspace-y-7">
        <h1 className="font-bold text-3xl md:text-6xl">
          Welcome <br /> <small>to</small> <br /> Swapno Kurai
        </h1>
        <p className="md:text-3xl">A Social Development Organization</p>
      </div>
      <Banner />
      <MissionAndVision />
    </>
  );
};

export default Home;
