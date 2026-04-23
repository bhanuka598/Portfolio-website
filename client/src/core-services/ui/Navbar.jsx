import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Process", url: "work-process" },
  { id: 4, name: "Portfolio", url: "portfolio" },
  { id: 5, name: "Blog", url: "blog" },
  { id: 6, name: "Services", url: "services" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const NavBar = () => {
  const [position, setPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClass =
    "cursor-pointer rounded-full px-4 py-2 text-[16px] font-medium text-slate-900 transition-colors duration-300 hover:text-picto-primary";
  const mobileNavLinkClass =
    "block cursor-pointer rounded-2xl px-4 py-3 text-base font-medium text-slate-900 transition-colors duration-300 hover:bg-picto-primary/8 hover:text-picto-primary";

  return (
    <div
      className={`sticky top-0 ${
        position > 50
          ? "border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur"
          : "bg-white"
      } z-50 transition-all duration-500`}
    >
      <div className="content px-4 sm:px-6">
        <div className="flex min-h-[88px] items-center justify-between gap-6">
          <Link
            href="#introduction"
            to="introduction"
            smooth={true}
            duration={900}
            className="flex items-center border-0 cursor-pointer"
          >
            <img src={logo} className="h-10 sm:h-14 rounded-2xl" alt="logo" />
            <p className="ms-3 my-auto text-2xl font-semibold text-slate-950 sm:text-[32px]">
              Brooklyn
            </p>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.id}
                onClick={handleMenuClick}
                to={item.url}
                smooth={true}
                duration={1000}
                spy={true}
                offset={-120}
                activeClass="text-picto-primary"
                className={navLinkClass}
              >
                {item.name}
              </Link>
            ))}

            <Link
              className="ml-3 inline-flex cursor-pointer items-center justify-center rounded-xl bg-picto-primary px-6 py-4 text-lg font-semibold text-white shadow-[0_10px_25px_rgba(153,41,251,0.22)] transition-all duration-300 hover:scale-[1.02] hover:bg-picto-primary-dark"
              href="#contact"
              to="contact"
              smooth={true}
              duration={900}
              offset={-110}
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-900 transition-colors hover:border-picto-primary hover:text-picto-primary lg:hidden"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-slate-200 pb-4 pt-3 lg:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  onClick={() => {
                    handleMenuClick();
                    setIsMenuOpen(false);
                  }}
                  to={item.url}
                  smooth={true}
                  duration={1000}
                  spy={true}
                  offset={-120}
                  activeClass="text-picto-primary bg-picto-primary/8"
                  className={mobileNavLinkClass}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-2">
                <Link
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded-xl bg-picto-primary px-6 py-3 text-base font-semibold text-white shadow-[0_10px_25px_rgba(153,41,251,0.22)] transition-all duration-300 hover:bg-picto-primary-dark"
                  href="#contact"
                  to="contact"
                  smooth={true}
                  duration={900}
                  offset={-110}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
