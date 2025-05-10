import herobg from "../../../assets/herobg.png";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center text-white px-4"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="text-center max-w-5xl w-full" data-aos="fade-up">
        <h1 className="text-white font-roboto text-[32px] sm:text-[48px] md:text-[64px] font-bold leading-tight mb-4">
          Find Personal Trainers near you
        </h1>
        <p className="text-[#E8E8E8] font-openSans text-base sm:text-lg md:text-[18px] font-normal leading-[27px] mb-8">
          Where do you need your Personal Trainer?
        </p>
        <div
          className="flex flex-col sm:flex-row items-center gap-3 justify-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <input
            type="text"
            placeholder="Enter Your Postcode"
            className="px-4 py-3 rounded-lg text-black bg-white w-full sm:w-64"
          />
          <button className="bg-primary hover:bg-blue-700 font-roboto text-white px-6 py-3 rounded-lg w-full sm:w-auto">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
