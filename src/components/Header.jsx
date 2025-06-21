import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { id: "home", en: "Home", mn: "Нүүр" },
  { id: "about", en: "About", mn: "Тухай" },
  { id: "projects", en: "Projects", mn: "Төслүүд" },
  { id: "contact", en: "Contact", mn: "Холбоо барих" },
];

const Header = ({ onThemeToggle, theme }) => {
  const { language } = useLanguage();
  return (
    <header className="sticky top-0 z-50 bg-background dark:bg-background-dark shadow-soft transition-colors">
      <nav className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4">
        <div className="font-bold text-xl text-primary">Portfolio</div>
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-accent transition-colors duration-200 font-medium"
              >
                {link[language]}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            onClick={onThemeToggle}
            className="px-3 py-1 rounded-2xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 shadow-soft hover:bg-primary hover:text-white dark:hover:bg-accent transition-colors duration-200"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Header;
