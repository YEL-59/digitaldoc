import img from "../../../assets/work.png";

const Work = () => {
  const datalist = [
    {
      id: 1,
      title: "Sign Up & Pay",
      subtitle: "£97/year for full membership benefits",
    },
    {
      id: 2,
      title: "Complete Profile",
      subtitle: "Upload qualifications and services",
    },
    {
      id: 3,
      title: "Attend CPD",
      subtitle: "Continued Professional Development events",
    },
    {
      id: 4,
      title: "Go Live & Grow",
      subtitle: "isted publicly + receive messages",
    },
  ];

  return (
    <div className="py-10 md:py-20 px-5 md:px-0">
      <div className="text-center mb-10" data-aos="fade-down">
        <h1 className="text-[#333] font-roboto text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.2] mb-4">
          How It Works
        </h1>
        <p className="text-[#5C5C5C] font-openSans text-[16px] sm:text-[18px] font-normal leading-[27px] max-w-xl mx-auto">
          Get started with CoPT in four simple steps
        </p>
      </div>

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/2" data-aos="fade-left">
          <img
            src={img}
            alt="How it works"
            className="w-full h-auto rounded-lg "
          />
        </div>
        {/* Steps */}
        <div className="w-full lg:w-1/2">
          {datalist.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 sm:gap-5 items-center py-4 px-3 rounded group hover:bg-[#0166A8] transition"
              data-aos="fade-up"
              data-aos-delay={200 + i * 200}
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#7cc4fb] text-[#333] font-bold">
                {item.id}
              </div>
              <div>
                <h2 className="text-[#333] font-roboto text-[18px] sm:text-[20px] font-semibold leading-[30px] group-hover:text-white">
                  {item.title}
                </h2>
                <p className="text-[#5C5C5C] font-openSans text-[16px] sm:text-[18px] font-normal leading-[27px] group-hover:text-white">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
