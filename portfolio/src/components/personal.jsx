import { useTheme } from "../themecontext";
import { Music, Gamepad2, Palette, UtensilsCrossed } from "lucide-react";

const Personal = () => {
  const { darkMode } = useTheme();

  const hobbies = [
    {
      icon: <Gamepad2 size={28} />,
      title: "Gaming",
      description: "Add your favorite games or genres here!",
      items: ["Game 1", "Game 2", "Game 3"],
    },
    {
      icon: <Music size={28} />,
      title: "Music",
      description: "Add your favorite artists or genres here!",
      items: ["Artist 1", "Artist 2", "Artist 3"],
    },
    {
      icon: <Palette size={28} />,
      title: "Art & Drawing",
      description: "Add what kind of art you make here!",
      items: ["Style 1", "Style 2", "Style 3"],
    },
    {
      icon: <UtensilsCrossed size={28} />,
      title: "Cooking",
      description: "Add your favorite dishes or cuisines here!",
      items: ["Dish 1", "Dish 2", "Dish 3"],
    },
  ];

  const funFacts = [
    "Fun fact 1 about yourself!",
    "Fun fact 2 about yourself!",
    "Fun fact 3 about yourself!",
    "Fun fact 4 about yourself!",
  ];

  const photos = [
    "/personal1.jpg",
    "/personal2.jpg",
    "/personal3.jpg",
  ];

  return (
    <section id="personal" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Beyond <span className="text-blue-500">Work</span>
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-16 rounded-full" />

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {hobbies.map(({ icon, title, description, items }) => (
            <div
              key={title}
              className={`rounded-2xl p-6 border transition-colors hover:border-blue-500 ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="text-blue-500 mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className={`text-sm mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
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

        {/* Fun Facts */}
        <h3 className="text-2xl font-bold text-center mb-8">
          Fun <span className="text-blue-500">Facts</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className={`rounded-2xl p-4 border flex items-start gap-4 ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <span className="text-blue-500 font-bold text-lg">#{index + 1}</span>
              <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {fact}
              </p>
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
              className="rounded-2xl overflow-hidden h-48 bg-gray-700"
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
  );
};

export default Personal;