import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Masters in Geology",
      institution: "Central Department of Geology, Tribhuvan University",
      year: "2019",
      description: "Specialized in mineral exploration and geological mapping techniques"
    },
    {
      degree: "Bachelor in Science",
      institution: "Tri-Chandra Multiple Campus",
      year: "2017",
      description: "Foundational studies in geology and earth sciences"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My educational background has provided me with strong theoretical knowledge and practical skills in geology, which I continue to build upon through fieldwork and professional development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-soft hover:shadow-earth transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-primary mb-2">{edu.degree}</CardTitle>
                    <h3 className="font-semibold text-foreground mb-2">{edu.institution}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Graduated: {edu.year}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;