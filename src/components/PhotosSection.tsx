import { Card, CardContent } from "@/components/ui/card";
import { Camera, FolderOpen } from "lucide-react";

const PhotosSection = () => {
  const photoAlbums = [
    {
      title: "Field Expeditions",
      description: "Geological field work and expeditions across Nepal",
      coverImage: "/lovable-uploads/a3b0539f-dc52-4b74-9763-fa7da52dce02.png",
      photoCount: 0
    },
    {
      title: "Rock & Mineral Samples",
      description: "Collection of geological specimens and mineral samples",
      coverImage: "/lovable-uploads/670305a6-f0b0-42d9-a94e-0a5c04cf78aa.png",
      photoCount: 0
    },
    {
      title: "Research Activities",
      description: "Documentation of research and exploration projects",
      coverImage: "/lovable-uploads/fe17806d-449d-47de-9770-624ee16505aa.png",
      photoCount: 0
    },
    {
      title: "Landscapes & Formations",
      description: "Geological formations and landscapes",
      coverImage: "/lovable-uploads/1a70a124-966e-4aa9-8d69-b99bb8919bb9.png",
      photoCount: 0
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Camera className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A visual journey through my geological work, field expeditions, and research activities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photoAlbums.map((album, index) => (
            <Card 
              key={index} 
              className="shadow-soft hover:shadow-earth transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={album.coverImage} 
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-white text-sm">
                    <FolderOpen className="w-4 h-4" />
                    <span>{album.photoCount} photos</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                  {album.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {album.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="shadow-soft inline-block">
            <CardContent className="p-8">
              <FolderOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">More Albums Coming Soon</h3>
              <p className="text-muted-foreground">
                Additional photo albums will be added here to showcase more of my geological work.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PhotosSection;
