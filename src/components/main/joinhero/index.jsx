import Joinsvg from "@/assets/joinsvg";
import herobg from "../../../assets/joinbg.png";
import { Link } from "react-router";

const Joincpt = () => {
  return (
    <>
      <div
        className="bg-cover bg-center  min-h-screen flex items-center justify-center text-white px-4"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div className="container mx-auto  py-20">
          <div
            className=" max-w-4xl w-full border rounded-lg py-10 px-10 backdrop-blur-md "
            data-aos="fade-up"
          >
            <h1 className="text-white font-roboto text-[32px] sm:text-[48px] md:text-[64px] font-bold leading-tight mb-4">
              Stand Out as a Certified Fitness Professional
            </h1>
            <p className="text-[#E8E8E8] font-openSans text-base sm:text-lg md:text-[18px] font-normal leading-[27px] max-w-xl mb-8">
              Join thousands of verified trainers building trust and credibility
              with the UK's leading professional registry
            </p>
            <div
              className="flex  items-start gap-3 justify-start "
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link to="/membership">
                {" "}
                <button className="bg-primary hover:bg-blue-700 font-roboto flex gap-2 text-white px-6 py-3 rounded w-full sm:w-auto cursor-pointer">
                  Become a Member – Only £34/year <Joinsvg />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Joincpt;
