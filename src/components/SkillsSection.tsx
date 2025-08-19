import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Target } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      description: "My technical expertise is focused on metallic mineral exploration, geological mapping, and geotechnical investigations to support mining and infrastructure development projects in challenging terrains.",
      skills: [
        "Adobe Photoshop",
        "ArcGIS",
        "Geological Mapping",
        "Mineral Exploration",
        "Geotechnical Investigations",
        "Core Drilling",
        "Reserve Estimation",
        "Illustrator",
        "AutoCAD",
        "Geophysical Surveys",
        "Hydrogeological Studies",
        "Hazard Assessment"
      ]
    },
    {
      title: "Professional Skills",
      icon: Users,
      description: "I excel in leading field teams, managing exploration projects, and coordinating with stakeholders including government agencies, local communities, and project partners to ensure successful outcomes.",
      skills: [
        "Team Leadership",
        "Fieldwork Management",
        "Project Coordination",
        "Technical Report Writing",
        "Problem-Solving",
        "Communication",
        "Regulatory Compliance",
        "Stakeholder Management"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I continuously develop my skills through practical field experience and staying updated with the latest techniques and technologies in geological exploration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="shadow-earth">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-2xl text-primary">{category.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-earth-cream text-earth-brown-dark hover:bg-earth-brown hover:text-earth-cream transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;