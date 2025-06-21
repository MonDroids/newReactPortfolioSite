import React, { useEffect } from "react";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import { LanguageProvider } from "./context/LanguageContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  const [theme, setTheme] = React.useState(() =>
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <LanguageProvider>
      <div className="bg-background dark:bg-background-dark min-h-screen flex flex-col transition-colors duration-300">
        <Header onThemeToggle={handleThemeToggle} theme={theme} />
        <main className="flex-1">
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App
