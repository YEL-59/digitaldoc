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
                Need help finding a Personal Trainer? You can find the qualified
                Personal Trainers on CoPT. Start your search and get free quotes
                now from PTs in your area!
              </p>
            </div>

            {/* Second paragraph */}
            <div className="max-w-5xl mx-auto">
              <p className="text-[#5C5C5C] text-center font-roboto text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-normal">
                Need help finding a Personal Trainer? You can find the qualified
                Personal Trainers on CoPT. Start your search and get free quotes
                now from PTs in your area! If it is your time looking for a
                Personal Trainer and not sure where to start? Tell us about your
                goals and we’ll send you a list of Personal Trainers to review.
                There’s no pressure to hire, so you can compare profiles, read
                previous reviews and ask for more information before you make
                your decision. Best of all - it’s completely free!
              </p>
            </div>

            {/* Third paragraph */}
            <div>
              <p className="text-primary font-roboto text-[16px] sm:text-[18px] md:text-[20px] font-bold leading-normal text-center">
                Best of all - it’s completely free!
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
