import ProjectCard from "../components/ProjectCard";
import { useLanguage } from "../context/LanguageContext";
import projects from "../data/projects";

const Projects = () => {
  const { language } = useLanguage();
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-primary text-center">
        {language === "en" ? "Projects" : "Төслүүд"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} language={language} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
