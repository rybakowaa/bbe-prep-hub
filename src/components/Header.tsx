import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverLight, setIsOverLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check which section we're over based on scroll position
      const lightSections = document.querySelectorAll('[data-theme="light"]');
      const scrollY = window.scrollY + 80; // Header offset

      let overLight = false;
      lightSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          overLight = true;
        }
      });

      setIsOverLight(overLight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Course", href: "/#structure" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Pricing", href: "/pricing" },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-700 ${
      isScrolled ? "py-3" : "py-6"
    }`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-center">
        {/* Navigation Container */}
        <div
          className={`flex items-center transition-all duration-300 ease-out ${
            isScrolled
              ? `gap-0 backdrop-blur-md shadow-lg rounded-full px-2 py-2 border ${
                  isOverLight
                    ? "bg-white/40 border-slate-200/30"
                    : "bg-slate-900/40 border-white/10"
                }`
              : "gap-0 bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className={`font-bold tracking-wider transition-all duration-500 ${
              isScrolled
                ? `text-sm px-4 py-2 translate-x-0 ${isOverLight ? "text-slate-900" : "text-white"}`
                : `text-base px-6 -translate-x-[250px] ${isOverLight ? "text-slate-900" : "text-white"}`
            }`}
          >
            BBE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link, index) => {
              const offset = (index - 2) * 80; // Spread from center
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-medium transition-colors duration-200 ${
                    isScrolled
                      ? `text-sm px-4 py-2 rounded-full translate-x-0 ${
                          isOverLight
                            ? "text-slate-700 hover:text-slate-900 hover:bg-slate-900/10"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                        }`
                      : `text-base px-6 ${isOverLight ? "text-slate-700 hover:text-slate-900" : "text-white/80 hover:text-white"}`
                  }`}
                  style={{
                    transform: isScrolled ? 'translateX(0)' : `translateX(${offset}px)`,
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s, background-color 0.2s'
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Contact Button */}
          <Link
            to="/pricing"
            className={`hidden md:block font-medium transition-all duration-500 ${
              isScrolled
                ? `text-sm px-5 py-2 rounded-full translate-x-0 ${
                    isOverLight
                      ? "text-white bg-slate-900 hover:bg-slate-800"
                      : "text-slate-900 bg-white hover:bg-white/90"
                  }`
                : `text-base px-6 translate-x-[250px] ${isOverLight ? "text-slate-700 hover:text-slate-900" : "text-white/80 hover:text-white"}`
            }`}
          >
            Contact
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden transition-colors duration-200 ${
              isScrolled ? "px-3 py-2" : ""
            } ${isOverLight ? "text-slate-900" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-6 right-6 mt-2 bg-slate-900/95 backdrop-blur-xl rounded-2xl p-4 md:hidden flex flex-col gap-1 shadow-xl border border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-base font-medium text-white/80 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/pricing"
            className="mt-2 px-4 py-3 text-base font-medium text-slate-900 bg-white rounded-xl text-center"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
