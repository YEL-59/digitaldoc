import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router";
import logo from "../../../../assets/logo.png";

import { useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const list = [
    // { label: "Home", to: "/" },
    { label: "About Us", to: "#features" },
    { label: "Find a Personal Trainer", to: "#pricing" },
    { label: "Blog", to: "#blogs" },
    { label: "Faq", to: "#faq" },
  ];
  const [isSticky, setIsSticky] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      let threshold = 172;
      const width = window.innerWidth;

      if (width < 768) {
        threshold = 83;
      } else if (width >= 768 && width < 1024) {
        threshold = 92;
      }

      setIsSticky(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-primary p-3 text-center">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-white font-roboto text-[12px] not-italic font-normal leading-none">
            Join CoPT Today and Gain Clients From Around The UK
          </h2>
          <Button className="font-roboto text-white bg-[#333] hover:bg-[#333] text-[12px] capitalize not-italic font-normal leading-none">
            Join now
          </Button>
        </div>
      </div>
      <nav
        className={`w-full py-8 relative z-[1000] ${
          isSticky ? "md:sticky md:top-0" : ""
        } shadow-[0px_25px_60px_-15px_rgba(180,195,229,0.20)]`}
        style={{
          backgroundColor: "#0D0D0D",
        }}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-15" />
          </Link>

          <ul className="hidden lg:flex gap-8">
            {list.map((item, i) => {
              const isActive = item.to.startsWith("#")
                ? window.location.hash === item.to
                : location.pathname === item.to;

              return (
                <li key={i}>
                  <a
                    href={item.to}
                    className={`text-white text-center font-roboto text-[18px] not-italic font-normal leading-none relative ${
                      isActive ? "text-white" : "text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="hidden md:flex gap-4">
            <div className="hidden md:block">
              <Button
                variant="outline"
                className="rounded-lg bg-primary text-[18px] font-normal font-roboto text-white default-text px-5 py-5 outline-0 border-0"
                // style={{
                //   boxShadow: "0px 20px 30px -10px rgba(96, 73, 188, 0.6)",
                // }}
              >
                For PTs
              </Button>
            </div>
            <div className="hidden md:block">
              <Button className="relative rounded-lg bg-transparent hover:border-[#6049bc] text-white font-roboto border border-white text-[16px] px-5 py-5">
                Find PTs
              </Button>
            </div>

            <div className="hidden md:flex items-center gap-3">
              {/* Dark/Light Mode Toggle */}
              <button
                onClick={() =>
                  document.documentElement.classList.toggle("dark")
                }
                className="p-2 rounded-md border border-[#6049bc] text-white hover:bg-[#6049bc] transition"
                aria-label="Toggle Dark Mode"
              >
                {document.documentElement.classList.contains("dark") ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-4 mt-[5rem]">
                <ul className="space-y-4">
                  {list.map((item, i) => (
                    <li key={i}>
                      <Link
                        to={item.to}
                        onClick={() => setIsOpen(false)}
                        className={`text-[14px] font-semibold leading-normal transition ${
                          location.pathname === item.to
                            ? "text-[#B3A162]"
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button
                    variant="outline"
                    className="rounded-md w-full text-[16px] px-5 py-5"
                  >
                    Get Started
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
