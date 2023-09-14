import { InfoCardProps } from "@/interfaces";
import Image from "next/image";

const InfoCard = ({
  title,
  content,
  img,
  secondaryImg,
  direction,
}: InfoCardProps) => {
  return (
    <div
      className={`${
        direction === "right" ? "flex-row-reverse" : "flex-row"
      } items-center md:items-start justify-between md:justify-normal flex md:flex-col gap-8 mt-16 md:mt-48`}
    >
      <div className="">
        <Image
          src={img}
          alt={title}
          height={112}
          width={112}
          className="max-w-[80px]"
        />
      </div>
      <div className="w-1/2 md:w-auto md:max-w-[360px] gap-4 flex flex-col">
        <div className="text-base md:text-2xl text-white font-medium">
          {title}
        </div>
        <div className="text-sm md:text-lg text-[#8e9393]">
          {content}
          {secondaryImg ? (
            <Image src={secondaryImg} alt={title} height={33} width={84} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
