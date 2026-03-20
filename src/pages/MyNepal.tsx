import Navigation from "@/components/Navigation";
import TravelogueSection from "@/components/TravelogueSection";
import { Mountain } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const MyNepal = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Mountain className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">My Nepal</h1>
              <p className="text-muted-foreground text-lg">Travelogues & stories from Nepal</p>
              <Separator className="mt-6 max-w-xs mx-auto" />
            </div>

            <TravelogueSection />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyNepal;
