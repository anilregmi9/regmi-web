import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Mountain } from "lucide-react";

const MyNepal = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Mountain className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold mb-4">My Nepal</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Coming soon — stories, photos, and reflections from Nepal.
              </p>
            </div>

            <div className="flex justify-center">
              <Card className="shadow-soft max-w-lg w-full">
                <CardContent className="p-8 text-center">
                  <Mountain className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Content Coming Soon</h3>
                  <p className="text-muted-foreground">
                    This section will showcase Nepal — its landscapes, culture, and personal experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyNepal;
