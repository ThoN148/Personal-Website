import { useTheme } from "../themecontext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-gray-900/80 backdrop-blur-md shadow-lg"
            : "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold text-blue-500 hover:text-blue-400 transition-colors"
          >
            Tho Nguyen
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                darkMode
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden px-4 pb-4 ${
            darkMode ? "bg-gray-900/95" : "bg-white/95"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm font-medium border-b transition-colors hover:text-blue-500 ${
                darkMode
                  ? "text-gray-300 border-gray-700"
                  : "text-gray-600 border-gray-200"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;