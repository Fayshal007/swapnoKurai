import Banner from "./Banner";
import MissionAndVision from "./pages/MissionAndVision";

const Home = () => {
  return (
    <>
      <div className="text-center mdspace-y-7">
        <h1 className="font-bold text-3xl md:text-6xl">
          Welcome <br /> <small>to</small> <br /> Swapno Kurai
        </h1>
        <p className="md:text-3xl">A Social Development Organization</p>
      </div>
      <Banner />
      <MissionAndVision/>
    </>
  );
};

export default Home;
