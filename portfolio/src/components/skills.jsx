import { useTheme } from "../themecontext";

const Skills = () => {
  const { darkMode } = useTheme();

  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML", "CSS", "TailwindCSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "REST APIs"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "Docker"] },
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-blue-500">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-16 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className={`rounded-2xl p-6 border transition-colors ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700 hover:border-blue-500"
                  : "bg-gray-50 border-gray-200 hover:border-blue-500"
              }`}
            >
              <h3 className="text-xl font-semibold text-blue-500 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      darkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;