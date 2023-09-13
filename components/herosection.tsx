import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="z-10 flex justify-between mt-12">
      <div className="text-black">
        <div className="text-[54px] leading-[54px]  ax-w-[700px] mb-4">
          <strong>NX Wave.</strong> The next-gen credit card for those who love
          rewards.
        </div>
        <div className="font-medium text-sm md:text-base md:mb-9 flex gap-4">
          <span> 1% Cashback</span>{" "}
          <Image src="star_icon.svg" alt="start-icon" width={12} height={6} />{" "}
          <span>5x Rewards</span>{" "}
          <Image src="star_icon.svg" alt="start-icon" width={12} height={6} />
          <span>Zero Forex Markup</span>{" "}
        </div>

        <div>
          <form>
            <div className="flex bg-black p-1 pl-2 rounded-xl justify-between max-w-[360px]">
              <div className="flex items-center">
                <input
                  className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
                  placeholder="Enter Phone Number"
                />
                <span className="w-6 flex items-center justify-end h-full"></span>
              </div>
              <button
                type="submit"
                className="text-center text-sm leading-7 justify-between pt-2 ml-2 bg-yellow-300 rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed"
              >
                <span>Apply Now</span>
              </button>
            </div>
          </form>

          <div className="consent flex items-center py-4 px-2 max-w-xs">
            <input type="checkbox" id="consent-msg" />
            <label
              htmlFor="consent-msg"
              className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer"
            >
              You agree to be contacted by Uni Cards over Call, SMS, Email or
              WhatsApp to guide you through your application.
            </label>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/nx_wave_hero.png"
          className="h-auto w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1] mx-6"
          width={420}
          height={420}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default HeroSection;
