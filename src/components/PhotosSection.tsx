import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, FolderOpen, ArrowLeft, X } from "lucide-react";

interface PhotoAlbum {
  title: string;
  description: string;
  coverImage: string;
  photoCount: number;
  photos?: string[];
}

const PhotosSection = () => {
  const [searchParams] = useSearchParams();
  const [selectedAlbum, setSelectedAlbum] = useState<PhotoAlbum | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const photoAlbums: PhotoAlbum[] = [
    {
      title: "Palpa Field Work – Trichandra Campus 2070",
      description: "Geological field work at Palpa district with Trichandra Campus batch of 2070 BS",
      coverImage: "/lovable-uploads/palpa-fieldwork-1.jpg",
      photoCount: 22,
      photos: [
        "/lovable-uploads/palpa-fieldwork-1.jpg",
        "/lovable-uploads/palpa-fieldwork-2.jpg",
        "/lovable-uploads/palpa-fieldwork-3.jpg",
        "/lovable-uploads/palpa-fieldwork-4.jpg",
        "/lovable-uploads/palpa-fieldwork-5.jpg",
        "/lovable-uploads/palpa-fieldwork-6.jpg",
        "/lovable-uploads/palpa-fieldwork-7.jpg",
        "/lovable-uploads/palpa-fieldwork-8.jpg",
        "/lovable-uploads/palpa-fieldwork-9.jpg",
        "/lovable-uploads/palpa-fieldwork-10.jpg",
        "/lovable-uploads/palpa-fieldwork-11.jpg",
        "/lovable-uploads/palpa-fieldwork-12.jpg",
        "/lovable-uploads/palpa-fieldwork-13.jpg",
        "/lovable-uploads/palpa-fieldwork-14.jpg",
        "/lovable-uploads/palpa-fieldwork-15.jpg",
        "/lovable-uploads/palpa-fieldwork-16.jpg",
        "/lovable-uploads/palpa-fieldwork-17.jpg",
        "/lovable-uploads/palpa-fieldwork-18.jpg",
        "/lovable-uploads/palpa-fieldwork-19.jpg",
        "/lovable-uploads/palpa-fieldwork-20.jpg",
        "/lovable-uploads/palpa-fieldwork-21.jpg",
        "/lovable-uploads/palpa-fieldwork-22.jpg",
      ]
    },
    {
      title: "Geophysical Investigation of Barpak Landslide",
      description: "ERT survey and landslide investigation at Barpak, Gorkha – Earthquake Smarak site",
      coverImage: "/lovable-uploads/barpak-1.jpg",
      photoCount: 10,
      photos: [
        "/lovable-uploads/barpak-1.jpg",
        "/lovable-uploads/barpak-2.jpg",
        "/lovable-uploads/barpak-3.jpg",
        "/lovable-uploads/barpak-4.jpg",
        "/lovable-uploads/barpak-5.jpg",
        "/lovable-uploads/barpak-6.jpg",
        "/lovable-uploads/barpak-7.jpg",
        "/lovable-uploads/barpak-8.jpg",
        "/lovable-uploads/barpak-9.jpg",
        "/lovable-uploads/barpak-10.jpg",
      ]
    },
    {
      title: "Kathmandu–Kyirong Highway Landslide Research",
      description: "Landslide characteristics and distribution at the Kathmandu Kyirong Highway Corridor",
      coverImage: "/lovable-uploads/kyirong-3.jpg",
      photoCount: 8,
      photos: [
        "/lovable-uploads/kyirong-1.jpg",
        "/lovable-uploads/kyirong-2.jpg",
        "/lovable-uploads/kyirong-3.jpg",
        "/lovable-uploads/kyirong-4.jpg",
        "/lovable-uploads/kyirong-5.jpg",
        "/lovable-uploads/kyirong-6.jpg",
        "/lovable-uploads/kyirong-7.jpg",
        "/lovable-uploads/kyirong-8.jpg",
      ]
    },
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

  useEffect(() => {
    const albumParam = searchParams.get("album");
    if (albumParam === "palpa") {
      const palpaAlbum = photoAlbums.find(a => a.title.includes("Palpa"));
      if (palpaAlbum) setSelectedAlbum(palpaAlbum);
    } else if (albumParam === "barpak") {
      const barpakAlbum = photoAlbums.find(a => a.title.includes("Barpak"));
      if (barpakAlbum) setSelectedAlbum(barpakAlbum);
    }
  }, [searchParams]);

  if (selectedAlbum && selectedAlbum.photos && selectedAlbum.photos.length > 0) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedAlbum(null)}
            className="flex items-center gap-2 text-primary hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Albums
          </button>
          <h1 className="text-3xl font-bold mb-2">{selectedAlbum.title}</h1>
          <p className="text-muted-foreground mb-8">{selectedAlbum.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedAlbum.photos.map((photo, index) => (
              <div
                key={index}
                className="aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setLightboxImage(photo)}
              >
                <img
                  src={photo}
                  alt={`${selectedAlbum.title} - Photo ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {lightboxImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={lightboxImage}
              alt="Full view"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </section>
    );
  }

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
              onClick={() => album.photos && album.photos.length > 0 ? setSelectedAlbum(album) : undefined}
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
