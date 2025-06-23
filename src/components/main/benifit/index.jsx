import img from "../../../assets/benifit.png";
import icon from "../../../assets/benefiticon.png";
const Benifit = () => {
  const datalist = [
    {
      title: "Find Clients Easily",
      subtitle: "Trainers show up in searchable listings",
      icon: icon,
    },
    {
      title: "Trusted Course Discounts",
      subtitle: "Get vetted, exclusive training offers",
      icon: icon,
    },
    {
      title: "Joined Community",
      subtitle: "Grow with peers & shape the industry",
      icon: icon,
    },
    {
      title: "Cost-Effective Marketing",
      subtitle: "More value than running your own site",
      icon: icon,
    },
    {
      title: "Exclusive Member Perks:",
      subtitle: " Events, resources, and continuing education",
      icon: icon,
    },
  ];
  return (
    <>
      <div className="py-10 md:py-30 p-5 md:p-0">
        <div className="container mx-auto flex flex-col lg:flex-row items-start justify-evenly gap-10">
          <div>
            <div data-aos="fade-right">
              <h1 className="text-[#333] font-roboto text-[30px] text-center md:text-start md:text-[48px] font-bold leading-[72px]">
                Benefits Of CoPT{" "}
              </h1>
              <p className="text-[#5C5C5C] font-openSans text-[18px] font-normal leading-[27px] max-w-xl py-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse et mollis nunc. Mauris rhoncus odio nec leo
                porttitor.
              </p>
            </div>
            <div>
              {datalist.map((item, i) => {
                return (
                  <div key={i}>
                    <div
                      className="flex gap-5 justify-start items-center py-7"
                      data-aos="fade-up"
                      data-aos-delay={200 + i * 200}
                    >
                      <div>
                        <img src={item.icon} alt="" />
                      </div>
                      <div>
                        <h1 className="text-[#333] font-roboto text-[20px] font-semibold leading-[30px]">
                          {item.title}
                        </h1>
                        <p className="text-[#5C5C5C] font-openSans text-[18px] font-normal leading-[27px]">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div data-aos="fade-left">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Benifit;
