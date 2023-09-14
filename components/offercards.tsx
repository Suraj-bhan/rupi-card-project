import OfferCard from "./offercard";

const OfferCards = () => {
  const data = [
    {
      title: {
        primary: "1% assured cashback on your spends.",
        secondary: "The more you spend, the more you earn.",
      },
      content:
        "Not applicable on fuel purchase, rent & wallet transfers, ATM withdrawals & international transactions.",
      img: "/one_percent_cashback.png",
    },
    {
      title: {
        primary: "5x more value than your cashback,",
        secondary: "only at the Uni Store.",
      },
      img: "/five_x_rewards.png",
    },
    {
      title: {
        primary: "Zero Forex Markup.",
        secondary: "Go international, without any fees.",
      },
      img: "/forex_globe.png",
    },
  ];
  return (
    <div className="py-24 md:py-36 w-full bg-white text-black flex flex-col gap-12 md:gap-24">
      {data.map((item, index) => (
        <OfferCard
          key={item.title.primary}
          title={item.title}
          content={item.content}
          img={item.img}
          direction={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
};

export default OfferCards;
