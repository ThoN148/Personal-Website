import { useTheme } from "../themecontext";
import { ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const { darkMode } = useTheme();

const projects = [
  {
    title: "Smart Home Security Monitoring System",
    description: "A full stack home safety system integrating 4 sensor types and camera live feeds, leveraging AWS Rekognition for real-time hazard detection within 5 seconds. Features an Android app with live camera feed, push alerts, and remote monitoring dashboard.",
    tags: ["React", "Kotlin", "AWS", "Android Studio", "AWS Amplify", "Jira"],
    github: "https://github.com/ThoN148/HSSMobileApp.git",
    live: "",
    image: "/project1.jpeg",
  },
  {
    title: "Beholden",
    description: "A 2D puzzle platformer where players manipulate the camera to solve environmental puzzles. Built with a team using Godot engine, featuring unique camera-control mechanics as the core gameplay element.",
    tags: ["Godot", "GDScript", "2D Platformer", "Game Design", "Team Project"],
    github: "https://github.com/Mediocre-Mr-Fish/ECS179-Final-Project.git",
    live: "https://mediocre-mr-fish.itch.io/beholden",
    image: "/project2.png",
  },
];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-16 rounded-full" />

        {/* Scroll hint */}
        <div className="flex items-center justify-end mb-4 gap-2">
          <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            Scroll to see more
          </span>
          <span className="text-blue-500 animate-bounce">→</span>
        </div>

        {/* Infinite scroll container */}
        <div className="overflow-hidden relative pt-6 pb-6">
          <div
            className="flex gap-8"
            style={{
              animation: 'scroll 20s linear infinite',
              width: 'max-content',
            }}
            onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
          >
            {/* Render projects twice for seamless loop */}
            {[...projects, ...projects].map((project, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-80 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 ${
                  darkMode
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="w-full h-48 rounded-t-2xl overflow-hidden bg-gray-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className={`text-sm mb-4 leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-500 ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <Code2 size={16} />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-500 ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;