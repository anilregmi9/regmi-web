import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectsSection";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Projects;
