import { useLanguage } from "../context/LanguageContext";

const heroText = {
  en: {
    greeting: "Hello, I'm Sainbayar",
    profession: "Web Developer",
    cta: "View My Work"
  },
  mn: {
    greeting: "Сайн байна уу, би Сайнбаяр",
    profession: "Вэб хөгжүүлэгч",
    cta: "Миний төслүүд"
  }
};

const Home = () => {
  const { language } = useLanguage();
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
        {heroText[language].greeting}
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-200">
        {heroText[language].profession}
      </h2>
      <a
        href="#projects"
        className="px-6 py-3 rounded-2xl bg-accent text-white hover:bg-primary transition-colors duration-200 shadow-soft font-medium text-lg"
      >
        {heroText[language].cta}
      </a>
    </section>
  );
};

export default Home;
