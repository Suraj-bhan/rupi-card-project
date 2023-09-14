import HighSecuritySection from "@/components/highSecuritySection";
import AppSection from "@/components/appsection";
import Banner from "@/components/banner";
import { Cashback } from "@/components/cashback";
import CommitmentSection from "@/components/commitmentsection";
import DownloadSection from "@/components/downloadsection";
import NoJoinFee from "@/components/nojoinfee";
import OfferCards from "@/components/offercards";
import SpecialInfo from "@/components/specialnfo";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <Banner />
      <Cashback />
      <OfferCards />
      <NoJoinFee />
      <AppSection />
      <CommitmentSection />
      <SpecialInfo />
      <DownloadSection />
      <HighSecuritySection />
      <Footer />
    </main>
  );
}
