"use client"
import Image from "next/image";

const Header = () => {
  return (
    <div className="z-10 w-full flex justify-between items-center">
      <a href="/">
        <Image src="uni_logo.svg" alt="logo" width={120} height={90} />
      </a>
      <button className="h-12 no-underline visited:text-white text-white font-medium hover:text-[#7DEDDD] bg-black bg-opacity-60 hover:bg-black rounded-xl py-2 px-[30px] ">Uni Paychek</button>
    </div>
  );
};

export default Header;
