import { useTheme } from "../themecontext";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import StarBackground from "../components/background";

const sections = [
  {
    key: "gaming",
    emoji: "🎮",
    title: "Gaming",
    description: "Games I'm currently enjoying or have loved!",
    items: [
      { name: "Tomodachi Life", genre: "Life Sim", image: "/games/tomodachi.jpg" },
      { name: "Pokemon", genre: "RPG", image: "/games/pokemon.jpg" },
      { name: "League of Legends", genre: "MOBA", image: "/games/lol.jpg" },
    ],
  },
  {
    key: "music",
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
  {
    key: "art",
    emoji: "🎨",
    title: "Art & Drawing",
    description: "Ways I express my creativity!",
    items: [
      { name: "3D Modeling", genre: "Digital", image: "/art/3d.jpg" },
      { name: "Pixel Art", genre: "Digital", image: "/art/pixel.jpg" },
      { name: "Sketches", genre: "Traditional", image: "/art/sketch.jpg" },
    ],
  },
  {
    key: "films",
    emoji: "🎬",
    title: "Films & Shows",
    description: "Movies and shows I've been enjoying!",
    items: [
      { name: "Hopper", genre: "Drama", image: "/films/hopper.jpg" },
      { name: "Invincible", genre: "Action", image: "/films/invincible.jpg" },
      { name: "Abbott Elementary", genre: "Comedy", image: "/films/abbott.jpg" },
    ],
  },
  {
    key: "anime",
    emoji: "🍜",
    title: "Anime",
    description: "My all-time favorite anime!",
    items: [
      { name: "Dungeon Meshi", genre: "Fantasy", image: "/anime/dungeon.jpg" },
      { name: "Your Lie in April", genre: "Romance", image: "/anime/ylia.jpg" },
      { name: "Fairy Tail", genre: "Shounen", image: "/anime/fairytail.jpg" },
    ],
  },
  {
    key: "cooking",
    emoji: "🍳",
    title: "Cooking",
    description: "My favorite meals to make!",
    items: [
      { name: "Soondubu Jjigae", genre: "Korean", image: "/food1.jpg" },
      { name: "Japanese Curry", genre: "Japanese", image: "/food2.jpg" },
      { name: "Miso Soup", genre: "Japanese", image: "/food3.jpg" },
    ],
    cookbookLink: true,
  },
];

const Personal = () => {
  const theme = useTheme();
  const darkMode = theme?.darkMode ?? true;
  const toggleTheme = theme?.toggleTheme ?? (() => {});

  const [active, setActive] = useState("gaming");
  const [animating, setAnimating] = useState(false);

  const current = sections.find((s) => s.key === active);

  const switchTab = (key) => {
    if (key === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(key);
      setAnimating(false);
    }, 200);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <StarBackground />

      {/* Top Navbar */}
      <nav
        className={`fixed w-full z-40 px-8 h-16 flex items-center justify-between border-b ${
          darkMode
            ? "bg-gray-900/80 backdrop-blur-md border-gray-800"
            : "bg-white/80 backdrop-blur-md border-gray-200"
        }`}
      >
        <a
          href="/personal"
          className="text-blue-500 hover:text-blue-400 font-medium transition-colors text-sm"
        >
          ← Back
        </a>

        <h1 className="text-lg font-bold">
          Beyond <span className="text-blue-500">Work</span>
        </h1>

        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors ${
            darkMode
              ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      {/* Tab Bar — Spotify/Netflix style */}
      <div
        className={`fixed top-16 w-full z-30 border-b ${
          darkMode
            ? "bg-gray-900/90 backdrop-blur-md border-gray-800"
            : "bg-white/90 backdrop-blur-md border-gray-200"
        }`}
      >
        <div className="flex overflow-x-auto scrollbar-hide px-8">
          {sections.map((section) => (
            <button
              key={section.key}
              onClick={() => switchTab(section.key)}
              className={`flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200 ${
                active === section.key
                  ? "border-blue-500 text-blue-500"
                  : darkMode
                  ? "border-transparent text-gray-400 hover:text-white"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              <span>{section.emoji}</span>
              <span>{section.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-36 pb-16 px-8 max-w-6xl mx-auto">

        {/* Animated Content */}
        <div
          style={{
            animation: animating
              ? "none"
              : "popUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            opacity: animating ? 0 : 1,
            transform: animating ? "scale(0.95)" : "scale(1)",
            transition: "opacity 0.2s, transform 0.2s",
          }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-2">
            <span className="text-5xl">{current.emoji}</span>
            <div>
              <h2 className="text-3xl font-bold">{current.title}</h2>
              <p
                className={`text-sm mt-1 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {current.description}
              </p>
            </div>
          </div>
          <div className="w-16 h-1 bg-blue-500 rounded-full mt-4 mb-10" />

          {/* Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {current.items.map((item, index) => (
              <div
                key={item.name}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl ${
                  darkMode
                    ? "bg-gray-800/50 border-gray-700 hover:shadow-blue-500/10"
                    : "bg-gray-50 border-gray-200 hover:shadow-gray-200"
                }`}
                style={{
                  animation: `popUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.05}s both`,
                }}
              >
                <div className="w-full h-40 bg-gray-700 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p
                    className={`text-xs mt-1 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {item.genre}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Cookbook link if cooking section */}
          {current.cookbookLink && (
            <div className="flex justify-center mt-12">
              <a
                href="/cooking"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-colors text-lg hover:-translate-y-1 duration-300"
              >
                📖 View My Full Cookbook
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Pop up keyframe */}
      <style>{`
        @keyframes popUp {
          0%   { opacity: 0; transform: scale(0.92); }
          100% { opacity: 1; transform: scale(1); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Personal;