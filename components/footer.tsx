import Image from "next/image";

const Footer = () => {
  const anchorData = [
    {
      title: "Instagram",
      href: "#",
    },
    {
      title: "LinkedIn",
      href: "#",
    },
    {
      title: "Twitter",
      href: "#",
    },
    {
      title: "Facebook",
      href: "#",
    },
    {
      title: "Careers",
      href: "#",
    },
  ];

  const tncLinks = [
    {
      title: "Credit Card KFS",
      href: "#",
    },
    {
      title: "Credit Card T&Cs",
      href: "#",
    },
    {
      title: "Uni T&Cs",
      href: "#",
    },
    {
      title: "Lending Partner T&Cs",
      href: "#",
    },
  ];
  return (
    <div className="w-full px-36 py-24 pb-48">
      <div>
        <div>
          <Image
            src="/uni_color_logo.svg"
            alt="uni-color-logo"
            width={120}
            height={90}
          />
        </div>
        <div className="text-base text-[#8d8d95] max-w-sm flex flex-col gap-8 mb-4">
          <div>
            Indiqube Sigma No.3/B, Nexus Koramangala 3rd Block SBI Colony,
            Koramangala, Bengaluru, Karnataka 560034
          </div>
          <div>
            <div>
              Contact Us: <a href="tel:8560801883">8560801883</a>{" "}
            </div>
            <div>
              Email:{" "}
              <a href="mailto:surajbhanmundotiya@gmail.com">
                surajbhanmundotiya@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-b border-white"></div>
        <div className="my-4">
          Grievance Redressal Mechanism - SBM Bank India
        </div>
        <div className="h-[1px] download-bg"></div>
        <div className="flex justify-between my-8">
          <div className="flex gap-8">
            {anchorData.map((item) => (
              <a key={item.title} href={item.href}>
                {item.title}
              </a>
            ))}
          </div>
          <div className="flex">
            {tncLinks.map((item, index) => (
              <a
                key={item.title}
                href={item.href}
                className={`${
                  index <= tncLinks.length - 2 ? "border-r-2 border-white" : ""
                } px-4 ${index === tncLinks.length - 1 ? "pr-0" : ""}`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
