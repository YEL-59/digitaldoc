import Badge from "@/components/main/badge";
import BlogSection from "@/components/main/blog";
import Council from "@/components/main/council";
import FAQSection from "@/components/main/faq";

import Hero from "@/components/main/hero";
import Howitwork from "@/components/main/howitwork";
import PersonalTrainerGrid from "@/components/main/personaltrainer";
import Trainer from "@/components/main/trainer";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <Trainer />
        <Howitwork />
        <Council />
        <PersonalTrainerGrid />
        <FAQSection />
        <BlogSection />
        <Badge />
      </div>
    </>
  );
};

export default Home;
