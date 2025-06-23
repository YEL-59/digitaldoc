import Benifit from "@/components/main/benifit";
import Bottom from "@/components/main/bottom";
import FAQSection from "@/components/main/joinfaq";
import Joincpt from "@/components/main/joinhero";
import Story from "@/components/main/story";
import Work from "@/components/main/work";

const Join = () => {
  return (
    <>
      <div>
        <div>
          <Joincpt />
        </div>
        <div>
          <Story />
        </div>
        <div>
          <Benifit />
        </div>
        <div>
          <Work />
        </div>
        <div>
          <FAQSection />
        </div>
        <div>
          <Bottom />
        </div>
      </div>
    </>
  );
};

export default Join;
