import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Geologist (Consultant)",
      company: "Marakat Consult Pvt. Ltd.",
      location: "Nepal",
      period: "August 2023 - present",
      description: "Providing consultation services for a wide range of geological and geotechnical investigations related to mining operations and engineering projects, including hydropower, road construction, and infrastructure development. Additionally, offering expert advice and support in the areas of mineral exploration, reserve estimation, and geotechnical assessments.",
      highlights: [
        "Expert consultation for mining operations and engineering projects",
        "Mineral exploration, reserve estimation, and geotechnical assessments",
        "Hazard assessment and slope stability analysis for disaster risk management",
        "Develop mitigation plans for safer and more resilient project designs"
      ]
    },
    {
      title: "Geologist",
      company: "Nepal Jindu Mining Pvt. Ltd.",
      location: "Nepal",
      period: "July 2021 - August 2023",
      description: "My exploration work in Nepal focuses primarily on metallic minerals, particularly copper, iron, lead, and zinc. I am involved in a wide range of technical activities including detailed geological mapping, mineral zonation mapping, and geophysical surveys such as Electrical Resistivity Tomography (ERT) and Seismic Refraction Tomography (SRT).",
      highlights: [
        "Conducted detailed geological mapping and mineral zonation for copper, iron, lead, and zinc exploration",
        "Performed geophysical surveys including ERT and SRT",
        "Managed core drilling, trenching, and pitting operations for geotechnical investigations",
        "Coordinated with government authorities for licensing and compliance"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my geological career and key contributions to mineral exploration and infrastructure development.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-earth">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-primary">{exp.title}</CardTitle>
                    <h3 className="text-xl font-semibold text-foreground mt-2">{exp.company}</h3>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CalendarDays className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Responsibilities:</h4>
                  <div className="grid gap-2">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;