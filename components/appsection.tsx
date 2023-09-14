import Image from "next/image";
import React from "react";
import AppCard from "./appcard";
import InfoCard from "./infocard";

const AppSection = () => {
  const AppCardData = [
    {
      title: {
        primary: "We’ve all heard of instant groceries, now say hello to",
        secondary: "instant credit.",
      },
      content: "0% hassle, 100% paperless. Get your Uni Card instantly.",
      img: "/app_screen_1.webp",
    },
    {
      title: {
        primary: "With Uni,",
        secondary: "you’re always in control.",
      },
      content:
        "Set your own payment limits. Choose how and where you spend. Lock and unlock your card. All right from the app.",
      img: "/app_screen_2.webp",
    },
  ];

  const InfoCardData = [
    {
      title: "Help, just a WhatsApp away. Anytime, Anyday.",
      content:
        "During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.",
      img: "/whatsapp_bubble.webp",
    },
    {
      title: "No hidden charges, no last minute surprises.",
      content:
        "100% money back guarantee if a charge is applied without your knowledge.",
      img: "/rupee_bubble.webp",
    },
    {
      title: "Super secure. Because we care about your money.",
      secondaryImg: "pcidss_cert.svg",
      img: "/antivirus_bubble.webp",
    },
  ];
  return (
    <div className="py-36 w-full bg-black px-8 md:px-36 text-white relative gap-12">
      <Image
        src="/circles.png"
        alt="circles"
        className="absolute top-0 left-0"
        width={900}
        height={500}
      />

      {AppCardData.map((item) => (
        <AppCard
          key={item.title.primary}
          title={item.title}
          content={item.content}
          img={item.img}
        />
      ))}
      <div className="flex justify-between flex-col md:flex-row gap-2 md:gap-12">
        {InfoCardData.map((item, index) => (
          <InfoCard
            key={item.title}
            title={item.title}
            content={item.content}
            img={item.img}
            secondaryImg={item.secondaryImg}
            direction={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
};

export default AppSection;
