import { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleTheme} className="card__button card__button--toggle">
      {darkMode ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

export default ThemeToggle;
