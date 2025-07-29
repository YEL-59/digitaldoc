import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Trainer = () => {
  return (
    <>
      <div className="py-20 px-3 md:px-0 ">
        <div
          className="bg-[#e6eef8] container mx-auto py-10 px-4 sm:px-6 md:px-10 lg:px-15 rounded-[8px]"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-5">
            {/* First paragraph */}
            <div className="max-w-4xl mx-auto">
              <p className="text-[#5C5C5C] text-center font-roboto text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-normal">
                Looking for a Personal Trainer Near You? Find qualified and
                experienced Personal Trainers quickly and easily on CoPT.
                Whether you're looking to lose weight, build muscle, or improve
                your overall fitness, we’ll help you connect with the right
                trainer for your goals.
              </p>
            </div>

            {/* Second paragraph */}
            <div className="max-w-5xl mx-auto">
              <p className="text-[#5C5C5C] text-center font-roboto text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-normal">
                Get Free Quotes from Local Personal Trainers Searching for a
                personal trainer for the first time? Not sure where to begin?
                Just tell us your fitness goals, and we’ll match you with
                qualified personal trainers in your area. Compare profiles, read
                real reviews, and contact trainers directly. There’s no
                obligation to hire, so you can make an informed choice before
                committing.
              </p>
            </div>

            {/* Third paragraph */}
            <div>
              <p className="text-primary font-roboto text-[16px] sm:text-[18px] md:text-[20px] font-bold leading-normal text-center">
                Start your fitness journey today on CoPT!
              </p>
            </div>

            {/* Button */}
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link to="https://copt.org.uk/for-personal-trainers">
                {" "}
                <Button className="py-[10px] text-white text-center font-roboto text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-normal">
                  Find your Personal Trainer today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trainer;
