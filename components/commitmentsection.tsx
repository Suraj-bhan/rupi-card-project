import Image from "next/image";

const CommitmentSection = () => {
  return (
    <div className=" bg-[#222627] py-24 w-ful px-8 md:px-36 text-white w-full flex flex-col items-center gap-8">
      <div className="text-center text-[40px] leading-[48px] font-medium">
        At Uni, we’re committed to{" "}
        <span className="uni-gradient-primary">delivering an unmatched credit experience</span> for millions of
        Indians.
      </div>
      <div className="max-w-xl text-center text-2xl text-[#bfc9cc]">
        On this mission, we’ve partnered with some of the best in the business.
      </div>
      <div className="flex justify-center mt-24">
        <Image src="/SBM.svg" alt="sbm bank logo" height={56} width={176} />
      </div>
    </div>
  );
};

export default CommitmentSection;
