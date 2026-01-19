import Navigation from "@/components/Navigation";
import PhotosSection from "@/components/PhotosSection";

const Photos = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <PhotosSection />
      </div>
    </div>
  );
};

export default Photos;
