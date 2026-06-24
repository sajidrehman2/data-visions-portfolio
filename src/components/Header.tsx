import { useState, useEffect } from "react";
import { navItems } from "@/data";
import { Menu, X, Download } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { handleCvDownload } from "@/utils/downloadUtils";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      // Determine which section is currently in view
      const sectionIds = navItems
        .map((n) => n.href)
        .filter((h) => h.startsWith("#"))
        .map((h) => h.slice(1));
      let current = sectionIds[0] ?? "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 120) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollPosition > 50;

  const handleNavItemClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleCvClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const result = handleCvDownload();
    toast({
      title: result.success ? "CV download started" : "Download failed",
      description: result.message,
      variant: result.success ? undefined : "destructive",
    });
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
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-gradient"
          aria-label="Sajid Rehman - AI Engineer & Data Scientist"
        >
          Sajid<span className="text-white">Rehman</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = item.href === `#${activeSection}`;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`text-sm font-medium link-underline transition-colors ${
                      isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="#"
                onClick={handleCvClick}
                className="text-sm font-medium px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-1"
              >
                <Download size={16} /> Download CV
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
          {navItems.map((item) => {
            const isActive = item.href === `#${activeSection}`;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`text-2xl font-medium transition-colors ${
                  isActive ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                onClick={handleNavItemClick}
              >
                {item.name}
              </a>
            );
          })}
          <a
            href="#"
            className="text-xl font-medium mt-4 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-2"
            onClick={(e) => {
              handleNavItemClick();
              handleCvClick(e);
            }}
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
