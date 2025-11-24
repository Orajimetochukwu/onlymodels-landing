import Navbar from "@/components/Navbar";
import StarBackground from "@/components/StarBackground";
import CustomCursor from "@/components/CustomCursor";
import HeroNew from "@/components/HeroNew";
import AsSeenIn from "@/components/AsSeenIn";
import LogoMarquee from "@/components/LogoMarquee";
import TopCreators from "@/components/TopCreators";
import WhyOnlyModels from "@/components/WhyOnlyModels";
import Transparency from "@/components/Transparency";
import USChatters from "@/components/USChatters";
import AntiLeak from "@/components/AntiLeak";
import Services from "@/components/Services";
import DoneForYou from "@/components/DoneForYou";
import MarketingGrowth from "@/components/MarketingGrowth";
import Marketing from "@/components/Marketing";
import InHouseChatters from "@/components/InHouseChatters";
import BoundaryControl from "@/components/BoundaryControl";
import Testimonials from "@/components/Testimonials";
import CreatorStruggles from "@/components/CreatorStruggles";
import FAQ from "@/components/FAQ";
import ReferFriend from "@/components/ReferFriend";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Background Effects */}
      <StarBackground />
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative overflow-hidden">
        <HeroNew />
        <AsSeenIn />
        <LogoMarquee />
        <TopCreators />
        <WhyOnlyModels />
        <Transparency />
        <USChatters />
        <AntiLeak />
        <Services />
        <DoneForYou />
        <MarketingGrowth />
        <Marketing />
        <InHouseChatters />
        <BoundaryControl />
        <Testimonials />
        <CreatorStruggles />
        <FAQ />
        <ReferFriend />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
