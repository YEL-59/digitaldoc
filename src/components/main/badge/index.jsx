import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Badge = () => {
  return (
    <div className="bg-primary p-6 md:p-12">
      <div
        className="flex flex-col md:flex-row justify-evenly items-center gap-6 flex-wrap"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-white text-center font-roboto text-xl md:text-3xl font-medium leading-normal">
          Sign up for The Council of Personal Trainers
        </h1>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Link to="https://copt.org.uk/join-lpt-fresh">
            <Button className="bg-[#333] text-white w-full sm:w-auto hover:bg-[#333] cursor-pointer">
              Sign Up
            </Button>
          </Link>

          <Link to="https://copt.org.uk/about">
            {" "}
            <Button className="border border-white text-white w-full sm:w-auto cursor-pointer">
              Find Out More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Badge;
