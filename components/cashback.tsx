import Image from "next/image";

export const Cashback = () => {
  return (
    <div className="py-36 w-full bg-white text-[#9ea7ae] px-36 flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] md:pb-16 font-medium items-center">
      <div className="max-w-5xl mb-12">
        <span className="text-[#1a202c] ">Earn 1% assured cashback</span> on
        your spends.{" "}
        <span className="text-[#1a202c]">Get 5X more value than cashback </span>
        at the Uni Store. Enjoy round the clock{" "}
        <span className="text-[#1a202c]">Whatsapp support.</span> And it&apos;s
        <span className="text-[#1a202c]"> lifetime free</span>; no joining fee,
        no annual charges.
      </div>

      <div
        style={{
          background:
            "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)",
        }}
        className="flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] justify-center"
      >
        <Image
          alt="down_arrow"
          src="down_arrow.svg"
          //   loading="lazy"
          className="w-9 md:w-14 css-0"
          height={150}
          width={56}
        />
      </div>
    </div>
  );
};
