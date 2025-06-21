import { motion } from "framer-motion";

const ProjectCard = ({ project, language }) => {
  return (
    <motion.div
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-soft p-6 flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-lg duration-200"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div>
        <h3 className="text-xl font-semibold text-primary mb-2">{project.title[language]}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description[language]}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs text-slate-700 dark:text-slate-200">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-2xl bg-primary text-white hover:bg-accent transition-colors duration-200 shadow-soft text-sm"
        >
          {language === "en" ? "View Code" : "Код харах"}
        </a>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-2xl bg-accent text-white hover:bg-primary transition-colors duration-200 shadow-soft text-sm"
        >
          {language === "en" ? "Live Preview" : "Шууд үзэх"}
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

