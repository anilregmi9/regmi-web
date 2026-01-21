import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, BookOpen, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-accent font-medium mb-4">Hello, I'm</p>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-foreground">
              Anil Regmi
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6">
              Exploration Geologist
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Specializing in metallic mineral resource exploration and geological 
              investigations for mining and infrastructure development in Nepal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="shadow-earth" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
              {/* LinkedIn Link */}
              <a 
                href="https://www.linkedin.com/in/anilregmi9/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-accent transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#0077B5] flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    Connect on LinkedIn
                  </div>
                  <p className="text-xs text-muted-foreground">Professional network</p>
                </div>
              </a>
              
              {/* Goodreads Link */}
              <a 
                href="https://www.goodreads.com/anilregmi9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-accent transition-colors group"
              >
                <img 
                  src="/lovable-uploads/goodreads-profile.jpg" 
                  alt="Anil Regmi on Goodreads"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    <BookOpen className="w-4 h-4" />
                    Follow on Goodreads
                  </div>
                  <p className="text-xs text-muted-foreground">See what I'm reading</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-earth bg-gradient-to-br from-earth-brown to-earth-orange p-1">
                <img 
                  src="/lovable-uploads/2f647f6e-9e54-4fd7-ae8c-172b475248bd.png" 
                  alt="Anil Regmi - Professional Geologist"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-medium shadow-soft">
                Geologist
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;