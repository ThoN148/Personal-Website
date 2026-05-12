import { useTheme } from "../themecontext";
import { ExternalLink, Code2 } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const Projects = () => {
  const { darkMode } = useTheme();
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const lastInteractionRef = useRef(null);
  const positionRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

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
    {
      title: "Intelligent Pathfinding & Game AI",
      description: "A collection of AI and pathfinding algorithms including a reinforcement learning Pac-Man agent, an optimized A* pathfinding engine with configurable heuristics, and a minimax Connect Four AI with alpha-beta pruning.",
      tags: ["Python", "Reinforcement Learning", "A*", "Minimax", "Alpha-Beta Pruning", "Jupyter"],
      github: "https://github.com/ThoN148/AI-Training.git",
      live: "",
      image: "/project3.png",
    },
    {
      title: "Personal Portfolio Website",
      description: "A responsive personal portfolio website built from scratch to showcase my projects, skills, and experience. Features a space-themed animated background, dark/light mode toggle, and a separate personal page.",
      tags: ["React", "TailwindCSS", "Vite", "Vercel"],
      github: "https://github.com/ThoN148/Personal-Website.git",
      live: "",
      image: "/project4.png",
    },
    {
      title: "Computer Network Protocols",
      description: "A low-level networking project implementing custom UDP/TCP stacks with congestion control and error detection, a multi-algorithm routing simulation engine, and Wireshark-based diagnostic tooling for protocol validation. Source code available upon request.",
      tags: ["C", "UDP", "TCP", "Wireshark", "Networking"],
      github: "",
      live: "",
      image: "/project5.png",
    },
    {
      title: "FPGA Blackjack Game",
      description: "A fully functional blackjack game implemented on an FPGA board using Verilog, utilizing onboard pins and switches for user input and hardware-level display output. Source code available upon request.",
      tags: ["Verilog", "FPGA", "Hardware", "Digital Logic"],
      github: "",
      live: "",
      image: "/project6.png",
    },
    {
      title: "Sound-Detecting Robot",
      description: "An embedded robotics system built on the MSP432 microcontroller using microphones and op-amp signal amplification to capture audio, applying ADC sampling and DSP algorithms to locate the sound source and drive the robot toward it in real time. Source code available upon request.",
      tags: ["C", "MSP432", "Embedded Systems", "DSP", "Robotics"],
      github: "",
      live: "",
      image: "/project7.png",
    },
  ];

  // Duplicate for seamless loop
  const extendedProjects = [...projects, ...projects];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const RESUME_DELAY = 3000;
    const SCROLL_SPEED = 1;
    let isTouching = false;

    const tick = () => {
      const timeSinceInteraction = Date.now() - (lastInteractionRef.current || 0);

      if (timeSinceInteraction > RESUME_DELAY && !isTouching) {
        setIsPaused(false);
        positionRef.current += SCROLL_SPEED;

        // Seamless loop — reset at halfway point since we duplicated projects
        if (positionRef.current >= el.scrollWidth / 2) {
          positionRef.current = 0;
        }

        el.scrollLeft = positionRef.current;
      }

      animationRef.current = requestAnimationFrame(tick);
    };

    const handleMouseEnter = () => {
      positionRef.current = el.scrollLeft;
      lastInteractionRef.current = Date.now();
      setIsPaused(true);
    };

    const handleMouseLeave = () => {
      lastInteractionRef.current = Date.now();
    };

    const handleTouchStart = () => {
      isTouching = true;
      positionRef.current = el.scrollLeft;
      lastInteractionRef.current = Date.now();
      setIsPaused(true);
    };

    const handleTouchEnd = () => {
      isTouching = false;
      setTimeout(() => {
        positionRef.current = el.scrollLeft;
        lastInteractionRef.current = Date.now();
      }, 500);
    };

    const handleWheel = () => {
      positionRef.current = el.scrollLeft;
      lastInteractionRef.current = Date.now();
      setIsPaused(true);
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchend", handleTouchEnd, { passive: true });
    el.addEventListener("wheel", handleWheel, { passive: true });

    animationRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationRef.current);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-16 rounded-full" />

        {/* Status hint */}
        <div className="flex justify-end mb-4">
          <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            {isPaused ? "Scroll freely →" : "Auto scrolling..."}
          </span>
        </div>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-6 pt-6"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-x",
          }} 
        >
          {extendedProjects.map((project, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-80 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="w-full h-48 overflow-hidden bg-gray-700 rounded-t-2xl">
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
                }`} style={{ marginBottom: '20px' }}>
                  {project.description}
                  
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
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
                  )}
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
    </section>
  );
};

export default Projects;