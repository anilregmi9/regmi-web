import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Hammer, Search, Compass, Navigation, GraduationCap, Calendar, Code, Users, CalendarDays, MapPin } from "lucide-react";

const AboutSection = () => {
  const [isBruntonDialogOpen, setIsBruntonDialogOpen] = useState(false);
  const [isHammerDialogOpen, setIsHammerDialogOpen] = useState(false);
  const [isLensDialogOpen, setIsLensDialogOpen] = useState(false);
  const [isGpsDialogOpen, setIsGpsDialogOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<"education" | "experience" | "expertise" | null>(null);

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

  const professionalExperiences = [
    {
      title: "Geologist (Consultant)",
      company: "Marakat Consult Pvt. Ltd./ Geo Cube Pvt. Ltd.",
      location: "Nepal",
      period: "August 2023 - August 2025",
      description: "Providing consultation services for a wide range of geological and geotechnical investigations related to mining operations and engineering projects, including hydropower, road construction, and infrastructure development.",
      highlights: [
        "Expert consultation for mining operations and engineering projects",
        "Mineral exploration, reserve estimation, and geotechnical assessments",
        "Hazard assessment and slope stability analysis for disaster risk management",
        "Develop mitigation plans for safer and more resilient project designs"
      ],
      link: "https://marakat.com.np/"
    },
    {
      title: "Geologist",
      company: "Nepal Jindu Mining Pvt. Ltd.",
      location: "Nepal",
      period: "July 2021 - August 2023",
      description: "Exploration work focused primarily on metallic minerals, particularly copper, iron, lead, and zinc.",
      highlights: [
        "Conducted detailed geological mapping and mineral zonation",
        "Performed geophysical surveys including ERT and SRT",
        "Managed core drilling, trenching, and pitting operations",
        "Coordinated with government authorities for licensing and compliance"
      ]
    }
  ];

  const otherExperiences = [
    {
      title: "President",
      company: "Nepal Geological Student's Society (NGSS)",
      location: "Nepal",
      period: "2019 - 2020",
      description: "Led the Nepal Geological Student's Society, organizing academic events, workshops, and field trips.",
      highlights: [
        "Organized geological field trips and educational workshops",
        "Coordinated with universities and professional bodies",
        "Promoted geological sciences among students"
      ],
      link: "https://ngss.org.np/"
    }
  ];

  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      description: "My technical expertise is focused on metallic mineral exploration, geological mapping, and geotechnical investigations.",
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
      description: "I excel in leading field teams, managing exploration projects, and coordinating with stakeholders.",
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
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I am a geologist engaged in the exploration of mineral resources.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="grid grid-cols-2 gap-4">
            <Card 
              className="shadow-soft cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setIsHammerDialogOpen(true)}
            >
              <CardContent className="p-4">
                <div className="aspect-square bg-earth-cream rounded-lg flex flex-col items-center justify-center gap-2">
                  <Hammer className="w-12 h-12 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Geological Hammer</span>
                </div>
              </CardContent>
            </Card>
            <Card 
              className="shadow-soft cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setIsLensDialogOpen(true)}
            >
              <CardContent className="p-4">
                <div className="aspect-square bg-earth-brown-light rounded-lg flex flex-col items-center justify-center gap-2">
                  <Search className="w-12 h-12 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Hand Lens</span>
                </div>
              </CardContent>
            </Card>
            <Card 
              className="shadow-soft cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setIsBruntonDialogOpen(true)}
            >
              <CardContent className="p-4">
                <div className="aspect-square bg-earth-orange rounded-lg flex flex-col items-center justify-center gap-2">
                  <Compass className="w-12 h-12 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Brunton Compass</span>
                </div>
              </CardContent>
            </Card>
            <Card 
              className="shadow-soft cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setIsGpsDialogOpen(true)}
            >
              <CardContent className="p-4">
                <div className="aspect-square bg-earth-stone rounded-lg flex flex-col items-center justify-center gap-2">
                  <Navigation className="w-12 h-12 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">GPS Tracker</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              My work encompasses geological, hydrogeological, and geotechnical investigations 
              supporting a wide range of engineering projects, including hydropower development, 
              road construction, mining activities, and various infrastructure works.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My career goal is to develop a sustainable metallic mining industry in Nepal while 
              contributing to efficient and environmentally responsible infrastructure development. 
              As a geologist, I aim to apply my expertise in geological, hydrogeological, and 
              geotechnical studies to support projects like hydropower, road construction, and 
              mining, ensuring both economic growth and environmental conservation.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Card 
                className={`shadow-soft cursor-pointer transition-all ${activeSection === 'education' ? 'ring-2 ring-primary' : 'hover:shadow-lg'}`}
                onClick={() => setActiveSection(activeSection === 'education' ? null : 'education')}
              >
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-primary mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">Master's in Geology from Tribhuvan University</p>
                </CardContent>
              </Card>
              <Card 
                className={`shadow-soft cursor-pointer transition-all ${activeSection === 'experience' ? 'ring-2 ring-primary' : 'hover:shadow-lg'}`}
                onClick={() => setActiveSection(activeSection === 'experience' ? null : 'experience')}
              >
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-primary mb-2">Experience</h3>
                  <p className="text-sm text-muted-foreground">Mineral exploration and geotechnical investigations</p>
                </CardContent>
              </Card>
              <Card 
                className={`shadow-soft cursor-pointer transition-all ${activeSection === 'expertise' ? 'ring-2 ring-primary' : 'hover:shadow-lg'}`}
                onClick={() => setActiveSection(activeSection === 'expertise' ? null : 'expertise')}
              >
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-primary mb-2">Expertise</h3>
                  <p className="text-sm text-muted-foreground">Metallic mineral exploration and mapping</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Education Section */}
        {activeSection === 'education' && (
          <div className="mt-12 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Education</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                My educational background has provided me with strong theoretical knowledge and practical skills in geology.
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
                        <h4 className="font-semibold text-foreground mb-2">{edu.institution}</h4>
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
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <div className="mt-12 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Professional Experience</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A comprehensive overview of my geological career and key contributions.
              </p>
            </div>
            <div className="space-y-8">
              {professionalExperiences.map((exp, index) => (
                <Card key={index} className="shadow-earth">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl text-primary">{exp.title}</CardTitle>
                        <h4 className="text-xl font-semibold text-foreground mt-2">{exp.company}</h4>
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
                      <h5 className="font-semibold text-foreground">Key Responsibilities:</h5>
                      <div className="grid gap-2">
                        {exp.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {exp.link && (
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-primary hover:underline"
                      >
                        Visit Website →
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Other Experiences */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Other Experiences</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Leadership and community involvement in geological sciences.
                </p>
              </div>
              <div className="space-y-8">
                {otherExperiences.map((exp, index) => (
                  <Card key={index} className="shadow-earth">
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl text-primary">{exp.title}</CardTitle>
                          <h4 className="text-xl font-semibold text-foreground mt-2">{exp.company}</h4>
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
                        <h5 className="font-semibold text-foreground">Key Responsibilities:</h5>
                        <div className="grid gap-2">
                          {exp.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {exp.link && (
                        <a 
                          href={exp.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block mt-4 text-primary hover:underline"
                        >
                          Visit Website →
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Expertise/Skills Section */}
        {activeSection === 'expertise' && (
          <div className="mt-12 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Skills & Expertise</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                I continuously develop my skills through practical field experience and staying updated with the latest techniques.
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
        )}
      </div>

      {/* Brunton Compass Dialog */}
      <Dialog open={isBruntonDialogOpen} onOpenChange={setIsBruntonDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogTitle className="sr-only">Brunton Compass Notes</DialogTitle>
          <img 
            src="/lovable-uploads/brunton-compass-notes.png" 
            alt="Brunton Compass - A tool used by geologists to measure directions and angles in the field"
            className="w-full h-auto rounded-lg"
          />
        </DialogContent>
      </Dialog>

      {/* Geological Hammer Dialog */}
      <Dialog open={isHammerDialogOpen} onOpenChange={setIsHammerDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogTitle className="sr-only">Geological Hammer Notes</DialogTitle>
          <img 
            src="/lovable-uploads/geological-hammer-notes.png" 
            alt="Geological Hammer - A sturdy tool used by geologists for breaking, splitting and studying rocks in the field"
            className="w-full h-auto rounded-lg"
          />
        </DialogContent>
      </Dialog>

      {/* Hand Lens Dialog */}
      <Dialog open={isLensDialogOpen} onOpenChange={setIsLensDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogTitle className="sr-only">Hand Lens Notes</DialogTitle>
          <img 
            src="/lovable-uploads/hand-lens-notes.png" 
            alt="Hand Lens - A small magnifying glass used by geologists to view minerals, fossils, and rocks closely"
            className="w-full h-auto rounded-lg"
          />
        </DialogContent>
      </Dialog>

      {/* GPS Tracker Dialog */}
      <Dialog open={isGpsDialogOpen} onOpenChange={setIsGpsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogTitle className="sr-only">GPS Tracker Notes</DialogTitle>
          <img 
            src="/lovable-uploads/gps-tracker-notes.png" 
            alt="GPS Tracker - A device used for finding your location and navigating in the field"
            className="w-full h-auto rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AboutSection;