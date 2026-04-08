import { useState } from "react";
import Navigation from "@/components/Navigation";
import TravelogueSection from "@/components/TravelogueSection";
import MardiTravelogue from "@/components/MardiTravelogue";
import TinpipleTravelogue from "@/components/TinpipleTravelogue";
import { Mountain, ChevronRight, ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

type TravelItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
};

const items: TravelItem[] = [
  {
    id: "thaple",
    title: "The sudden Thaple",
    subtitle: "June 18, 2020",
    image: "/lovable-uploads/thaple-panorama.png",
    imageAlt: "Panoramic view from Thaple peak",
  },
  {
    id: "mardi",
    title: "Mardi with Friends",
    subtitle: "November 2017 · A trek to Mardi Base Camp (4500m)",
    image: "/lovable-uploads/mardi-group.jpg",
    imageAlt: "Group photo at Mardi Base Camp",
  },
  {
    id: "tinpiple",
    title: "Tinpiple – Tarkeshwar – Gurje Bhanjyang – Jhor",
    subtitle: "June 27, 2017 · A hike with Wondervibes in Kathmandu hills",
    image: "/lovable-uploads/tinpiple-hero.jpg",
    imageAlt: "Forest trail on the way to Tarkeshwar",
  },
];

const MyNepal = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {!selected ? (
              <>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Mountain className="w-8 h-8 text-primary" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">My Nepal</h1>
                  <p className="text-muted-foreground text-lg">Travelogues & stories from Nepal</p>
                  <Separator className="mt-6 max-w-xs mx-auto" />
                </div>

                {/* Photo Album - Pyuthan */}
                <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 h-[50vh]">
                    <div className="relative overflow-hidden group">
                      <img
                        src="/lovable-uploads/kothi-bhir-pyuthan.jpg"
                        alt="Kothi Bhir, Pyuthan District"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold text-white">Kothi Bhir, Pyuthan</h3>
                        <p className="text-white/70 text-sm">A site of religious and historical importance</p>
                      </div>
                    </div>
                    <div className="relative overflow-hidden group">
                      <img
                        src="/lovable-uploads/naubahini-southern-view.jpg"
                        alt="Southern view from Naubahini, Pyuthan"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold text-white">Naubahini, Pyuthan</h3>
                        <p className="text-white/70 text-sm">Southern view of the hills</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((item) => (
                    <Card
                      key={item.id}
                      className="group cursor-pointer overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      onClick={() => setSelected(item.id)}
                    >
                      <div className="relative h-56 md:h-64">
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl md:text-2xl font-bold text-white font-heading mb-1">
                            {item.title}
                          </h3>
                          <p className="text-white/70 text-sm">{item.subtitle}</p>
                        </div>
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ChevronRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <div>
                <button
                  onClick={() => setSelected(null)}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to My Nepal
                </button>

                {selected === "thaple" && <TravelogueSection />}
                {selected === "mardi" && <MardiTravelogue />}
                {selected === "tinpiple" && <TinpipleTravelogue />}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyNepal;
