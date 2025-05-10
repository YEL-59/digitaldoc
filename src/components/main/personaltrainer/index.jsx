import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import person1 from "../../../assets/person1.png";

const trainers = [
  {
    name: "Mark Balazsik",
    image: person1,
    location: "Tottenham, Greater London",
    rate: "£55",
  },
  {
    name: "Connor Tordoff-Drew",
    image: person1,
    location: "Tottenham, Greater London",
    rate: "£55",
  },
  {
    name: "Shaun Mcgill",
    image: person1,
    location: "Tottenham, Greater London",
    rate: "£55",
  },
];

export default function PersonalTrainerGrid() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="py-12 px-4 md:px-10 lg:px-20 bg-white">
      <div className="text-center mb-10" data-aos="fade-up">
        <h2 className="text-center font-roboto text-[48px] not-italic font-bold leading-[normal]">
          Our Personal Trainer
        </h2>
        <p className="text-[#5C5C5C] text-center text-[18px] not-italic font-normal leading-[normal] mt-4">
          Our PTs offer guidance for fat loss, strength building, and tailored
          programs.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
        {Array.from({ length: 9 }).map((_, index) => {
          const trainer = trainers[index % trainers.length];
          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center bg-gray-100 rounded-lg shadow-sm overflow-hidden px-4 py-4 max-w-md w-full border border-[#DBE1E5] mx-auto"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative text-center sm:text-left">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="object-cover rounded-lg h-[172px] w-[150px] sm:h-[172px] sm:w-[150px]"
                />
                <p
                  className="font-semibold text-sm text-gray-800 mt-2 px-3 py-1 rounded inline-block"
                  style={{ background: "rgba(0, 83, 207, 0.20)" }}
                >
                  {trainer.name}
                </p>
              </div>

              <div className="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left">
                <div>
                  <p className="font-roboto text-[16px] font-medium">
                    Location
                  </p>
                  <p className="text-[#5C5C5C] text-base font-normal max-w-[180px]">
                    {trainer.location}
                  </p>

                  <p className="mt-4 font-roboto text-[16px] font-medium">
                    Sessions
                  </p>
                  <p className="text-[#0053CF] font-dosis text-xl font-bold">
                    Per hour {trainer.rate}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center" data-aos="fade-up">
        <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
          See All Professional
        </Button>
      </div>
    </div>
  );
}
