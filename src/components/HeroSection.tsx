import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, BookOpen, Linkedin } from "lucide-react";
import GeologicalBackground from "@/components/GeologicalBackground";

const HeroSection = () => {
  return (
    <>
    <section id="home" className="min-h-screen flex items-center justify-center relative gradient-subtle overflow-hidden">
      {/* Animated geological 3D background */}
      <GeologicalBackground />
      {/* Subtle strata overlay */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, hsl(var(--foreground)) 0 1px, transparent 1px 38px), repeating-linear-gradient(180deg, transparent 0 18px, hsl(var(--foreground)/0.5) 18px 19px, transparent 19px 38px)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
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
              investigations for mining and infrastructure projects around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="shadow-earth" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#about">Learn More</a>
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
            <div className="relative w-[22rem] h-[26rem] sm:w-[26rem] sm:h-[28rem]">
              {/* Ambient glow */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-earth-orange via-accent to-earth-brown opacity-40 blur-3xl animate-pulse pointer-events-none" />

              {/* 1. Main profile — hexagon (geological crystal) */}
              <div className="absolute left-1/2 top-4 -translate-x-1/2 z-20 group">
                <div
                  className="w-64 h-72 bg-gradient-to-br from-earth-brown to-earth-orange p-1 shadow-earth transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                >
                  <img
                    src="/lovable-uploads/2f647f6e-9e54-4fd7-ae8c-172b475248bd.png"
                    alt="Anil Regmi - Professional Geologist"
                    className="w-full h-full object-cover"
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                  />
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full font-medium text-sm shadow-soft whitespace-nowrap">
                  Geologist
                </div>
              </div>

              {/* 2. Fieldwork — circular badge, top-left */}
              <div className="absolute -left-2 top-2 z-30 group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-background shadow-earth bg-gradient-to-br from-accent to-earth-orange p-0.5 transition-transform duration-500 group-hover:rotate-6">
                  <img
                    src="/lovable-uploads/hero-fieldwork.jpg"
                    alt="Anil during field investigation"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-medium bg-card border border-border px-2 py-0.5 rounded-full whitespace-nowrap shadow-soft">Field</span>
              </div>

              {/* 3. Speech — tilted polaroid card, bottom-left */}
              <div className="absolute -left-4 bottom-4 z-30 -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="bg-card p-2 pb-6 shadow-earth border border-border w-36 sm:w-40">
                  <img
                    src="/lovable-uploads/hero-speech.jpg"
                    alt="Anil delivering a speech"
                    className="w-full h-24 sm:h-28 object-cover"
                  />
                  <p className="text-[10px] text-muted-foreground text-center mt-1 font-medium">NGSS President</p>
                </div>
              </div>

              {/* 4. Mountains — organic blob, bottom-right */}
              <div className="absolute -right-2 bottom-0 z-30 group rotate-3 hover:rotate-0 transition-transform duration-500">
                <div
                  className="w-32 h-32 sm:w-36 sm:h-36 overflow-hidden shadow-earth ring-2 ring-accent/40"
                  style={{ borderRadius: "62% 38% 55% 45% / 50% 60% 40% 50%" }}
                >
                  <img
                    src="/lovable-uploads/hero-mountains.jpg"
                    alt="Anil with his field partner dog in the Himalayas"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-medium bg-card border border-border px-2 py-0.5 rounded-full whitespace-nowrap shadow-soft">The Field Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </div>
    </section>

    {/* Photo Highlights */}
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-2xl shadow-earth">
            <img 
              src="/lovable-uploads/syangja-night.jpeg" 
              alt="Syangja town at night with colorful lights"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="font-semibold text-lg">Syangja by Night</h3>
              <p className="text-sm text-white/80">My hometown glowing under the evening sky — where it all began</p>
            </div>
          </div>
          <Link to="/photos?album=palpa" className="group relative overflow-hidden rounded-2xl shadow-earth block">
            <img 
              src="/lovable-uploads/palpa-fieldwork.jpg" 
              alt="Anil Regmi during geological fieldwork in Palpa with local children"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="font-semibold text-lg">Fieldwork in Palpa</h3>
              <p className="text-sm text-white/80">Moments from a college geological field trip in Palpa District</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  </>
  );
};

export default HeroSection;
