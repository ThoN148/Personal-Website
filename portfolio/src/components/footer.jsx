import { useTheme } from "../themecontext";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`py-8 px-4 border-t ${
        darkMode ? "border-gray-800 text-gray-400" : "border-gray-200 text-gray-600"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Name */}
        <p className="text-blue-500 font-semibold text-lg">Tho Nguyen</p>

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Tho Nguyen. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;