import { Card, CardContent } from "@/components/ui/card";
import { Hammer, Search, Compass, Navigation } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I am a geologist engaged in the exploration of mineral resources in Nepal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="grid grid-cols-2 gap-4">
            <Card className="shadow-soft">
              <CardContent className="p-4">
                <div className="aspect-square bg-earth-cream rounded-lg flex flex-col items-center justify-center gap-2">
                  <Hammer className="w-12 h-12 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Geological Hammer</span>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardContent className="p-4">
                <div className="aspect-square bg-earth-brown-light rounded-lg flex flex-col items-center justify-center gap-2">
                  <Search className="w-12 h-12 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Hand Lens</span>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardContent className="p-4">
                <div className="aspect-square bg-earth-orange rounded-lg flex flex-col items-center justify-center gap-2">
                  <Compass className="w-12 h-12 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Brunton Compass</span>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
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
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-primary mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">Master's in Geology from Tribhuvan University</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-primary mb-2">Experience</h3>
                  <p className="text-sm text-muted-foreground">Mineral exploration and geotechnical investigations</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-primary mb-2">Expertise</h3>
                  <p className="text-sm text-muted-foreground">Metallic mineral exploration and mapping</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;