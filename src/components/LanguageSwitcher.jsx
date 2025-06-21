import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-2xl bg-primary text-white shadow-soft hover:bg-accent transition-colors duration-200 ml-2"
      aria-label="Switch Language"
    >
      {language === "en" ? "MN" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
