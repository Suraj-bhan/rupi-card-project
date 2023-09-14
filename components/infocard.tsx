import { InfoCardProps } from "@/interfaces";
import Image from "next/image";

const InfoCard = ({ title, content, img, secondaryImg }: InfoCardProps) => {
  return (
    <div className="flex flex-col gap-8 mt-48">
      <div>
        <Image src={img} alt={title} height={112} width={112} />
      </div>
      <div className=" max-w-[360px]  gap-4 flex flex-col">
        <div className="text-2xl text-white font-medium">{title}</div>
        <div className="text-lg text-[#8e9393]">
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
