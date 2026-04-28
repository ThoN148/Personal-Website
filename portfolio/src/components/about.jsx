import { useTheme } from "../themecontext";

const About = () => {
  const { darkMode } = useTheme();

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-blue-500">Me</span>
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-16 rounded-full" />

        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Profile Image */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 flex-shrink-0 mx-auto">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Hi, I'm <span className="text-blue-500">Your Name</span>
            </h3>
            <p className={`mb-4 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Write a short paragraph about yourself here! Where are you from,
              what do you do, what are you passionate about?
            </p>
            <p className={`mb-6 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Add a second paragraph here. Maybe talk about your background,
              education, or what you're currently working on.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Name", value: "Your Name" },
                { label: "Location", value: "Your City, State" },
                { label: "Email", value: "your@email.com" },
                { label: "Available", value: "Open to opportunities" },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-2">
                  <span className="text-blue-500 font-medium">{label}:</span>
                  <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-block mt-8 px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
            >
              Download Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;