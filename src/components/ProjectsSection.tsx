import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, FlaskConical } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Disaster Induced Land Use Plan",
      location: "Dullu Municipality",
      description: "Conducted comprehensive geological hazard assessment and developed land use planning recommendations to mitigate disaster risks.",
      tags: ["Hazard Assessment", "Land Use Planning", "GIS Mapping"],
      image: "🏔️"
    },
    {
      title: "Copper Exploration Project",
      location: "Western Nepal",
      description: "Led geological mapping and mineral zonation for copper exploration, including geophysical surveys and core drilling operations.",
      tags: ["Mineral Exploration", "Geological Mapping", "Resource Estimation"],
      image: "⛏️"
    },
    {
      title: "Hydropower Geotechnical Investigation",
      location: "Nilakantha Municipality",
      description: "Provided geotechnical assessment for hydropower development, including slope stability analysis and foundation recommendations.",
      tags: ["Geotechnical", "Hydropower", "Slope Stability"],
      image: "⚡"
    }
  ];

  const researchProjects = [
    "Prospecting and exploration of copper deposit around Bhimshenthan area, Kavrepalanchowk",
    "Prospecting and exploration of lead and zinc deposit around Marma-1, Darchula",
    "Prospecting of Iron ore around Sungarkhal, Baitadi; Panini, Arghakhanchi; Rambha, Palpa and Chandrakot, Gulmi",
    "Preliminary study of Iron copper ore around Nisikhola, Baglung; Bhutkhola, Tanahu",
    "Detailed study of Slate deposit around Tarakhola, Baglung"
  ];

  const galleryImages = [
    {
      title: "Sedimentary rock formation with clear geological layering",
      image: "/lovable-uploads/fe17806d-449d-47de-9770-624ee16505aa.png"
    },
    {
      title: "Refreshment during the educational tour for geological study around Tansen area.",
      image: "/lovable-uploads/a3b0539f-dc52-4b74-9763-fa7da52dce02.png"
    },
    {
      title: "Stratified rock sample showing geological layers",
      image: "/lovable-uploads/1a70a124-966e-4aa9-8d69-b99bb8919bb9.png"
    },
    {
      title: "Colorful mineral specimen with blue and pink mineralization",
      image: "/lovable-uploads/670305a6-f0b0-42d9-a94e-0a5c04cf78aa.png"
    },
    {
      title: "Detailed geological specimen with surface textures",
      image: "/lovable-uploads/c94bbc8f-0931-42c9-be20-5e057e6b6710.png"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my key geological projects and field expeditions across Nepal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-soft hover:shadow-earth transition-all duration-300 group">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-earth-brown to-earth-orange rounded-lg mb-4 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{project.location}</span>
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Section */}
        <div className="border-t border-border pt-20 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <FlaskConical className="w-8 h-8 text-primary" />
              Projects Led by Me
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Research and exploration projects I have led across Nepal.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <ol className="space-y-4">
                  {researchProjects.map((project, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <p className="text-muted-foreground pt-1">{project}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-border pt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Photo Gallery</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visual documentation of my work across various geological projects, field expeditions, and research activities throughout Nepal.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Badge variant="secondary">Field Expeditions</Badge>
              <Badge variant="secondary">Geological Samples</Badge>
              <Badge variant="secondary">Geological Mapping</Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="shadow-soft hover:shadow-earth transition-all duration-300 group overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{image.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">View All Photos</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;