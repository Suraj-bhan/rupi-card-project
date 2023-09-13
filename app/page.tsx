import Banner from "@/components/banner";
import { Cashback } from "@/components/cashback";
import NoJoinFee from "@/components/nojoinfee";
import OfferCards from "@/components/offercards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <Banner />
      <Cashback />
      <OfferCards/>
      <NoJoinFee/>
    </main>
  );
}
