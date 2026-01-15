import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <AboutSection />
      </div>
    </div>
  );
};

export default About;
