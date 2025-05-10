import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router";
import logo from "../../../../assets/logo.png";
import Menu from "@/assets/menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const list = [
    { label: "About Us", to: "#features" },
    { label: "Find a Personal Trainer", to: "#personaltrainer" },
    { label: "Blog", to: "#blogs" },
    { label: "Faq", to: "#faq" },
  ];

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let threshold = 172;
      const width = window.innerWidth;

      if (width < 768) threshold = 83;
      else if (width >= 768 && width < 1024) threshold = 92;

      setIsSticky(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top CTA Bar */}
      <div className="hidden md:flex justify-center items-center bg-primary p-3 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <h2 className="text-white font-roboto text-[12px] font-normal">
            Join CoPT Today and Gain Clients From Around The UK
          </h2>
          <Button className="bg-[#333] hover:bg-[#333] text-white text-[12px] font-roboto capitalize px-4 py-2">
            Join now
          </Button>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`w-full py-6 relative z-[1000] ${
          isSticky ? "md:sticky md:top-0" : ""
        } shadow-[0px_25px_60px_-15px_rgba(180,195,229,0.20)]`}
        style={{ backgroundColor: "#0D0D0D" }}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-12" />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex gap-8">
            {list.map((item, i) => {
              const isActive = item.to.startsWith("#")
                ? window.location.hash === item.to
                : location.pathname === item.to;

              return (
                <li key={i}>
                  <a
                    href={item.to}
                    className={`text-white font-roboto text-[18px] font-normal leading-none relative ${
                      isActive ? "text-white underline" : "text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4">
            <Button className="bg-primary text-white font-roboto text-[18px] px-5 py-3 border-0">
              For PTs
            </Button>
            <Button className="bg-transparent text-white font-roboto text-[16px] border border-white px-5 py-3 hover:border-[#6049bc]">
              Find PTs
            </Button>
            <Button className="bg-transparent">
              {" "}
              <Menu />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white ">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[85%] sm:w-64 p-6 bg-[#0D0D0D] text-white z-[1001]"
              >
                <div className="flex flex-col space-y-6 mt-6">
                  {list.map((item, i) => (
                    <Link
                      key={i}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`text-[16px] font-roboto font-medium transition ${
                        location.pathname === item.to
                          ? "text-[#B3A162]"
                          : "hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-10 flex flex-col gap-4">
                  <Button className="bg-primary w-full text-white font-roboto text-[16px]">
                    For PTs
                  </Button>
                  <Button className="w-full border border-white bg-transparent text-white font-roboto text-[16px] hover:border-[#6049bc]">
                    Find PTs
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
