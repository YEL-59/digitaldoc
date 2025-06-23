import img from "../../../assets/story.png";
const Story = () => {
  return (
    <>
      <div className="py-10 md:py-30 p-5 md:p-0">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10">
          <div data-aos="fade-right">
            <img src={img} alt="" />
          </div>
          <div data-aos="fade-left">
            <h1 className="text-[#333] font-roboto text-[30px] md:text-[48px] font-bold leading-[72px]">
              Little Story About CoPT
            </h1>
            <p className="text-[#5C5C5C] font-openSans text-[18px] font-normal leading-[27px] max-w-xl py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse et mollis nunc. Mauris rhoncus odio nec leo porttitor.
            </p>
            <div data-aos="fade-up" data-aos-delay="200">
              <h1 className="text-[#333] font-roboto text-[24px] text-center md:text-start font-semibold leading-[150%] py-5">
                Our Vision
              </h1>

              <p className="text-[#5C5C5C] font-openSans text-[18px] font-normal leading-[27px] max-w-xl ">
                The fitness industry needed a professional body that truly
                represents qualified personal trainers. We exist to elevate
                standards, provide ongoing education, and create meaningful
                connections between trainers and clients
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <h1 className="text-[#333] font-roboto text-[24px] text-center md:text-start font-semibold leading-[150%] py-5">
                Our Mission
              </h1>

              <p className="text-[#5C5C5C] font-openSans text-[18px] font-normal leading-[27px] max-w-xl ">
                Our mission is to professionalize personal training through
                rigorous CPD requirements, community building, and industry
                advocacy. When you join CoPT, you're not just getting a
                membership—you're joining a movement toward excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
