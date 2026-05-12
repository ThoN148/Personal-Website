import { useTheme } from "../themecontext";
import { Sun, Moon, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import StarBackground from "../components/background";

const recipes = [
  {
    id: 1,
    name: "Soondubu jjigae",
    description:
      "Korean soft tofu stew — spicy broth, silky tofu, and whatever protein you like.",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: "2",
    ingredients: [
      "1 pack soft (silken) tofu",
      "2–3 cups unsalted chicken or anchovy-kelp broth",
      "1–2 tbsp gochugaru (Korean chili flakes), to taste",
      "1 tbsp gochujang (optional, for extra heat)",
      "3–4 cloves garlic, minced",
      "½ small onion, sliced",
      "2 green onions, chopped (white and green separated)",
      "4–6 oz thinly sliced pork belly or beef (or mushrooms for veg)",
      "1 egg (optional, cracked in at the end)",
      "1 tsp sesame oil, toasted sesame seeds to finish",
    ],
    steps: [
      "Bring broth to a gentle simmer in a small stone or heavy pot.",
      "Stir in gochugaru, optional gochujang, garlic, onion, and the white parts of the green onion. Simmer 2–3 minutes.",
      "Add protein; cook until mostly done, then break soft tofu in large spoonfuls directly into the pot.",
      "Simmer 5–8 minutes without over-stirring so the tofu stays in clouds.",
      "Taste and adjust salt or spice. Crack an egg on top if you like; drizzle sesame oil, scatter green tops and sesame seeds, and serve bubbling hot with rice.",
    ],
    image: null,
  },
  {
    id: 2,
    name: "Japanese curry (roux)",
    description:
      "Weeknight curry from store-bought roux — comforting with potatoes and carrots.",
    prepTime: "15 mins",
    cookTime: "40 mins",
    servings: "4",
    ingredients: [
      "1 box Japanese curry roux (use half or full per package directions)",
      "1 lb chicken thighs or beef, cut into bites",
      "2 medium potatoes, peeled and chunked",
      "2 carrots, chunked",
      "1 large onion, sliced",
      "4–5 cups water (adjust per roux package)",
      "Neutral oil for browning",
      "Steamed rice, fukujinzuke pickles (optional)",
    ],
    steps: [
      "Brown meat in oil; add onions and cook until softened.",
      "Add potatoes and carrots, pour in water, bring to a boil, then simmer until vegetables are fork-tender.",
      "Turn off heat. Break curry roux blocks into the pot; stir until dissolved.",
      "Simmer on low, stirring often, until thick enough to coat a spoon. Rest 5 minutes off heat, then serve over rice.",
    ],
    image: null,
  },
  {
    id: 3,
    name: "Miso soup",
    description: "Quick home-style miso soup — light, savory, easy to customize.",
    prepTime: "10 mins",
    cookTime: "10 mins",
    servings: "2",
    ingredients: [
      "2 cups dashi (from granules or homemade kombu + bonito)",
      "2–3 tbsp miso (awase or white), to taste",
      "3 oz silken tofu, cubed",
      "2 tbsp wakame (dried), rehydrated",
      "1 green onion, sliced",
      "Optional: aburaage strips, mushrooms, or spinach",
    ],
    steps: [
      "Heat dashi until steaming but not at a rolling boil (boiling can muddy miso flavor).",
      "Add any firm vegetables or mushrooms; simmer until tender. Add tofu and wakame; warm through.",
      "Ladle a little hot dashi into a bowl with miso; whisk until smooth, then stir back into the pot (never boil after miso goes in).",
      "Taste and adjust miso. Top with green onion and serve immediately.",
    ],
    image: null,
  },
];

function RecipeCoverImage({ src, alt, darkMode }) {
  const [broken, setBroken] = useState(!src);

  if (!src || broken) {
    return (
      <div
        className="w-full h-44 md:h-48 rounded-xl overflow-hidden mb-4 flex-shrink-0 flex items-center justify-center text-5xl select-none"
        style={{
          background: darkMode
            ? "linear-gradient(135deg, #2a2a3e 0%, #1e1e2e 100%)"
            : "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
        }}
        aria-hidden
      >
        🍜
      </div>
    );
  }

  return (
    <div className="w-full h-44 md:h-48 rounded-xl overflow-hidden mb-4 flex-shrink-0 bg-gray-700">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={() => setBroken(true)}
      />
    </div>
  );
}

const Cooking = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [currentRecipe, setCurrentRecipe] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState(null);

  const goNext = () => {
    if (currentRecipe < recipes.length - 1 && !flipping) {
      setFlipDirection("next");
      setFlipping(true);
      setTimeout(() => {
        setCurrentRecipe((p) => p + 1);
        setFlipping(false);
        setFlipDirection(null);
      }, 600);
    }
  };

  const goPrev = () => {
    if (currentRecipe > 0 && !flipping) {
      setFlipDirection("prev");
      setFlipping(true);
      setTimeout(() => {
        setCurrentRecipe((p) => p - 1);
        setFlipping(false);
        setFlipDirection(null);
      }, 600);
    }
  };

  const recipe = recipes[currentRecipe];

  const pageStyle = {
    animation: flipping
      ? flipDirection === "next"
        ? "cookFlipNext 0.6s ease-in-out"
        : "cookFlipPrev 0.6s ease-in-out"
      : "none",
    transformStyle: "preserve-3d",
  };

  const leftPageBg = darkMode ? "#1e1e2e" : "#fffbf5";
  const rightPageBg = darkMode ? "#1a1a2e" : "#fff9f0";

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-amber-50 text-gray-900"
      }`}
    >
      <StarBackground />

      <style>{`
        @keyframes cookFlipNext {
          0%   { transform: perspective(1200px) rotateY(0deg); opacity: 1; }
          50%  { transform: perspective(1200px) rotateY(-90deg); opacity: 0.35; }
          100% { transform: perspective(1200px) rotateY(0deg); opacity: 1; }
        }
        @keyframes cookFlipPrev {
          0%   { transform: perspective(1200px) rotateY(0deg); opacity: 1; }
          50%  { transform: perspective(1200px) rotateY(90deg); opacity: 0.35; }
          100% { transform: perspective(1200px) rotateY(0deg); opacity: 1; }
        }
        .book-shadow {
          filter: drop-shadow(0 30px 40px rgba(0,0,0,0.4));
        }
      `}</style>

      <nav className="fixed w-full z-40 px-4 sm:px-8 h-16 flex items-center justify-between bg-transparent">
        <a
          href="/personal"
          className="text-blue-500 hover:text-blue-400 transition-colors font-medium"
        >
          ← Back
        </a>
        <button
          type="button"
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors ${
            darkMode
              ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
              : "bg-amber-200 text-gray-800 hover:bg-amber-300"
          }`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      <div className="min-h-screen flex flex-col items-center pt-20 pb-12 px-4">
        <h1 className="text-2xl font-bold text-amber-500 mb-2 text-center">
          Tho&apos;s cookbook
        </h1>
        <p className={`text-sm mb-6 text-center ${darkMode ? "text-gray-400" : "text-amber-700"}`}>
          Recipe {currentRecipe + 1} of {recipes.length}
        </p>

        <div className="book-shadow w-full max-w-3xl" style={pageStyle}>
          <div
            className="relative flex flex-col md:grid md:grid-cols-2 rounded-2xl overflow-hidden"
            style={{
              minHeight: "min(70vh, 560px)",
              boxShadow: darkMode
                ? "0 0 0 3px #333, 8px 8px 30px rgba(0,0,0,0.6)"
                : "0 0 0 3px #d97706, 8px 8px 30px rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 z-10 pointer-events-none"
              style={{
                background: darkMode
                  ? "linear-gradient(to right, #000, #333, #000)"
                  : "linear-gradient(to right, #92400e, #d97706, #92400e)",
                transform: "translateX(-50%)",
              }}
            />

            {/* Left page */}
            <div
              className="relative p-5 sm:p-6 flex flex-col min-h-0 overflow-y-auto"
              style={{ background: leftPageBg }}
            >
              <RecipeCoverImage
                key={`${recipe.id}-${recipe.image ?? ""}`}
                src={recipe.image}
                alt={recipe.name}
                darkMode={darkMode}
              />

              <h2 className="text-lg font-bold text-amber-500 mb-1">{recipe.name}</h2>
              <p
                className={`text-xs mb-3 leading-relaxed ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {recipe.description}
              </p>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { label: "Prep", value: recipe.prepTime },
                  { label: "Cook", value: recipe.cookTime },
                  { label: "Serves", value: recipe.servings },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-lg p-2 text-center"
                    style={{
                      background: darkMode ? "#2a2a3e" : "#fef3c7",
                    }}
                  >
                    <p className="text-amber-500 font-bold text-xs">{label}</p>
                    <p
                      className={`text-xs mt-0.5 leading-tight ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <h3
                className={`font-semibold text-sm mb-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Ingredients
              </h3>
              <ul className="flex flex-col gap-1.5 pb-2">
                {recipe.ingredients.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2 text-xs leading-relaxed ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <span className="text-amber-500 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p
                className={`text-xs text-right mt-auto pt-4 ${
                  darkMode ? "text-gray-600" : "text-amber-600/80"
                }`}
              >
                pg. {currentRecipe * 2 + 1}
              </p>

              <button
                type="button"
                aria-label="Previous recipe"
                disabled={currentRecipe === 0 || flipping}
                onClick={goPrev}
                className={`hidden md:flex absolute bottom-3 left-3 z-20 w-10 h-10 rounded-full items-center justify-center transition-opacity ${
                  currentRecipe === 0 ? "opacity-25 cursor-not-allowed" : "opacity-90 hover:opacity-100"
                } ${darkMode ? "bg-gray-800 text-amber-400" : "bg-amber-100 text-amber-900"}`}
              >
                <ChevronLeft size={20} />
              </button>
            </div>

            {/* Mobile spine between pages */}
            <div
              className="md:hidden h-1 w-full shrink-0"
              style={{
                background: darkMode
                  ? "linear-gradient(to right, #000, #333, #000)"
                  : "linear-gradient(to right, #92400e, #d97706, #92400e)",
              }}
            />

            {/* Right page */}
            <div
              className="relative p-5 sm:p-6 flex flex-col min-h-0 overflow-y-auto"
              style={{ background: rightPageBg }}
            >
              <h3
                className={`font-semibold text-sm mb-4 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Instructions
              </h3>
              <ol className="flex flex-col gap-3 sm:gap-4 flex-1">
                {recipe.steps.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs">
                      {i + 1}
                    </span>
                    <p
                      className={`text-xs leading-relaxed pt-0.5 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {step}
                    </p>
                  </li>
                ))}
              </ol>

              <div
                className="mt-auto pt-4"
                style={{
                  borderTop: darkMode ? "1px dashed #333" : "1px dashed #e5c99a",
                }}
              >
                <p
                  className={`text-xs italic text-center ${
                    darkMode ? "text-gray-600" : "text-amber-600/90"
                  }`}
                >
                  Enjoy your meal!
                </p>
              </div>

              <p
                className={`text-xs mt-2 ${darkMode ? "text-gray-600" : "text-amber-600/80"}`}
              >
                pg. {currentRecipe * 2 + 2}
              </p>

              <button
                type="button"
                aria-label="Next recipe"
                disabled={currentRecipe === recipes.length - 1 || flipping}
                onClick={goNext}
                className={`hidden md:flex absolute bottom-3 right-3 z-20 w-10 h-10 rounded-full items-center justify-center transition-opacity ${
                  currentRecipe === recipes.length - 1
                    ? "opacity-25 cursor-not-allowed"
                    : "opacity-90 hover:opacity-100"
                } ${darkMode ? "bg-gray-800 text-amber-400" : "bg-amber-100 text-amber-900"}`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-8">
          <button
            type="button"
            onClick={goPrev}
            disabled={currentRecipe === 0 || flipping}
            className={`flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full font-medium transition-all text-sm sm:text-base ${
              currentRecipe === 0 ? "opacity-30 cursor-not-allowed" : "hover:-translate-x-1"
            } ${
              darkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-amber-100 text-amber-900 hover:bg-amber-200"
            }`}
          >
            <ChevronLeft size={18} />
            Previous
          </button>

          <div className="flex gap-2 order-last sm:order-none w-full sm:w-auto justify-center">
            {recipes.map((_, i) => (
              <button
                key={recipes[i].id}
                type="button"
                aria-label={`Go to recipe ${i + 1}`}
                onClick={() => {
                  if (!flipping && i !== currentRecipe) {
                    setFlipDirection(i > currentRecipe ? "next" : "prev");
                    setFlipping(true);
                    setTimeout(() => {
                      setCurrentRecipe(i);
                      setFlipping(false);
                      setFlipDirection(null);
                    }, 600);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentRecipe
                    ? "bg-amber-500 w-6"
                    : darkMode
                      ? "bg-gray-600 w-2"
                      : "bg-amber-200 w-2"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            disabled={currentRecipe === recipes.length - 1 || flipping}
            className={`flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full font-medium transition-all text-sm sm:text-base ${
              currentRecipe === recipes.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "hover:translate-x-1"
            } ${
              darkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-amber-100 text-amber-900 hover:bg-amber-200"
            }`}
          >
            Next
            <ChevronRight size={18} />
          </button>
        </div>

        <p
          className={`text-xs mt-4 text-center max-w-md leading-relaxed ${
            darkMode ? "text-gray-600" : "text-amber-700/80"
          }`}
        >
          Use the buttons to change recipes. On wide screens, the small arrows on each page do the
          same. When you add food photos to your public folder, set the image field on each recipe
          in this page’s data to the file path.
        </p>
      </div>
    </div>
  );
};

export default Cooking;
