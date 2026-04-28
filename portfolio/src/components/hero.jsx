import { useTheme } from "../themecontext";

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center z-10">
        {/* Greeting */}
        <p className="text-blue-500 font-medium mb-4 text-lg tracking-widest uppercase">
          Hi, my name is
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Tho Nguyen!
        </h1>

        {/* Title */}
        <h2
          className={`text-2xl md:text-3xl font-light mb-6 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Full Stack Developer
        </h2>

        {/* Description */}
        <p
          className={`max-w-xl mx-auto text-base md:text-lg mb-10 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          I build beautiful, responsive web applications with modern
          technologies. Passionate about creating great user experiences.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className={`px-6 py-3 rounded-full font-medium border transition-colors ${
              darkMode
                ? "border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-500"
                : "border-gray-400 text-gray-600 hover:border-blue-500 hover:text-blue-500"
            }`}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;