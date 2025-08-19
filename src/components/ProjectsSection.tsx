import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin } from "lucide-react";

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

  const galleryImages = [
    {
      title: "Exploration survey in the Western Nepal mountains",
      emoji: "🏔️"
    },
    {
      title: "Helicopter-assisted geological reconnaissance",
      emoji: "🚁"
    },
    {
      title: "Geological field expedition",
      emoji: "🔬"
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

          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="shadow-soft hover:shadow-earth transition-all duration-300 group overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-earth-cream to-earth-brown-light flex items-center justify-center text-4xl">
                  {image.emoji}
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