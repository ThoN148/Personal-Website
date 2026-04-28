import { useTheme } from "./themecontext"
import StarBackground from "./components/background"

function App() {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <StarBackground />
      <button onClick={toggleTheme} className="p-4">
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <h1 className="text-4xl p-8">My Portfolio</h1>
    </div>
  )
}

export default App