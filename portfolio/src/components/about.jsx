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
              Hi, I'm <span className="text-blue-500">Tho Nguyen</span>
            </h3>
            <p className={`mb-4 leading-relaxed
                          ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                          style={{ marginBottom: '20px' }}>

              I’m originally from Vietnam and currently a Computer Engineering student at UC Davis.
              I’m passionate about building and designing technology that blends creativity with functionality, with a strong interest in 3D modeling and game development.
              I enjoy exploring how software and design can come together to create engaging and interactive experiences.

            </p>

            <p className={`mb-6 leading-relaxed
                          ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                          style={{ marginBottom: '20px' }}>

              Currently, I’m working on projects such as a security system while continuing to expand my portfolio.
              Through my coursework and personal projects, I’m constantly developing my skills and looking for new opportunities to grow as a developer and engineer.

            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Name", value: "Tho Nguyen" },
                { label: "Location", value: "San Jose, California" },
                { label: "Email", value: "ThoN54084@gmail.com" },
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
              // href="/resume.pdf"
              //target="_blank"
              //className="inline-block mt-8 px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
            >
              
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;