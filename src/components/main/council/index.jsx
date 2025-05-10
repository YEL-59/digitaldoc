import { Button } from "@/components/ui/button";
import councilbg from "../../../assets/councilbg.png";

const Council = () => {
  return (
    <div className="bg-[#141414] py-16 px-4">
      <div className="container mx-auto">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <h1
            data-aos="fade-right"
            className="text-white font-roboto text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.5] text-center lg:text-left"
          >
            About The Council of Personal Trainers
          </h1>
          <p
            data-aos="fade-left"
            className="text-[#E8E8E8] font-open-sans text-[16px] sm:text-[18px] font-normal leading-[27px] text-center lg:text-left max-w-2xl"
          >
            Personal Training is a vital industry, helping people across the UK
            reach their fitness goals safely and with the latest techniques and
            knowledge.
          </p>
        </div>

        {/* Bottom section */}
        <div className="mt-12 flex flex-col lg:flex-row gap-10 items-center">
          <div data-aos="zoom-in">
            <img
              src={councilbg}
              className="w-full max-w-[522px] h-auto aspect-[522/517]"
              alt="Council background"
            />
          </div>

          <div
            data-aos="fade-up"
            className="flex-1 max-w-2xl text-[#E8E8E8] font-open-sans text-[16px] sm:text-[18px] font-normal leading-[27px]"
          >
            <p className="mb-6">
              CoPT is for Personal Trainers and our industry. Currently anyone
              can be a PT, qualifications are not required, the industry lacks
              regulation and there is no requirement for Continued Professional
              Development (CPD). This in turn undermines the professionalism of
              our industry.
            </p>
            <p className="mb-10">
              We’re here to elevate the personal training profession by
              championing high standards, qualifications, and a commitment to
              CPD. Together, we can build a more regulated, respected and
              professional industry.
            </p>
            <Button className="text-white font-roboto text-[18px] font-normal leading-none">
              See More About Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Council;
