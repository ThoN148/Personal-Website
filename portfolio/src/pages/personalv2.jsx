import { useTheme } from "../themecontext";
import { Sun, Moon, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import StarBackground from "../components/background";

const data = {
  gaming: {
    emoji: "🎮",
    title: "Gaming",
    description: "Games I'm currently enjoying or have loved!",
    items: [
      { name: "Tomodachi Life", genre: "Life Sim", image: "/games/tomodachi.jpg" },
      { name: "Pokemon", genre: "RPG", image: "/games/pokemon.jpg" },
      { name: "League of Legends", genre: "MOBA", image: "/games/lol.jpg" },
    ],
  },
  music: {
    emoji: "🎵",
    title: "Music",
    description: "Artists and bands I have on repeat!",
    items: [
      { name: "Laufey", genre: "Jazz Pop", image: "/music/laufey.jpg" },
      { name: "Set It Off", genre: "Pop Rock", image: "/music/setitoff.jpg" },
      { name: "Epic: The Musical", genre: "Musical", image: "/music/epic.jpg" },
      { name: "YENA", genre: "K-Pop", image: "/music/yena.jpg" },
    ],
  },
  art: {
    emoji: "🎨",
    title: "Art & Drawing",
    description: "Ways I express my creativity!",
    items: [
      { name: "3D Modeling", genre: "Digital", image: "/art/3d.jpg" },
      { name: "Pixel Art", genre: "Digital", image: "/art/pixel.jpg" },
      { name: "Sketches", genre: "Traditional", image: "/art/sketch.jpg" },
    ],
  },
  films: {
    emoji: "🎬",
    title: "Films & Shows",
    description: "Movies and shows I've been enjoying!",
    items: [
      { name: "Hopper", genre: "Drama", image: "/films/hopper.jpg" },
      { name: "Invincible", genre: "Action", image: "/films/invincible.jpg" },
      { name: "Abbott Elementary", genre: "Comedy", image: "/films/abbott.jpg" },
    ],
  },
  anime: {
    emoji: "🍜",
    title: "Anime",
    description: "My all-time favorite anime!",
    items: [
      { name: "Dungeon Meshi", genre: "Fantasy", image: "/anime/dungeon.jpg" },
      { name: "Your Lie in April", genre: "Romance", image: "/anime/ylia.jpg" },
      { name: "Fairy Tail", genre: "Shounen", image: "/anime/fairytail.jpg" },
    ],
  },
};

const PersonalV2 = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [expanded, setExpanded] = useState(null);

  const toggle = (key) => setExpanded(expanded === key ? null : key);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <StarBackground />

      {/* Navbar */}
      <nav className="fixed w-full z-40 px-8 h-16 flex items-center justify-between">
        <a href="/personal" className="text-blue-500 hover:text-blue-400 font-medium transition-colors">
          ← Back
        </a>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors ${darkMode ? "bg-gray-800 text-yellow-400" : "bg-gray-200 text-gray-800"}`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      <div className="relative z-10 pt-24 pb-16 px-4 max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-4">
          Beyond <span className="text-blue-500">Work</span>
        </h1>
        <p className={`text-center mb-12 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
          A peek into who I am outside of code 🌟
        </p>

        <div className="flex flex-col gap-4">
          {Object.entries(data).map(([key, section]) => (
            <div
              key={key}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                darkMode ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-200"
              } ${expanded === key ? "border-blue-500" : ""}`}
            >
              {/* Header — click to expand */}
              <button
                onClick={() => toggle(key)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{section.emoji}</span>
                  <div>
                    <h2 className="text-xl font-bold">{section.title}</h2>
                    <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                      {section.description}
                    </p>
                  </div>
                </div>
                {expanded === key
                  ? <ChevronUp className="text-blue-500" size={20} />
                  : <ChevronDown className={darkMode ? "text-gray-400" : "text-gray-500"} size={20} />
                }
              </button>

              {/* Expanded Content */}
              {expanded === key && (
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-blue-500/30 mb-6" />
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {section.items.map((item) => (
                      <div
                        key={item.name}
                        className={`rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 ${
                          darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-200"
                        }`}
                      >
                        <div className="w-full h-32 bg-gray-600 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-3">
                          <p className="font-semibold text-sm">{item.name}</p>
                          <p className={`text-xs mt-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            {item.genre}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cookbook Button */}
        <div className="flex justify-center mt-12">
          <a
            href="/cooking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-colors text-lg hover:-translate-y-1 duration-300"
          >
            📖 View My Cookbook
          </a>
        </div>

      </div>
    </div>
  );
};

export default PersonalV2;