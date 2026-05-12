import { useTheme } from "../themecontext";
import { Sun, Moon, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import StarBackground from "../components/background";

const recipes = [
  {
    id: 1,
    name: "Recipe Name One",
    description: "A short description of this dish.",
    prepTime: "15 mins",
    cookTime: "30 mins",
    servings: "4",
    ingredients: [
      "Ingredient 1",
      "Ingredient 2",
      "Ingredient 3",
      "Ingredient 4",
      "Ingredient 5",
    ],
    steps: [
      "Step one of the recipe instructions go here.",
      "Step two of the recipe instructions go here.",
      "Step three of the recipe instructions go here.",
      "Step four of the recipe instructions go here.",
    ],
    image: "/food1.jpg",
  },
  {
    id: 2,
    name: "Recipe Name Two",
    description: "A short description of this dish.",
    prepTime: "20 mins",
    cookTime: "45 mins",
    servings: "2",
    ingredients: [
      "Ingredient 1",
      "Ingredient 2",
      "Ingredient 3",
      "Ingredient 4",
      "Ingredient 5",
    ],
    steps: [
      "Step one of the recipe instructions go here.",
      "Step two of the recipe instructions go here.",
      "Step three of the recipe instructions go here.",
      "Step four of the recipe instructions go here.",
    ],
    image: "/food2.jpg",
  },
  {
    id: 3,
    name: "Recipe Name Three",
    description: "A short description of this dish.",
    prepTime: "10 mins",
    cookTime: "20 mins",
    servings: "6",
    ingredients: [
      "Ingredient 1",
      "Ingredient 2",
      "Ingredient 3",
      "Ingredient 4",
      "Ingredient 5",
    ],
    steps: [
      "Step one of the recipe instructions go here.",
      "Step two of the recipe instructions go here.",
      "Step three of the recipe instructions go here.",
      "Step four of the recipe instructions go here.",
    ],
    image: "/food3.jpg",
  },
];

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
        ? "flipNext 0.6s ease-in-out"
        : "flipPrev 0.6s ease-in-out"
      : "none",
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-amber-50 text-gray-900"
      }`}
    >
      <StarBackground />

      {/* CSS Animations */}
      <style>{`
        @keyframes flipNext {
          0%   { transform: perspective(1200px) rotateY(0deg); opacity: 1; }
          50%  { transform: perspective(1200px) rotateY(-90deg); opacity: 0.3; }
          100% { transform: perspective(1200px) rotateY(0deg); opacity: 1; }
        }
        @keyframes flipPrev {
          0%   { transform: perspective(1200px) rotateY(0deg); opacity: 1; }
          50%  { transform: perspective(1200px) rotateY(90deg); opacity: 0.3; }
          100% { transform: perspective(1200px) rotateY(0deg); opacity: 1; }
        }
        .book-shadow {
          filter: drop-shadow(0 30px 40px rgba(0,0,0,0.4));
        }
        .page-curl-next::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 40px;
          height: 40px;
          background: linear-gradient(225deg, #f59e0b 45%, transparent 45%);
          border-radius: 0 0 4px 0;
          cursor: pointer;
          transition: all 0.3s;
        }
        .page-curl-next:hover::after {
          width: 60px;
          height: 60px;
        }
        .page-curl-prev::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 40px;
          background: linear-gradient(315deg, #f59e0b 45%, transparent 45%);
          border-radius: 0 0 0 4px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .page-curl-prev:hover::before {
          width: 60px;
          height: 60px;
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed w-full z-40 px-8 h-16 flex items-center justify-between">
        <a
          href="/personal"
          className="text-blue-500 hover:text-blue-400 transition-colors font-medium"
        >
          ← Back
        </a>
        <button
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

      {/* Main */}
      <div className="min-h-screen flex flex-col items-center justify-center pt-16 pb-12 px-4">

        {/* Book Title */}
        <h1 className="text-2xl font-bold text-amber-500 mb-2">
          📖 Tho's Cookbook
        </h1>
        <p className={`text-sm mb-8 ${darkMode ? "text-gray-400" : "text-amber-700"}`}>
          Recipe {currentRecipe + 1} of {recipes.length}
        </p>

        {/* Book */}
        <div className="book-shadow w-full max-w-3xl" style={pageStyle}>
          <div
            className="relative grid grid-cols-2 rounded-2xl overflow-hidden"
            style={{
              minHeight: "500px",
              boxShadow: darkMode
                ? "0 0 0 3px #333, 8px 8px 30px rgba(0,0,0,0.6)"
                : "0 0 0 3px #d97706, 8px 8px 30px rgba(0,0,0,0.3)",
            }}
          >
            {/* Book spine */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-1 z-10"
              style={{
                background: darkMode
                  ? "linear-gradient(to right, #000, #333, #000)"
                  : "linear-gradient(to right, #92400e, #d97706, #92400e)",
                transform: "translateX(-50%)",
              }}
            />

            {/* Left Page — Image + Ingredients */}
            <div
              className={`relative p-6 flex flex-col page-curl-prev`}
              style={{
                background: darkMode ? "#1e1e2e" : "#fffbf5",
              }}
              onClick={goPrev}
            >
              {/* Food Image */}
              <div className="w-full h-44 rounded-xl overflow-hidden mb-4 bg-gray-700 flex-shrink-0">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-lg font-bold text-amber-500 mb-1">
                {recipe.name}
              </h2>
              <p
                className={`text-xs mb-3 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {recipe.description}
              </p>

              {/* Quick Info */}
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
                      className={`text-xs mt-0.5 ${
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
                🧂 Ingredients
              </h3>
              <ul className="flex flex-col gap-1.5">
                {recipe.ingredients.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2 text-xs ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <span className="text-amber-500 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Page number */}
              <p
                className={`text-xs text-right mt-auto pt-4 ${
                  darkMode ? "text-gray-600" : "text-amber-300"
                }`}
              >
                pg. {currentRecipe * 2 + 1}
              </p>
            </div>

            {/* Right Page — Instructions */}
            <div
              className="relative p-6 flex flex-col page-curl-next"
              style={{
                background: darkMode ? "#1a1a2e" : "#fff9f0",
              }}
              onClick={goNext}
            >
              <h3
                className={`font-semibold text-sm mb-4 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                👨‍🍳 Instructions
              </h3>
              <ol className="flex flex-col gap-4">
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

              {/* Decorative divider */}
              <div
                className="mt-auto pt-4"
                style={{
                  borderTop: darkMode
                    ? "1px dashed #333"
                    : "1px dashed #e5c99a",
                }}
              >
                <p
                  className={`text-xs italic text-center ${
                    darkMode ? "text-gray-600" : "text-amber-400"
                  }`}
                >
                  Enjoy your meal! 🍽️
                </p>
              </div>

              {/* Page number */}
              <p
                className={`text-xs mt-2 ${
                  darkMode ? "text-gray-600" : "text-amber-300"
                }`}
              >
                pg. {currentRecipe * 2 + 2}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8 mt-8">
          <button
            onClick={goPrev}
            disabled={currentRecipe === 0 || flipping}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              currentRecipe === 0
                ? "opacity-30 cursor-not-allowed"
                : "hover:-translate-x-1"
            } ${
              darkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-amber-100 text-amber-900 hover:bg-amber-200"
            }`}
          >
            <ChevronLeft size={18} />
            Previous
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {recipes.map((_, i) => (
              <button
                key={i}
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
            onClick={goNext}
            disabled={currentRecipe === recipes.length - 1 || flipping}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
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
          className={`text-xs mt-4 ${
            darkMode ? "text-gray-600" : "text-amber-400"
          }`}
        >
          💡 Click the page corners to flip too!
        </p>
      </div>
    </div>
  );
};

export default Cooking;