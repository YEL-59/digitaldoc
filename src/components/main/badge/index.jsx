import { Button } from "@/components/ui/button";

const Badge = () => {
  return (
    <>
      <div>
        <div className="bg-primary p-12">
          <div className="flex justify-evenly ">
            <div>
              <h1 className="text-white text-center font-roboto text-4xl font-medium leading-normal">
                Sign up for The Council of Personal Trainers
              </h1>
            </div>
            <div className="flex gap-2">
              <Button className="bg-[#333] text-white">Sign In</Button>
              <Button className="border border-white"> Find Out More</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Badge;
