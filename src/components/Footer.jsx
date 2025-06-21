import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  return (
    <footer className="w-full py-6 mt-12 bg-background dark:bg-background-dark text-center text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700">
      <div className="flex justify-center gap-4 mb-2">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
        <a href="mailto:youremail@example.com" className="hover:text-primary transition-colors">Email</a>
      </div>
      <div>
        &copy; {new Date().getFullYear()} {language === "en" ? "All rights reserved." : "Бүх эрх хуулиар хамгаалагдсан."}
      </div>
    </footer>
  );
};

export default Footer;
