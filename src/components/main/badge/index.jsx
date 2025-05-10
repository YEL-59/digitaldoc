import { Button } from "@/components/ui/button";

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
          <Button className="bg-[#333] text-white w-full sm:w-auto">
            Sign In
          </Button>
          <Button className="border border-white text-white w-full sm:w-auto">
            Find Out More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Badge;
