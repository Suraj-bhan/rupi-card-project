import Header from "./header";
import HeroSection from "./herosection";

const Banner = () => {
  return (
    <div className="h-full md:h-screen w-full px-8 md:px-36 py-4">
      <div className="z-10 flex flex-col w-full">
        <Header />
        <HeroSection />
      </div>
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 right-0 left-0 w-screen h-full md:h-screen object-cover z-0"
      >
        <source src="nxt_wave_bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Banner;
