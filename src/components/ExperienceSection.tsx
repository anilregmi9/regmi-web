import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const professionalExperiences = [
    {
      title: "Geologist (Contract)",
      company: "Munro Geological Services",
      location: "New South Wales, Australia · On-site",
      period: "March 2026 - Present",
      description: "Working as a contractor geologist at Cowal gold operations. Logging grade control, resource definition and discovery holes, with a focus on accurate geological data capture and subsurface interpretation.",
      highlights: [
        "Geological logging of grade control, resource definition and discovery drill holes",
        "Subsurface data interpretation and quality control of logged data",
        "Supporting resource definition and near-mine discovery programs",
        "Applying geology and mineral exploration skills in a large-scale gold operation"
      ]
    },
    {
      title: "Geologist",
      company: "Marakat Consult Pvt. Ltd. / Geo Cube Pvt. Ltd.",
      location: "Nepal · Hybrid",
      period: "July 2023 - September 2025",
      description: "Providing consultation services for a wide range of geological and geotechnical investigations related to mining operations and engineering projects, including hydropower, road construction, and infrastructure development. Additionally, offering expert advice and support in the areas of mineral exploration, reserve estimation, and geotechnical assessments.",
      highlights: [
        "Expert consultation for mining operations and engineering projects",
        "Mineral exploration, reserve estimation, and geotechnical assessments",
        "Hazard assessment and slope stability analysis for disaster risk management",
        "Develop mitigation plans for safer and more resilient project designs"
      ],
      link: "https://marakat.com.np/"
    },
    {
      title: "Exploration Geologist",
      company: "Nepal Jindu Mining Pvt. Ltd.",
      location: "Maharajgunj, Kathmandu · Hybrid",
      period: "July 2021 - July 2023",
      description: "Worked as exploration geologist for the exploration of metallic minerals in Nepal. Geological logging and drilling management were the major tasks, followed by geophysical exploration (ERT, SRT and VES). The metallic minerals were mainly copper, iron, lead, cobalt and zinc, along with non-metallic deposits.",
      highlights: [
        "Conducted detailed geological mapping and mineral zonation for copper, iron, lead, cobalt and zinc exploration",
        "Performed geophysical surveys including ERT, SRT and VES",
        "Managed core drilling, trenching, and pitting operations for geotechnical investigations",
        "Coordinated with government authorities for licensing and compliance"
      ]
    },
    {
      title: "Assistant Hydrogeologist",
      company: "Janakpur Construction and Tubewell Drilling Company",
      location: "Janakpur, Nepal",
      period: "November 2017 - August 2018",
      description: "Assisted in groundwater exploration and tubewell drilling operations across the Terai region, supporting site selection, drilling supervision and aquifer assessment.",
      highlights: [
        "Groundwater exploration and tubewell site selection",
        "Supervision of drilling operations and lithological logging",
        "Aquifer and water quality assessment",
        "Problem solving and project management support in the field"
      ]
    }
  ];

  const otherExperiences = [
    {
      title: "President",
      company: "Nepal Geological Student's Society (NGSS)",
      location: "Nepal",
      period: "August 2019 - December 2020",
      description: "Led the Nepal Geological Students' Society, which works for upgrading the geology students of Nepal on different subtopics and professional works, along with helping them in academic activities.",
      highlights: [
        "Organized geological seminars and educational workshops",
        "Coordinated with universities and professional bodies",
        "Promoted geological sciences among students",
        "Managed society operations and student engagement"
      ],
      link: "https://ngss.org.np/"
    },
    {
      title: "Volunteer Member",
      company: "Survey for collecting data of earthquake damages",
      location: "Nepal",
      period: "May 2015 - June 2015",
      description: "As a volunteer, I got the chance to meet people and listen to their thoughts about the earthquake while sharing knowledge about earthquakes with them. It was a valuable opportunity to learn how to work in the field, share knowledge and raise awareness.",
      highlights: [
        "Collected field data on earthquake damage",
        "Interviewed affected residents and documented their experiences",
        "Shared earthquake awareness and safety knowledge with communities"
      ]
    }
  ];


  const renderExperienceCard = (exp: typeof professionalExperiences[0], index: number) => (
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
  );

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
          {professionalExperiences.map((exp, index) => renderExperienceCard(exp, index))}
        </div>

        {/* Other Experiences Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Other Experiences</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leadership and community involvement in geological sciences.
            </p>
          </div>

          <div className="space-y-8">
            {otherExperiences.map((exp, index) => renderExperienceCard(exp, index))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;