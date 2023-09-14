const DownloadSection = () => {
  return (
    <div className="download-bg w-full px-8 md:px-36 py-24 flex text-[#1a202c] md:flex-row flex-col gap-4">
      <div className="md:flex-[50%] text-2xl md:text-[42px] leading-normal  font-medium">
        Download now to get started
      </div>
      <div className="flex md:flex-[50%]">
        <button className="w-32 md:w-56 h-10 md:h-[60px] leading-8 md:leading-[3rem] text-center text-[14px] md:text-lg mr-[10px] border-2 rounded-xl border-black">
          Google Play
        </button>
        <button className="w-32 md:w-56 h-10 md:h-[60px] leading-8 md:leading-[3rem] text-center text-[14px] md:text-lg mr-[10px] border-2 rounded-xl border-black">
          App Store
        </button>
      </div>
    </div>
  );
};

export default DownloadSection;
