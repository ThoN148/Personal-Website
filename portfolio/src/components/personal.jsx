import { useTheme } from "../themecontext";
import { Music, Gamepad2, Palette, UtensilsCrossed, Sun, Moon, Film, TvMinimalPlay } from "lucide-react";
import StarBackground from "./background";

const Personal = () => {
  const { darkMode, toggleTheme } = useTheme();

  const hobbies = [
    {
      icon: <Gamepad2 size={28} />,
      title: "Gaming",
      description: "Currently enjoying...",
      items: ["Tomodachi Life", "Pokemon", "LoL"],
    },
    {
      icon: <Music size={28} />,
      title: "Music",
      description: "Some of my favorites!",
      items: ["Laufey", "Set it off", "Epic: The Musical", "YENA"],
    },
    {
      icon: <Palette size={28} />,
      title: "Art & Drawing",
      description: "Some ways I show my creativities",
      items: ["3D Modeling", "Pixel Art", "Sketches"],
    },
    {
      icon: <UtensilsCrossed size={28} />,
      title: "Cooking",
      description: "My favorite meals to make",
      items: ["Soondubu Jjigae", "Japanese Curry", "Miso Soup"],
    },
    {
      icon: <Film size={28} />,
      title: "Films",
      description: "Enjoyable films I've recently",
      items: ["Hopper", "Invincible", "Abbott Elementary"],
    },
    {
      icon: <TvMinimalPlay size={28} />,
      title: "Animes",
      description: "My top animes!",
      items: ["Dungeon Meshi", "Your lie in April", "Fairy Tail"],
    },    
  ];

  const photos = [
    "/personal1.JPG",
    "/personal2.JPG",
    "/personal3.png",
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <StarBackground />
        <div
        className="min-h-screen"
        style={{
            background: darkMode
            ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #1a1a2e 100%)"
            : "linear-gradient(135deg, #fff8f0 0%, #ffecd2 40%, #fff0e6 100%)",
            color: darkMode ? "white" : "#1a1a1a",
        }}
        >
        {/* Floating blobs for warmth */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div
            className="absolute rounded-full opacity-20 blur-3xl"
            style={{
                background: darkMode ? "#ff6b6b" : "#ffb347",
                width: "400px",
                height: "400px",
                top: "-100px",
                right: "-100px",
            }}
            />
            <div
            className="absolute rounded-full opacity-20 blur-3xl"
            style={{
                background: darkMode ? "#feca57" : "#ff6b6b",
                width: "300px",
                height: "300px",
                bottom: "100px",
                left: "-50px",
            }}
            />
            <div
            className="absolute rounded-full opacity-10 blur-3xl"
            style={{
                background: darkMode ? "#ff9ff3" : "#ffd700",
                width: "250px",
                height: "250px",
                top: "50%",
                right: "20%",
            }}
            />
        </div>

        {/* Navbar */}
        <nav className="fixed w-full z-40 bg-transparent">
            <div className="w-full px-8">
            <div className="flex items-center justify-between h-16">

                {/* Back to Portfolio */}
                <a
                href="/"
                className="text-blue-500 hover:text-blue-400 transition-colors font-medium"
                >
                ← Portfolio
                </a>

                {/* Theme Toggle */}
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

            </div>
            </div>
        </nav>

        {/* Page Content */}
        <section className="relative z-10 py-24 px-4">
            <div className="max-w-5xl mx-auto">

            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Beyond <span className="text-blue-500">Work</span>
            </h2>
            <p className={`text-center mb-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`} style={{ marginBottom: '20px' }}>
                A glimpse into who I am outside of work!
            </p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-16 rounded-full" />

            {/* Hobbies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                {hobbies.map(({ icon, title, description, items }) => (
                <div
                    key={title}
                    className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 ${
                    darkMode
                        ? "bg-gray-800/50 border-gray-700"
                        : "bg-gray-50 border-gray-200"
                    }`}
                    
                >
                    <div className="text-blue-500 mb-4">{icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className={`text-sm mb-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`} style={{ marginBottom: '20px' }}>
                    {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                        <span
                        key={item}
                        className={`px-3 py-1 rounded-full text-sm ${
                            darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
                        }`}
                        
                        >
                        {item}
                        </span>
                    ))}
                    </div>
                </div>
                ))}
            </div>

            {/* Photo Gallery */}
            <h3 className="text-2xl font-bold text-center mb-8">
                Photo <span className="text-blue-500">Gallery</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                <div
                    key={index}
                    className={`rounded-2xl overflow-hidden h-48 ${
                    darkMode ? "bg-gray-800 border border-gray-700" : "bg-gray-100 border border-gray-200"
                    }`}
                >
                    <img
                    src={photo}
                    alt={`Personal ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                ))}
            </div>

            </div>
        </section>
        </div>
    </div>
  );
};

export default Personal;