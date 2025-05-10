import flogo from "../../../../assets/logo.png";
import flogo1 from "../../../../assets/gvtb.png";
import flogo2 from "../../../../assets/gvtb1.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-20">
      <div className="container mx-auto">
        {/* Footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10 text-center md:text-left">
          {/* Logo */}
          <div data-aos="fade-up">
            <div className="mb-4 flex justify-center md:justify-start">
              <img
                src={flogo}
                alt="CoPT Logo"
                className="h-16 mx-auto md:mx-0"
              />
            </div>
          </div>

          {/* Find a Personal Trainer */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-white font-roboto text-2xl font-semibold leading-none mb-2">
              Find a Personal Trainer
            </h3>
            <ul className="space-y-4 py-5 text-[#E8E8E8] font-open-sans text-base font-normal leading-none">
              <li>
                <a href="#" className="hover:underline">
                  Personal Trainer Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to choose a PT
                </a>
              </li>
            </ul>
          </div>

          {/* Personal Trainer Resources */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-white font-roboto text-2xl font-semibold leading-none mb-2">
              Personal Trainer Resources
            </h3>
            <ul className="space-y-4 py-5 text-[#E8E8E8] font-open-sans text-base font-normal leading-none">
              <li>
                <a href="#" className="hover:underline">
                  Why Register with CoPT?
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to open a gym
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-white font-roboto text-2xl font-semibold leading-none mb-2">
              Company
            </h3>
            <ul className="space-y-4 py-5 text-[#E8E8E8] font-open-sans text-base font-normal leading-none mb-4">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4">
              <img src={flogo1} alt="Google Reviews" className="h-12" />
              <img src={flogo2} alt="Trustpilot" className="h-12" />
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className="border-t border-gray-700 pt-6 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-[#B5B5B5] font-open-sans text-[18px] font-normal leading-[33px]">
            Copyright Find a Personal Trainer with The Council of Personal
            Trainers © 2025. All Rights Reserved
          </p>
          <p className="mt-1 font-open-sans text-[18px] font-normal leading-[33px] text-[#B5B5B5]">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
