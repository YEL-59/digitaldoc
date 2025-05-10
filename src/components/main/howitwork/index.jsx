import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Howitwork = () => {
  const steps = [
    {
      id: 1,
      title: "Post details",
      description:
        "Post details of your personal trainers requirements in moments, completely free.",
    },
    {
      id: 2,
      title: "Find professionals",
      description:
        "We will find personal trainers in your area and do the legwork to contact them on your behalf.",
    },
    {
      id: 3,
      title: "Get quotes",
      description:
        "Receive fast free personal trainers quotes from the best personal trainers near you.",
    },
    {
      id: 4,
      title: "Compare",
      description:
        "Review proposals, compare personal trainers prices and choose the best local.",
    },
    {
      id: 5,
      title: "Write A Review",
      description:
        "Submit a review to help others find recommended personal trainers.",
    },
  ];
  return (
    <>
      <div>
        <div>
          <div>
            <h1 className="text-textmain text-center font-roboto text-[48px] not-italic font-bold leading-normal">
              How Does It Work
            </h1>

            <p className="text-textmain text-center font-open-sans text-[18px] font-normal leading-normal max-w-2xl mx-auto">
              Finding a certified personal trainer near you has never been
              easier. Just enter your location and connect with trusted fitness
              professionals in seconds.
            </p>
          </div>

          <div className="py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <Card
                  key={step.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="relative px-5 py-10 border rounded-xl shadow-md transition-shadow hover:shadow-lg"
                  style={{
                    boxShadow:
                      "0px 8px 0px 0px #0053CF, 0px 2px 12px 0px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <CardContent>
                    <div className="w-12 h-10 flex items-center justify-center bg-[rgba(0,83,207,0.10)] text-textmain text-xl font-medium rounded mb-4">
                      {step.id}
                    </div>
                    <h3 className="text-xl font-roboto font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#5C5C5C] text-base leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center items-center py-10">
              <Button className="text-center font-roboto text-[18px] not-italic rounded-lg font-normal leading-[normal]">
                Get Quotes from Personal Trainers near you
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Howitwork;
