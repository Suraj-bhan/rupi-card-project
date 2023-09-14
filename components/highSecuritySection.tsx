import Image from "next/image";

const HighSecuritySection = () => {
  return (
    <div className="w-full flex items-center justify-center p-4 text-grey-dark bg-black-2">
      Uni maintains the highest level of security standards
      <Image src={"pcidss_cert.svg"} alt={"pci-dss"} height={33} width={84} />
    </div>
  );
};

export default HighSecuritySection;
