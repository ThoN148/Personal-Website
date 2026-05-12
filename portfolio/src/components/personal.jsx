import { useState } from "react";
import { useTheme } from "../themecontext";
import {
  Music,
  Gamepad2,
  Palette,
  UtensilsCrossed,
  Sun,
  Moon,
  Film,
  TvMinimalPlay,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import StarBackground from "./background";

const Personal = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [activeId, setActiveId] = useState("gaming");

  const hobbies = [
    {
      id: "gaming",
      icon: <Gamepad2 size={28} />,
      title: "Gaming",
      description:
        "Games I keep coming back to — mostly cozy RPGs and the occasional competitive session.",
      tags: ["Tomodachi Life", "Pokémon", "League of Legends"],
      highlights: [
        {
          name: "Tomodachi Life",
          blurb: "Island life sim — weird humor, great soundtrack, zero stress.",
        },
        {
          name: "Pokémon",
          blurb: "Team-building, routes, and shiny hunting when I have the patience.",
        },
        {
          name: "League of Legends",
          blurb: "Squad nights and ARAM when I want something faster-paced.",
        },
      ],
      links: [
        { label: "Steam", href: "https://store.steampowered.com/" },
        { label: "Pokémon Home", href: "https://home.pokemon.com/" },
      ],
    },
    {
      id: "music",
      icon: <Music size={28} />,
      title: "Music",
      description: "What’s usually in my headphones while I work or commute.",
      tags: ["Laufey", "Set It Off", "Epic: The Musical", "YENA"],
      highlights: [
        { name: "Laufey", blurb: "Jazz-pop that feels like a warm drink." },
        { name: "Set It Off", blurb: "High-energy pop rock for focus sprints." },
        {
          name: "Epic: The Musical",
          blurb: "Storytelling and hooks that never get old.",
        },
        { name: "YENA", blurb: "K-pop with attitude — great for a mood reset." },
      ],
      links: [{ label: "Spotify", href: "https://open.spotify.com/" }],
    },
    {
      id: "art",
      icon: <Palette size={28} />,
      title: "Art & drawing",
      description: "How I unwind from screens — still messy, still fun.",
      tags: ["3D modeling", "Pixel art", "Sketches"],
      highlights: [
        { name: "3D modeling", blurb: "Blocking shapes and lighting studies in Blender." },
        { name: "Pixel art", blurb: "Tiny canvases, limited palettes, big nostalgia." },
        { name: "Sketches", blurb: "Traditional pencil when I want something tactile." },
      ],
      links: [],
    },
    {
      id: "cooking",
      icon: <UtensilsCrossed size={28} />,
      title: "Cooking",
      description:
        "Comfort food I make on repeat — full write-ups live in my cookbook page.",
      tags: ["Soondubu jjigae", "Japanese curry", "Miso soup"],
      highlights: [
        {
          name: "Soondubu jjigae",
          blurb: "Soft tofu stew — spicy, savory, weeknight friendly.",
        },
        {
          name: "Japanese curry",
          blurb: "Roux-based curry with whatever veg is in the fridge.",
        },
        { name: "Miso soup", blurb: "Quick dashi, miso, and simple toppings." },
      ],
      links: [{ label: "Open cookbook", href: "/cooking", internal: true }],
    },
    {
      id: "films",
      icon: <Film size={28} />,
      title: "Films & TV",
      description: "Recent watches that stuck with me.",
      tags: ["Hopper", "Invincible", "Abbott Elementary"],
      highlights: [
        { name: "Hopper", blurb: "Character drama that pulled me in." },
        { name: "Invincible", blurb: "Superhero story with real emotional weight." },
        {
          name: "Abbott Elementary",
          blurb: "Warm, sharp comedy — perfect palette cleanser.",
        },
      ],
      links: [],
    },
    {
      id: "anime",
      icon: <TvMinimalPlay size={28} />,
      title: "Anime",
      description: "A mix of classics and newer favorites.",
      tags: ["Dungeon Meshi", "Your Lie in April", "Fairy Tail"],
      highlights: [
        {
          name: "Dungeon Meshi",
          blurb: "Fantasy, food, and clever problem-solving.",
        },
        {
          name: "Your Lie in April",
          blurb: "Music, youth, and all the feelings.",
        },
        { name: "Fairy Tail", blurb: "Shounen comfort food — found family energy." },
      ],
      links: [{ label: "Crunchyroll", href: "https://www.crunchyroll.com/" }],
    },
  ];

  const active = hobbies.find((h) => h.id === activeId) ?? hobbies[0];

  const photos = ["/personal1.JPG", "/personal2.JPG", "/personal3.png"];

  const cardBase = darkMode
    ? "bg-gray-800/50 border-gray-700"
    : "bg-gray-50 border-gray-200";

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
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
        <style>{`
          @keyframes hobbyFadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
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

        <nav className="fixed w-full z-40 bg-transparent">
          <div className="w-full px-8">
            <div className="flex items-center justify-between h-16">
              <a
                href="/"
                className="text-blue-500 hover:text-blue-400 transition-colors font-medium"
              >
                ← Portfolio
              </a>
              <button
                type="button"
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

        <section className="relative z-10 py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Beyond <span className="text-blue-500">work</span>
            </h2>
            <p
              className={`text-center mb-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
              style={{ marginBottom: "20px" }}
            >
              A glimpse into who I am outside of work — tap a hobby to see more.
            </p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-10 rounded-full" />

            {/* Hobby picker — compact cards */}
            <div className="flex gap-3 overflow-x-auto pb-2 mb-8 -mx-1 px-1 snap-x snap-mandatory md:flex-wrap md:overflow-visible">
              {hobbies.map((h) => {
                const selected = h.id === activeId;
                return (
                  <button
                    key={h.id}
                    type="button"
                    onClick={() => setActiveId(h.id)}
                    className={`snap-start shrink-0 flex items-center gap-2 rounded-2xl border px-4 py-3 text-left transition-all duration-300 min-w-[140px] md:min-w-0 ${
                      selected
                        ? "border-blue-500 shadow-md -translate-y-0.5 ring-2 ring-blue-500/30"
                        : `hover:-translate-y-0.5 hover:border-blue-500/60 ${cardBase}`
                    } ${selected && darkMode ? "bg-gray-800/80" : ""} ${
                      selected && !darkMode ? "bg-white/90" : ""
                    }`}
                  >
                    <span className="text-blue-500">{h.icon}</span>
                    <span className="text-sm font-semibold whitespace-nowrap">{h.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active hobby detail */}
            <div
              key={active.id}
              className={`rounded-2xl p-6 md:p-8 border transition-all duration-300 mb-16 ${cardBase}`}
              style={{ animation: "hobbyFadeIn 0.35s ease-out" }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="flex-1 min-w-0">
                  <div className="text-blue-500 mb-3">{active.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{active.title}</h3>
                  <p
                    className={`text-sm leading-relaxed mb-5 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                  >
                    {active.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {active.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {active.links.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {active.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          {...(l.internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            darkMode
                              ? "bg-blue-600/20 text-blue-300 hover:bg-blue-600/30"
                              : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                          }`}
                        >
                          {l.label}
                          {l.internal ? (
                            <ChevronRight size={16} />
                          ) : (
                            <ExternalLink size={14} className="opacity-80" />
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div
                  className={`flex-1 min-w-0 rounded-xl border p-4 md:p-5 ${
                    darkMode ? "border-gray-600 bg-gray-900/40" : "border-gray-200 bg-white/60"
                  }`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-wide mb-3 ${
                      darkMode ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    Highlights
                  </p>
                  <ul className="space-y-4">
                    {active.highlights.map((item) => (
                      <li key={item.name}>
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p
                          className={`text-sm mt-0.5 leading-relaxed ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {item.blurb}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-8">
              Photo <span className="text-blue-500">gallery</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {photos.map((photo, index) => (
                <div
                  key={photo}
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
