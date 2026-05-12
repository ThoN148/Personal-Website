import { useTheme } from "../themecontext";
import { Sun, Moon } from "lucide-react";
import StarBackground from "../components/background";

const data = {
  gaming: {
    title: "Gaming 🎮",
    description: "Games I'm currently enjoying or have loved!",
    items: [
      { name: "Tomodachi Life", genre: "Life Sim", image: "/games/tomodachi.jpg" },
      { name: "Pokemon", genre: "RPG", image: "/games/pokemon.jpg" },
      { name: "League of Legends", genre: "MOBA", image: "/games/lol.jpg" },
    ],
  },
  music: {
    title: "Music 🎵",
    description: "Artists and bands I have on repeat!",
    items: [
      { name: "Laufey", genre: "Jazz Pop", image: "/music/laufey.jpg" },
      { name: "Set It Off", genre: "Pop Rock", image: "/music/setitoff.jpg" },
      { name: "Epic: The Musical", genre: "Musical", image: "/music/epic.jpg" },
      { name: "YENA", genre: "K-Pop", image: "/music/yena.jpg" },
    ],
  },
  art: {
    title: "Art & Drawing 🎨",
    description: "Ways I express my creativity!",
    items: [
      { name: "3D Modeling", genre: "Digital", image: "/art/3d.jpg" },
      { name: "Pixel Art", genre: "Digital", image: "/art/pixel.jpg" },
      { name: "Sketches", genre: "Traditional", image: "/art/sketch.jpg" },
    ],
  },
  films: {
    title: "Films 🎬",
    description: "Movies and shows I've been enjoying!",
    items: [
      { name: "Hopper", genre: "Drama", image: "/films/hopper.jpg" },
      { name: "Invincible", genre: "Action", image: "/films/invincible.jpg" },
      { name: "Abbott Elementary", genre: "Comedy", image: "/films/abbott.jpg" },
    ],
  },
  anime: {
    title: "Anime 🍜",
    description: "My all-time favorite anime!",
    items: [
      { name: "Dungeon Meshi", genre: "Fantasy", image: "/anime/dungeon.jpg" },
      { name: "Your Lie in April", genre: "Romance", image: "/anime/ylia.jpg" },
      { name: "Fairy Tail", genre: "Shounen", image: "/anime/fairytail.jpg" },
    ],
  },
};

const PersonalV1 = () => {
  const { darkMode, toggleTheme } = useTheme();

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

      <div className="relative z-10 pt-24 pb-16 px-4 max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-4">
          Beyond <span className="text-blue-500">Work</span>
        </h1>
        <p className={`text-center mb-16 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
          A peek into who I am outside of code 🌟
        </p>

        {/* Each section */}
        {Object.values(data).map((section) => (
          <div key={section.title} className="mb-20">

            {/* Section Header */}
            <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
            <p className={`text-sm mb-6 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              {section.description}
            </p>
            <div className="w-12 h-1 bg-blue-500 mb-8 rounded-full" />

            {/* Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 ${
                    darkMode ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <div className="w-full h-36 bg-gray-700 overflow-hidden">
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
        ))}

        {/* Cookbook Button */}
        <div className="flex justify-center mt-4">
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

export default PersonalV1;