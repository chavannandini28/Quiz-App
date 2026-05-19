import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [category, setCategory] =
    useState("sports");

  const [darkMode, setDarkMode] =
    useState(false);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");

    const isDark =
      document.body.classList.contains("dark");

    localStorage.setItem(
      "theme",
      isDark ? "dark" : "light"
    );

    setDarkMode(isDark);
  };

  const startQuiz = () => {
    localStorage.setItem("category", category);
    navigate("/quiz");
  };

  return (
    <div className="container">
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {darkMode
            ? "☀ Light Mode"
            : "🌙 Dark Mode"}
        </button>
      </div>

      <h1>Quiz Master 🎯</h1>

      <div className="select-box">
        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option value="sports">
            ⚽ Sports
          </option>

          <option value="grammar">
            📘 Grammar
          </option>

          <option value="webdevelopment">
            💻 Web Development
          </option>

          <option value="movies">
            🎬 Movies
          </option>

          <option value="gk">
            🌍 General Knowledge
          </option>

          <option value="programming">
            🧠 Programming
          </option>
        </select>
      </div>

      <button
        className="start-btn"
        onClick={startQuiz}
      >
        Start Quiz 🚀
      </button>
    </div>
  );
};

export default Home;