import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Camera, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Disaster Induced Land Use Plan",
      location: "Dullu Municipality",
      description: "One of my major disaster-related assignments, carried out alongside a renowned expert in disaster risk reduction. The study integrated remote sensing analysis of Landsat imagery and multi-temporal change detection with systematic field verification to inventory and characterise the major landslides of the municipality. Each failure was documented for slope angle and aspect, bedding orientation and its relationship to the slope face, degree of weathering, moisture content and seepage conditions, soil classification, and the presence of pebble- and cobble-sized colluvial material within the failed mass. Engineering-geological interpretation was combined with socio-economic data on affected households, damaged infrastructure and losses incurred to produce hazard, vulnerability and risk zonation maps that directly informed the disaster-induced land use plan and settlement relocation recommendations.",
      tags: ["Hazard Assessment", "Land Use Planning", "Remote Sensing", "Landsat Imagery", "Landslide Inventory", "Risk Zonation", "GIS Mapping"],
      image: "/lovable-uploads/dullu-1.jpg",
      isImagePhoto: true,
      previewImages: ["/lovable-uploads/dullu-1.jpg", "/lovable-uploads/dullu-4.jpg"],
      albumLink: "/photos?album=dullu",
      credit: "Project led by Dr. Basanta Raj Adhikari"
    },
    {
      title: "Geophysical Exploration of Copper",
      location: "Myagdi, Nepal",
      description: "Led the geophysical exploration of copper deposits at Myagdi using Electrical Resistivity Tomography (ERT) to finalize mineral zones. The project also incorporated geological methods including trenching and pitting for near-surface exploration, along with diamond drilling and detailed geological logging of the recovered core to confirm mineralization at depth, enabling accurate delineation of copper-bearing zones.",
      tags: ["ERT", "Copper Exploration", "Diamond Drilling", "Geological Logging", "Trenching", "Pitting", "Mineral Zonation"],
      image: "/lovable-uploads/field-rock-hammer.jpg",
      isImagePhoto: true
    },
    {
      title: "Geotechnical Investigation",
      location: "Rupa Lake, Kaski, Nepal",
      description: "Design and Build Earthen Dam, Spillway Cum Bridge, Guide Bund and Associated Works. Delivered a comprehensive geotechnical assessment for the scheme, comprising geotechnical drilling with continuous core recovery, detailed engineering-geological logging of boreholes, and in-situ and laboratory testing. The resulting subsurface data informed slope stability analysis, bearing capacity evaluation and foundation design recommendations for the dam, spillway-cum-bridge and guide bund structures.",
      tags: ["Geotechnical", "Geotechnical Drilling", "Borehole Logging", "Slope Stability", "Foundation Design", "Hydropower"],
      image: "/lovable-uploads/geotechnical-yagya-anil.jpg",
      isImagePhoto: true,
      credit: "Project led by Geologist Mr. Yagya Murti Aryal of Geo Cube Pvt. Ltd."
    },
    {
      title: "Geophysical Study of Thiwa Landslide, Taplejung",
      location: "Taplejung, Nepal",
      description: "Conducted a comprehensive geophysical and geological investigation of the Thiwa Landslide, a slope failure primarily triggered by road construction activities and toe erosion caused by the Tamor River. The field study included four days of geophysical surveys and one day of geological mapping, focusing on identifying subsurface conditions, slope instability factors, and potential failure mechanisms.",
      tags: ["Geophysical Survey", "Landslide Investigation", "ERT", "Geological Mapping"],
      image: "/lovable-uploads/thiwa-9.jpg",
      isImagePhoto: true,
      previewImages: ["/lovable-uploads/thiwa-9.jpg"],
      albumLink: "/photos?album=thiwa",
      credit: "Project led by Geologist Mr. Subash Acharya"
    },
    {
      title: "Geophysical Investigation of Barpak Landslide",
      location: "Barpak, Gorkha",
      description: "Applied Electrical Resistivity Tomography (ERT) to investigate the landslide at Barpak, where the Earthquake Smarak (memorial) building was under construction. Identified weak zones, saturated layers, and slip planes to support safe construction after the 2015 Gorkha earthquake.",
      tags: ["Geophysical Survey", "ERT", "Landslide Investigation", "Slope Stability"],
      image: "/lovable-uploads/barpak-1.jpg",
      isImagePhoto: true,
      previewImages: ["/lovable-uploads/barpak-1.jpg", "/lovable-uploads/barpak-9.jpg"],
      albumLink: "/photos?album=barpak",
      credit: "Project led by Geologist Mr. Subash Acharya and Assistant Geologist Mr. Anil Regmi"
    },
    {
      title: "Iron Prospecting – Naubahini, Pyuthan",
      location: "Naubahini, Pyuthan, Nepal",
      description: "Conducted iron prospecting, mineralization zonation mapping, and systematic sampling at Naubahini, Pyuthan. The iron mineralization occurs within metasandstone/quartzite units, flanked by marble and schist on either side, indicating a structurally and lithologically controlled deposit. Field investigations included detailed geological mapping, outcrop documentation, and representative sampling to delineate the extent and grade of iron mineralization across the target area.",
      tags: ["Iron Prospecting", "Mineralization Mapping", "Sampling", "Geological Mapping"],
      image: "/lovable-uploads/iron-pyuthan-2.jpg",
      isImagePhoto: true,
      previewImages: ["/lovable-uploads/iron-pyuthan-2.jpg", "/lovable-uploads/iron-pyuthan-4.jpg"],
      albumLink: "/photos?album=iron-pyuthan",
      credit: "Project led by Mr. Sandeep Mahat and Mr. Anil Regmi"
    },
    {
      title: "Copper Prospecting and Exploration – Nishikhola",
      location: "Nishikhola Rural Municipality, Baglung, Nepal",
      description: "Supervised the prospecting and exploration programme for copper mineralisation in Nishikhola Rural Municipality, coordinating the field crew, planning daily targets and ensuring quality control of all field data. Work comprised systematic geological mapping of the prospect area, structural and lithological control studies, and excavation of trenches and pits across the strike of the mineralised zones to expose fresh bedrock. Channel, chip and grab samples were collected from trenches, pits and outcrops under a controlled sampling protocol for assay, and the results were correlated with mapped mineralisation to confirm the continuity and extent of the deposit. Mineralised zones were delineated on the map and their thickness, strike length and inferred depth persistence were used to calculate a tentative resource volume as a basis for recommending further detailed exploration and drilling.",
      tags: ["Copper Exploration", "Supervision", "Trenching", "Pitting", "Geological Mapping", "Channel Sampling", "Volume Estimation"],
      image: "/lovable-uploads/field-map-reading.jpg",
      isImagePhoto: true
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
    },
    {
      title: "Reading a geological map in the field",
      image: "/lovable-uploads/field-map-reading.jpg"
    },
    {
      title: "Checking magnetic properties of rock with magnetic pen",
      image: "/lovable-uploads/field-rock-hammer.jpg"
    },
    {
      title: "A look of pyrite through hand lens",
      image: "/lovable-uploads/field-magnifier-gold.jpg"
    },
    {
      title: "Rock sampling along a river section",
      image: "/lovable-uploads/field-river-sampling.jpg"
    }
  ];

  return (
    <section id="projects" className="projects-theme min-h-screen bg-survey-canvas py-14 text-survey-ink md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-6 border-b border-survey-line pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-heading text-xs font-semibold uppercase text-survey-signal">Project index / Nepal field archive</p>
            <h1 className="font-heading text-4xl font-bold uppercase text-survey-ink md:text-6xl">Field surveys</h1>
          </div>
          <div className="max-w-sm md:text-right">
            <p className="text-sm leading-relaxed text-survey-muted">Geological investigations, mineral exploration, hazard assessment and field research across Nepal.</p>
            <p className="mt-3 font-heading text-xs uppercase text-survey-signal">07 featured entries · 03 disciplines</p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => {
            const projectData = project as typeof project & { credit?: string; previewImages?: string[]; albumLink?: string };
            const isLead = index === 0;
            const isWide = index === 3 || index === 6;
            return (
              <article key={project.title} className={`group flex min-h-[25rem] flex-col overflow-hidden border border-survey-line bg-survey-surface transition-colors duration-300 hover:border-survey-signal ${isLead ? "md:col-span-2 lg:row-span-2 lg:min-h-[48rem]" : ""} ${isWide ? "lg:col-span-2" : ""}`}>
                <div className={`relative overflow-hidden bg-survey-surface-strong ${isLead ? "h-72 lg:h-96" : "h-52"}`}>
                  <img src={project.image} alt={`${project.title} fieldwork`} loading={isLead ? "eager" : "lazy"} className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]" />
                  <span className="absolute left-0 top-0 bg-survey-signal px-3 py-2 font-heading text-[10px] font-bold uppercase text-survey-canvas">Survey {String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className={`flex flex-1 flex-col ${isLead ? "p-6 md:p-8" : "p-5"}`}>
                  <div className="mb-3 flex items-start gap-2 text-xs text-survey-muted">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-survey-signal" aria-hidden="true" />
                    <span>{project.location}</span>
                  </div>
                  <h2 className={`font-heading font-bold text-survey-ink ${isLead ? "text-3xl" : "text-xl"}`}>{project.title}</h2>
                  <p className={`mt-4 text-sm leading-7 text-survey-muted ${!isLead ? "lg:line-clamp-6" : ""}`}>{project.description}</p>
                  {projectData.credit && <p className="mt-4 border-l-2 border-survey-signal pl-3 text-xs italic leading-5 text-survey-ink">{projectData.credit}</p>}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => <Badge key={tag} variant="outline" className="rounded-sm border-survey-line px-2 py-1 text-[10px] font-medium text-survey-muted">{tag}</Badge>)}
                  </div>
                  <div className="mt-auto pt-6">
                    {projectData.albumLink ? (
                      <Button asChild variant="outline" size="sm" className="w-full rounded-sm border-survey-signal bg-transparent font-heading text-xs uppercase text-survey-signal hover:bg-survey-signal hover:text-survey-canvas">
                        <Link to={projectData.albumLink}><Camera aria-hidden="true" /> View field photos</Link>
                      </Button>
                    ) : (
                      <div className="flex items-center justify-between border-t border-survey-line pt-4 font-heading text-[10px] uppercase text-survey-muted">
                        <span>Record complete</span><ArrowUpRight className="h-4 w-4 text-survey-signal" aria-hidden="true" />
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <section className="mt-20 border-t border-survey-line pt-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_2fr]">
            <div><p className="mb-2 font-heading text-xs font-semibold uppercase text-survey-signal">Leadership record</p><h2 className="font-heading text-3xl font-bold text-survey-ink">Projects led by me</h2><p className="mt-3 text-sm text-survey-muted">Research and exploration programmes led across Nepal.</p></div>
            <ol className="divide-y divide-survey-line border-y border-survey-line">
              {researchProjects.map((project, index) => <li key={project} className="grid grid-cols-[3rem_1fr] gap-3 py-5"><span className="font-heading text-xs text-survey-signal">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-survey-ink">{project}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="mt-20 border-t border-survey-line pt-10">
          <div className="mb-8"><p className="mb-2 font-heading text-xs font-semibold uppercase text-survey-signal">Published & academic</p><h2 className="font-heading text-3xl font-bold text-survey-ink">Research archive</h2></div>
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="border border-survey-line bg-survey-surface p-6">
                <span className="font-heading text-[10px] uppercase text-survey-signal">Master's thesis</span>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My master's thesis focused on the stratigraphy, structural geology, and petrography of the Lesser Himalaya in the eastern Syangja region, along with the identification and assessment of mineral resources.
                </p>
                <p className="text-sm text-survey-ink italic mb-2">Supervisor: Prof. Dr. Lalu Prasad Paudel</p>
                <p className="text-sm text-survey-ink italic mb-4">Thesis Partner: Mr. Biren G.C.</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {["/lovable-uploads/thesis-1.jpg", "/lovable-uploads/thesis-7.jpg"].map((img, idx) => (
                    <Link key={idx} to="/photos?album=thesis">
                      <div className="aspect-[4/3] overflow-hidden cursor-pointer">
                        <img src={img} alt={`Thesis fieldwork ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                    </Link>
                  ))}
                </div>
                <Link to="/photos?album=thesis">
                  <Button variant="outline" size="sm" className="w-full rounded-sm border-survey-signal bg-transparent text-survey-signal hover:bg-survey-signal hover:text-survey-canvas">
                    <Camera className="w-4 h-4 mr-2" />
                    View All Photos
                  </Button>
                </Link>
            </article>
            
            <article className="border border-survey-line bg-survey-surface p-6">
                <span className="font-heading text-[10px] uppercase text-survey-signal">Journal article</span>
                <h4 className="font-semibold text-lg mb-2">
                  Landslide Characteristics and Distribution at the Kathmandu Kyirong Highway Corridor in Pre-Quake, Co-Seismic and Post-Quake Situations
                </h4>
                <p className="text-muted-foreground mb-2">
                  Susmita Dhakal, Peng Cui, Li-Jun Su, Qiang Zou, Rama Ghimire, Sumika Pakhrin and <span className="font-semibold text-survey-signal">Anil Regmi</span>
                </p>
                <p className="text-sm text-muted-foreground italic mb-4">
                  Perspectives on Higher Education — A Peer Reviewed Journal
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {["/lovable-uploads/kyirong-3.jpg", "/lovable-uploads/kyirong-7.jpg"].map((img, idx) => (
                    <Link key={idx} to="/photos?album=kyirong">
                      <div className="aspect-[4/3] overflow-hidden cursor-pointer">
                        <img src={img} alt={`Kyirong Highway research ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                    </Link>
                  ))}
                </div>
                <Link to="/photos?album=kyirong">
                  <Button variant="outline" size="sm" className="w-full rounded-sm border-survey-signal bg-transparent text-survey-signal hover:bg-survey-signal hover:text-survey-canvas">
                    <Camera className="w-4 h-4 mr-2" />
                    View All Photos
                  </Button>
                </Link>
            </article>
          </div>
        </section>

        <section className="mt-20 border-t border-survey-line pt-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div><p className="mb-2 font-heading text-xs font-semibold uppercase text-survey-signal">Visual record</p><h2 className="font-heading text-3xl font-bold text-survey-ink">Field gallery</h2></div>
            <p className="max-w-2xl text-sm text-survey-muted md:text-right">
              Visual documentation of my work across various geological projects, field expeditions, and research activities throughout Nepal.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {galleryImages.map((image, index) => (
              <figure key={image.image} className={`group overflow-hidden border border-survey-line bg-survey-surface ${index === 0 ? "col-span-2 row-span-2" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <figcaption className="p-3 text-xs leading-5 text-survey-muted">{image.title}</figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Button asChild variant="outline" className="rounded-sm border-survey-signal bg-transparent font-heading text-xs uppercase text-survey-signal hover:bg-survey-signal hover:text-survey-canvas"><Link to="/photos">Open full photo archive <ArrowUpRight /></Link></Button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProjectsSection;