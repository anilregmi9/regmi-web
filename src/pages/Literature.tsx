import Navigation from "@/components/Navigation";
import LiteratureSection from "@/components/LiteratureSection";

const Literature = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <LiteratureSection />
      </div>
    </div>
  );
};

export default Literature;
