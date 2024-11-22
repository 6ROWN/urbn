import ExploreCities from "@/components/ExploreCities";
import FeaturedProperties from "@/components/FeaturedProperties";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OurBenefits from "@/components/OurBenefits";
import OurServices from "@/components/OurServices";
import OurTeams from "@/components/OurTeams";
import OurTestimonials from "@/components/OutTestimonials";
import PropertyType from "@/components/PropertyType";
import RecommendedForYou from "@/components/RecommendedForYou";
import TrustedBySection from "@/components/TrustedBySection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PropertyType />
      <FeaturedProperties />
      <RecommendedForYou />
      <ExploreCities />
      <OurServices />
      <OurBenefits />
      <OurTestimonials />
      <OurTeams />
      <TrustedBySection />
    </div>
  );
};

export default Home;
