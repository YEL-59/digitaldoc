import { Button } from "@/components/ui/button";
import img from "../../../assets/bottom.png";
import Joinsvg from "@/assets/joinsvg";

const Bottom = () => {
  return (
    <div
      className="relative bg-center  bg-no-repeat min-h-screen flex items-center justify-center text-white px-4 sm:px-8 md:px-12"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Content */}
      <div className="relative  container mx-auto ml-80 text-start space-y-6 overflow-hidden">
        <button className="bg-white/10 hover:bg-blue-700 hover:border-2 font-roboto text-white px-6 py-3 rounded w-full sm:w-auto">
          Join the Elite Community
        </button>
        <h1 className="text-white font-public-sans text-xl md:text-[48px] font-bold leading-[80px] ">
          Ready to Transform Your Career?
        </h1>
        <p className="text-white font-public-sans text-[16px] font-normal leading-[26px] max-w-xl">
          Join thousands of professional trainers who trust CoPT for
          their career development and business growth
        </p>
        <div className="flex justify-start gap-5 flex-wrap">
          <button className="bg-white hover:bg-blue-700 hover:border-2 font-roboto flex gap-2 text-black px-6 py-3 rounded w-full sm:w-auto">
            Become a Member – Only £34/year <Joinsvg />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
