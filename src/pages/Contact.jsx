import { useLanguage } from "../context/LanguageContext";

const contactText = {
  en: {
    title: "Contact",
    description: "Feel free to reach out via email or the form below.",
    email: "Email",
    name: "Name",
    message: "Message",
    send: "Send Message"
  },
  mn: {
    title: "Холбоо барих",
    description: "И-мэйл эсвэл доорх формоор холбогдоорой.",
    email: "И-мэйл",
    name: "Нэр",
    message: "Зурвас",
    send: "Зурвас илгээх"
  }
};

const Contact = () => {
  const { language } = useLanguage();
  return (
    <section className="max-w-xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-4 text-primary">
        {contactText[language].title}
      </h2>
      <p className="mb-6 text-slate-700 dark:text-slate-300">
        {contactText[language].description}
      </p>
      <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder={contactText[language].name}
          className="rounded-2xl border border-slate-200 dark:border-slate-700 px-4 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-soft focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          placeholder={contactText[language].email}
          className="rounded-2xl border border-slate-200 dark:border-slate-700 px-4 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-soft focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          placeholder={contactText[language].message}
          className="rounded-2xl border border-slate-200 dark:border-slate-700 px-4 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-soft focus:outline-none focus:ring-2 focus:ring-primary"
          rows={4}
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-2xl bg-primary text-white hover:bg-accent transition-colors duration-200 shadow-soft font-medium"
        >
          {contactText[language].send}
        </button>
      </form>
    </section>
  );
};

export default Contact;
