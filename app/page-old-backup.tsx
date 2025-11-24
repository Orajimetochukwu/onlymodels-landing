import Hero from "@/components/Hero";
import FeaturedIn from "@/components/FeaturedIn";
import TopCreators from "@/components/TopCreators";
import WhyOnlyModels from "@/components/WhyOnlyModels";
import Transparency from "@/components/Transparency";
import USChatters from "@/components/USChatters";
import AntiLeak from "@/components/AntiLeak";
import Marketing from "@/components/Marketing";
import Testimonials from "@/components/Testimonials";
import Consulting from "@/components/Consulting";
import StrategicGrowth from "@/components/StrategicGrowth";
import InHouseChatters from "@/components/InHouseChatters";
import BoundaryControl from "@/components/BoundaryControl";
import CreatorStruggles from "@/components/CreatorStruggles";
import FAQ from "@/components/FAQ";
import ReferFriend from "@/components/ReferFriend";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <FeaturedIn />
      <TopCreators />
      <WhyOnlyModels />
      <Transparency />
      <USChatters />
      <AntiLeak />
      <Marketing />
      <Testimonials />
      <Consulting />
      <StrategicGrowth />
      <InHouseChatters />
      <BoundaryControl />
      <CreatorStruggles />
      <FAQ />
      <ReferFriend />
      <FinalCTA />
      <Footer />
    </main>
  );
}
