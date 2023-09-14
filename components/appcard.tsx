import { AppCardProps } from "@/interfaces";
import Image from "next/image";
import React from "react";

const AppCard = ({ title, content, img }: AppCardProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col flex-[50%] gap-4">
        <div className="text-[40px] font-medium leading-[48px]">
          {title.primary}
        </div>
        <div className="text-[40px] font-medium leading-[48px] uni-gradient-primary">
          {title.secondary}
        </div>
        <div className="text-[#BFC9CC] text-[14px] md:text-2xl">{content}</div>
      </div>
      <div className="flex-[50%]  flex justify-between">
        <Image src={img} alt={title.primary} height={500} width={500} className="mx-auto"/>
      </div>
    </div>
  );
};

export default AppCard;
