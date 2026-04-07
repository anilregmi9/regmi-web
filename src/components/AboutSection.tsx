import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Hammer, Search, Compass, Navigation, GraduationCap, Calendar, Code, Users, CalendarDays, MapPin, ChevronDown, Magnet } from "lucide-react";

const AboutSection = () => {
  const [isBruntonDialogOpen, setIsBruntonDialogOpen] = useState(false);
  const [isHammerDialogOpen, setIsHammerDialogOpen] = useState(false);
  const [isLensDialogOpen, setIsLensDialogOpen] = useState(false);
  const [isGpsDialogOpen, setIsGpsDialogOpen] = useState(false);
  const [isMagneticPenDialogOpen, setIsMagneticPenDialogOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<"education" | "experience" | "expertise" | null>(null);
  const [partnerOpen, setPartnerOpen] = useState(false);

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
    },
    {
      degree: "High School (+2) Science (Mathematics, Physics, Chemistry)",
      institution: "Roshani English Boarding School, Putalibazar-1, Syangja",
      year: "2013",
      description: "Science stream with Mathematics, Physics and Chemistry"
    },
    {
      degree: "Primary & Secondary School",
      institution: "Roshani English Boarding School, Putalibazar-1, Syangja",
      year: "1999–2011",
      description: "Primary and secondary level education"
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
      title: "Lecturer",
      company: "Kathmandu Engineering College",
      location: "Nepal",
      period: "2017 - 2019",
      description: "Delivered comprehensive lectures in Engineering Geology, covering physical geology, petrology, structural geology, and Himalayan geology with emphasis on engineering applications.",
      highlights: [
        "Guided practical sessions on mineral and rock identification, geological map interpretation, preparation of cross-sections, and block diagram analysis",
        "Taught advanced engineering geology topics including rock mass classification, stereographic projection, and structural data interpretation using stereonets, rose diagrams, and histograms",
        "Conducted hands-on training in engineering geological mapping, borehole log analysis, weathering profile interpretation, and estimation of construction material reserves",
        "Led fieldwork activities at road, highway, and hydropower project sites, focusing on geological data collection, hydrogeology, geohazard mapping, site selection, and hazard mitigation"
      ]
    },
    {
      title: "President",
      company: "Nepal Geological Student's Society (NGSS)",
      location: "Nepal",
      period: "2019 - 2020",
      description: "Led the Nepal Geological Student's Society, organizing academic events, workshops, and field trips.",
      highlights: [
        "Organized geological seminars and educational workshops",
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
            Born and raised in Syangja, a small town in central Nepal, I am a geologist passionate about the exploration and sustainable development of mineral resources.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <img 
              src="/lovable-uploads/field-map-reading.jpg" 
              alt="Anil Regmi reading a geological map in the field" 
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="grid grid-cols-2 gap-4">
            <Card 
              className="shadow-soft cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
              onClick={() => setIsHammerDialogOpen(true)}
            >
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <img src="/lovable-uploads/tool-hammer.jpg" alt="Geological Hammer" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <span className="text-sm font-medium text-white">Geological Hammer</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card 
              className="shadow-soft cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
              onClick={() => setIsLensDialogOpen(true)}
            >
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <img src="/lovable-uploads/tool-handlens.jpg" alt="Hand Lens" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <span className="text-sm font-medium text-white">Hand Lens</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card 
              className="shadow-soft cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
              onClick={() => setIsBruntonDialogOpen(true)}
            >
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <img src="/lovable-uploads/tool-brunton.jpg" alt="Brunton Compass" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <span className="text-sm font-medium text-white">Brunton Compass</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card 
              className="shadow-soft cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
              onClick={() => setIsGpsDialogOpen(true)}
            >
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <img src="/lovable-uploads/tool-gps.jpg" alt="GPS Tracker" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <span className="text-sm font-medium text-white">GPS Tracker</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card 
              className="shadow-soft cursor-pointer hover:shadow-lg transition-shadow overflow-hidden col-span-2"
              onClick={() => setIsMagneticPenDialogOpen(true)}
            >
              <CardContent className="p-0">
                <div className="aspect-[2/1] relative">
                  <img src="/lovable-uploads/tool-magnetic-pen.jpg" alt="Magnetic Pen" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <span className="text-sm font-medium text-white">Magnetic Pen</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I hold a Master's degree in Geology from Tribhuvan University, Nepal, and have developed a strong foundation in earth sciences through both academic study and extensive fieldwork. Currently, I am working in Australia as a logging geologist, focusing on geological logging and subsurface data interpretation. My primary interest lies in the exploration of metallic minerals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I have gained diverse experience across multiple geological disciplines, including prospecting and exploration of metallic minerals, as well as geotechnical investigations for major infrastructure projects such as hydropower development, road construction, and mining activities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I have also worked as a field hydrogeologist in the foreland basin of the Nepal Himalaya, where I started my career. There, I conducted borehole drilling, analysis of groundwater conditions, water table assessment, transmissivity evaluation, and pump testing, along with slug tests for aquifer characterization. Additionally, I have worked as a freelance geologist on disaster risk assessments related to landslides and earthquakes. With a strong combination of technical expertise, field adaptability, and analytical skills, I aim to continue growing in the mining and exploration sector.
            </p>

            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Card 
                className={`shadow-soft cursor-pointer transition-all ${activeSection === 'education' ? 'ring-2 ring-primary' : 'hover:shadow-lg'}`}
                onClick={() => setActiveSection(activeSection === 'education' ? null : 'education')}
              >
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-primary mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground mb-2">Master's in Geology from Tribhuvan University</p>
                  <ChevronDown className={`w-5 h-5 mx-auto text-muted-foreground transition-transform ${activeSection === 'education' ? 'rotate-180' : ''}`} />
                </CardContent>
              </Card>
              <Card 
                className={`shadow-soft cursor-pointer transition-all ${activeSection === 'experience' ? 'ring-2 ring-primary' : 'hover:shadow-lg'}`}
                onClick={() => setActiveSection(activeSection === 'experience' ? null : 'experience')}
              >
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-primary mb-2">Experience</h3>
                  <p className="text-sm text-muted-foreground mb-2">Mineral exploration and geotechnical investigations</p>
                  <ChevronDown className={`w-5 h-5 mx-auto text-muted-foreground transition-transform ${activeSection === 'experience' ? 'rotate-180' : ''}`} />
                </CardContent>
              </Card>
              <Card 
                className={`shadow-soft cursor-pointer transition-all ${activeSection === 'expertise' ? 'ring-2 ring-primary' : 'hover:shadow-lg'}`}
                onClick={() => setActiveSection(activeSection === 'expertise' ? null : 'expertise')}
              >
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-primary mb-2">Expertise</h3>
                  <p className="text-sm text-muted-foreground mb-2">Metallic mineral exploration and mapping</p>
                  <ChevronDown className={`w-5 h-5 mx-auto text-muted-foreground transition-transform ${activeSection === 'expertise' ? 'rotate-180' : ''}`} />
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

            {/* Photo after education */}
            <div className="mt-10 max-w-2xl mx-auto">
              <Card className="shadow-soft overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src="/lovable-uploads/anil-school.jpg" 
                    alt="Anil Regmi delivering a speech at school" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-muted-foreground italic">Delivering a speech at a school event in Syangja</p>
                </CardContent>
              </Card>
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

        {/* Partner Section - Collapsible */}
        <div className="mt-16">
          <div 
            className="p-6 rounded-2xl bg-accent/5 border border-accent/20 cursor-pointer hover:bg-accent/10 transition-colors"
            onClick={() => setPartnerOpen(!partnerOpen)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl md:text-3xl font-bold text-center flex-1">Manju Shree Thakur — My Partner & The Heart of My Journey</h3>
              <ChevronDown className={`w-6 h-6 text-muted-foreground transition-transform flex-shrink-0 ${partnerOpen ? 'rotate-180' : ''}`} />
            </div>
          </div>
          {partnerOpen && (
            <div className="mt-4 p-8 rounded-2xl bg-accent/5 border border-accent/20 animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <img
                  src="/lovable-uploads/manjushree.jpg"
                  alt="Anil and Manju Shree"
                  className="w-full h-64 rounded-xl object-cover shadow-lg"
                />
                <img
                  src="/lovable-uploads/manjushree-wedding1.jpg"
                  alt="Anil and Manju Shree - Wedding moment"
                  className="w-full h-64 rounded-xl object-cover shadow-lg"
                />
                <img
                  src="/lovable-uploads/manjushree-wedding2.jpg"
                  alt="Anil and Manju Shree - Wedding ceremony"
                  className="w-full h-64 rounded-xl object-cover shadow-lg"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
                We first met at Trichandra Campus in Kathmandu, where a simple connection quietly grew into something lifelong. From those early days to our marriage on 12th February 2024, every step has felt meaningful with her by my side. Now in Sydney, she continues to inspire me as she pursues her Master's in Research, driven by her passion for environmental science and her vision for a better world. She is not only incredibly intelligent and dedicated, but also truly beautiful — inside and out. Life with her feels like a story still unfolding, and I'm grateful for every chapter we write together.
              </p>
            </div>
          )}
        </div>
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

      {/* Magnetic Pen Dialog */}
      <Dialog open={isMagneticPenDialogOpen} onOpenChange={setIsMagneticPenDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogTitle className="sr-only">Magnetic Pen</DialogTitle>
          <img 
            src="/lovable-uploads/tool-magnetic-pen.jpg" 
            alt="Magnetic Pen - A tool used to test the magnetic properties of minerals and rocks in the field"
            className="w-full h-auto rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AboutSection;