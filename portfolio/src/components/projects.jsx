import { useTheme } from "../themecontext";
import { ExternalLink, Code2 } from "lucide-react"; // Come back to this with Github instead of Code2

const Projects = () => {
  const { darkMode } = useTheme();

  const projects = [
    {
      title: "Project One",
      description: "A brief description of what this project does, the problem it solves, and what you learned building it.",
      tags: ["React", "TailwindCSS", "Node.js"],
      github: "https://github.com/yourusername/project-one",
      live: "https://project-one.com",
      image: "/project1.png",
    },
    {
      title: "Project Two",
      description: "A brief description of what this project does, the problem it solves, and what you learned building it.",
      tags: ["Python", "MongoDB", "Express"],
      github: "https://github.com/yourusername/project-two",
      live: "https://project-two.com",
      image: "/project2.png",
    },
    {
      title: "Project Three",
      description: "A brief description of what this project does, the problem it solves, and what you learned building it.",
      tags: ["JavaScript", "Firebase", "CSS"],
      github: "https://github.com/yourusername/project-three",
      live: "https://project-three.com",
      image: "/project3.png",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-16 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ title, description, tags, github, live, image }) => (
            <div
              key={title}
              className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              {/* Project Image */}
              <div className="w-full h-48 overflow-hidden bg-gray-700">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p
                  className={`text-sm mb-4 leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-500 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <Code2 size={16} />
                    Code
                  </a>

                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-500 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;