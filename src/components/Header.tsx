
import { useState, useEffect } from "react";
import { navItems } from "@/data";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollPosition > 50;

  // Close mobile menu when clicking on a link
  const handleNavItemClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-background/90 backdrop-blur-md border-b border-muted/20 shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-xl font-bold tracking-tight text-gradient"
          aria-label="Sajid Rehman - AI Engineer & Data Scientist"
        >
          Sajid<span className="text-white">Rehman</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-medium link-underline text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/sajidrehman2/My_resume/raw/main/sajid_resume.pdf"
                className="text-sm font-medium px-4 py-2 rounded-md bg-primary/20 hover:bg-primary/30 text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const link = document.createElement('a');
                  link.href = "https://github.com/sajidrehman2/My_resume/raw/main/sajid_resume.pdf";
                  link.setAttribute('download', 'Sajid_Rehman_Resume.pdf');
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={handleNavItemClick}
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://github.com/sajidrehman2/My_resume/raw/main/sajid_resume.pdf"
            className="text-xl font-medium mt-4 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavItemClick();
              const link = document.createElement('a');
              link.href = "https://github.com/sajidrehman2/My_resume/raw/main/sajid_resume.pdf";
              link.setAttribute('download', 'Sajid_Rehman_Resume.pdf');
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
