import Council from "@/components/main/council";
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
      </div>
    </>
  );
};

export default Home;
