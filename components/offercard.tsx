import { OfferCardProps } from "@/interfaces";
import Image from "next/image";

const OfferCard = ({ title, content, img, direction }: OfferCardProps) => {
  return (
    <div
      className={`flex px-36 gap-24 items-center ${
        direction === "right" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className={`flex flex-col gap-12 max-w-[600px] py-12`}>
        <div className="text-[40px] leading-[48px] ">
          <span className="font-bold text-[#1c2132]">{title.primary}</span>
          <span className="font-normal text-[#9ea7ae]">{title.secondary}</span>
        </div>
        <div className="text-lg text-[#9ea7ae]">{content}</div>
      </div>
      <div className="flex"> 
        <Image src={img} alt={title.primary} height={400} width={400} />
      </div>
    </div>
  );
};

export default OfferCard;
