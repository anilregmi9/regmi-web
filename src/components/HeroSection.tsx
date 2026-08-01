import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, BookOpen, Linkedin } from "lucide-react";
import GeologicalBackground from "@/components/GeologicalBackground";
import HeroPortrait from "@/components/HeroPortrait";


const HeroSection = () => {
  return (
    <>
    <section id="home" className="min-h-screen flex items-center justify-center relative gradient-subtle overflow-hidden">
      {/* Animated geological background */}
      <GeologicalBackground />
      {/* Subtle strata overlay (calmer) */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, hsl(var(--foreground)) 0 1px, transparent 1px 44px)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">Hello, I'm</p>
            <h1 className="mb-4 text-foreground">
              Anil Regmi
            </h1>
            <h2 className="text-muted-foreground font-medium mb-6">
              Exploration Geologist
            </h2>
            <p className="text-lg text-muted-foreground/90 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Specializing in metallic mineral resource exploration and geological
              investigations for mining and infrastructure projects around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button size="lg" className="shadow-earth hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 h-12 px-8" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 border-border/70 hover:border-accent hover:bg-accent/10 transition-all duration-200" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/anilregmi9/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-3 rounded-xl bg-card/70 backdrop-blur border border-border hover:border-accent hover:bg-card transition-colors group"
              >
                <div className="w-11 h-11 rounded-full bg-[#0077B5] flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    Connect on LinkedIn
                  </div>
                  <p className="text-xs text-muted-foreground">Professional network</p>
                </div>
              </a>

              <a
                href="https://www.goodreads.com/anilregmi9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-3 rounded-xl bg-card/70 backdrop-blur border border-border hover:border-accent hover:bg-card transition-colors group"
              >
                <img
                  src="/lovable-uploads/goodreads-profile.jpg"
                  alt="Anil Regmi on Goodreads"
                  className="w-11 h-11 rounded-full object-cover shrink-0"
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

          {/* Portrait composition — cleaner alignment */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="relative w-[min(88vw,20rem)] h-[min(105vw,24rem)] sm:w-[24rem] sm:h-[27rem] lg:w-[26rem] lg:h-[30rem]">
              {/* Ambient glow */}
              <div className="absolute -inset-8 bg-gradient-to-tr from-primary/30 via-accent/25 to-transparent blur-3xl pointer-events-none" />

              {/* Main portrait — responsive, fully visible by default */}
              <div className="absolute inset-x-[12%] top-0 bottom-[18%] z-10 group">
                <HeroPortrait
                  src="/lovable-uploads/anil-core-main.jpg"
                  alt="Anil Regmi logging drill core samples"
                />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full font-medium text-xs tracking-wide shadow-soft whitespace-nowrap">
                  GEOLOGIST
                </div>
              </div>

              {/* Hello thumbnail — top-left, previous portrait */}
              <div className="absolute -left-2 sm:-left-4 top-6 z-20 group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden ring-2 ring-background shadow-soft bg-card transition-transform duration-500 group-hover:-translate-y-1">
                  <img
                    src="/lovable-uploads/2f647f6e-9e54-4fd7-ae8c-172b475248bd.png"
                    alt="Anil Regmi portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-medium bg-card border border-border px-2 py-0.5 rounded-full whitespace-nowrap shadow-soft">Hello</span>
              </div>

              {/* Fieldwork thumbnail — top-right, uniform rounded card */}
              <div className="absolute -right-2 sm:-right-4 top-6 z-20 group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden ring-2 ring-background shadow-soft bg-card transition-transform duration-500 group-hover:-translate-y-1">
                  <img
                    src="/lovable-uploads/hero-fieldwork.jpg"
                    alt="Anil during field investigation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-medium bg-card border border-border px-2 py-0.5 rounded-full whitespace-nowrap shadow-soft">Field</span>
              </div>

              {/* Speech — bottom-left, matching rounded card */}
              <div className="absolute -left-2 sm:-left-4 bottom-4 z-20 group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden ring-2 ring-background shadow-soft bg-card transition-transform duration-500 group-hover:-translate-y-1">
                  <img
                    src="/lovable-uploads/hero-speech.jpg"
                    alt="Anil delivering a speech"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-medium bg-card border border-border px-2 py-0.5 rounded-full whitespace-nowrap shadow-soft">NGSS President</span>
              </div>

              {/* Field partner — bottom-right, matching rounded card */}
              <div className="absolute -right-2 sm:-right-4 bottom-4 z-20 group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden ring-2 ring-background shadow-soft bg-card transition-transform duration-500 group-hover:-translate-y-1">
                  <img
                    src="/lovable-uploads/hero-mountains.jpg"
                    alt="Anil with his field partner dog in the Himalayas"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-medium bg-card border border-border px-2 py-0.5 rounded-full whitespace-nowrap shadow-soft">Field Partner</span>
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
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="group relative overflow-hidden rounded-2xl shadow-earth">
            <img
              src="/lovable-uploads/syangja-night.jpeg"
              alt="Syangja town at night with colorful lights"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-lg font-semibold">Syangja by Night</h3>
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
              <h3 className="text-lg font-semibold">Fieldwork in Palpa</h3>
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
