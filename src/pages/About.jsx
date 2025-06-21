import { useLanguage } from "../context/LanguageContext";

const bio = {
  en: "Hi! I'm Sainbayar, a passionate web developer focused on building modern, responsive, and accessible web applications.",
  mn: "Сайн байна уу! Би Сайнбаяр, орчин үеийн, хариу үйлдэлтэй, хүртээмжтэй вэб аппликейшн бүтээхэд анхаардаг вэб хөгжүүлэгч."
};

const About = () => {
  const { language } = useLanguage();
  return (
    <section
      className="max-w-3xl mx-auto py-16 px-4 flex flex-col items-center text-center"
    >
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full mb-6 shadow-soft object-cover"
      />
      <h2 className="text-3xl font-bold mb-4 text-primary">
        {language === "en" ? "About Me" : "Миний тухай"}
      </h2>
      <p className="text-lg text-slate-700 dark:text-slate-300 max-w-xl">
        {bio[language]}
      </p>
    </section>
  );
};

export default About;
