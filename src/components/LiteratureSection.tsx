import { useState } from "react";
import { Copy, ChevronRight, BookOpen, Feather, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import TravelogueSection from "@/components/TravelogueSection";

type LitItem = {
  id: string;
  title: string;
  category: "poetry" | "essay" | "travelogue";
  image: string;
  imageAlt: string;
};

const items: LitItem[] = [
  { id: "pokhara", title: "पोखरा", category: "poetry", image: "/lovable-uploads/pokhara-mountains.png", imageAlt: "Pokhara - Mountains and Lake" },
  { id: "khadi", title: "खाडी", category: "poetry", image: "/lovable-uploads/arabian-desert.png", imageAlt: "Arabian Desert" },
  { id: "message", title: "Message", category: "essay", image: "/lovable-uploads/sparrow-window.png", imageAlt: "Sparrow on window" },
  { id: "oxymoron", title: "Oxymoron", category: "essay", image: "/lovable-uploads/sky-clouds.png", imageAlt: "Sky and clouds" },
  { id: "achanakKheleko", title: "अचानक खेलेको कुरा", category: "essay", image: "/lovable-uploads/seti-hydropower-camp.jpg", imageAlt: "Seti river hydropower camp" },
  { id: "thaple", title: "The sudden Thaple", category: "travelogue", image: "/lovable-uploads/thaple-panorama.png", imageAlt: "Thaple panoramic view" },
];

const categoryIcon = {
  poetry: <Feather className="w-4 h-4" />,
  essay: <BookOpen className="w-4 h-4" />,
  travelogue: <MapPin className="w-4 h-4" />,
};

const categoryLabel = {
  poetry: "Poetry",
  essay: "Essay",
  travelogue: "Travelogue",
};

const LiteratureSection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const copyToClipboard = (text: string, title: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copied!", description: `"${title}" has been copied to clipboard.` });
  };

  const poem1 = `हातमा तातो तम्बाखु बोकेर 
मनमा अनेकौं आकर्षण बोकेर
निला आँखाले 
आफ्नै तम्बाखुबाट निस्केको 
धुँवामा 
तरुणीका फिला 
अनि निताम्भ 
देखे झैँ
तृप्त  भएर उत्तर फर्केर 
वाह वाह भन्दै छ
पोखरा !`;

  const poem2 = `घर गल्ली टोल छिमेक 
छाडि छाडि खाडी। 
मनको माया खेत र बारी 
बाँझो छाडि छाडि।।

सिप हातमा हलो जोत्ने 
गए बोरा बोक्न। 
हितको माया काखको छोरा 
सबै छाडि छाडि।।

घर बन्ला फर्किएर देशकै माटोमा, 
हिडाउने सन्तान पनि देशकै बाटोमा। 
जिन्दगीका सपना यहाँ 
किन खाडी खाडी।

मनको माया 
खेत र बारी बाझो छाडि छाडि।।

देशमै केही गर्न सक्ने 
मनमा हुँदा हुँदै, 
साहुको ऋण, घरको दिन 
पुग्छ डाँडा पारी। 
मनमा देश छ 
शरीर सबै हुँदा पनि खाडी।।

घर गल्ली टोल छिमेक 
सबै छाडि खाडी। 
मनको माया खेत र बारी 
बाँझो छाडि छाडि।`;

  const essayMessage = `In our society, when any birds approach nearer to you or get trapped inside your house, it is thought that it has some message. I came to realize this after I posted a picture of 'the bird on my window' on Instagram. After that, my mind asked me continuously about the message. But I found nothing. Just my mind got caught by this superstitious thought that it must have some message for me. Before seeing comments on my Instagram, I thought of nothing like this but comment on this picture changed my thought.

The bird was inside my room when I came back from my kitchen. My sister saw it first. There was a bird that was continuously searching for the path to get out. But it only found one bright place that was the transparent glass window. Though sometimes it went to the head of doll and sometimes on the top of my drawer. The bird was continuously trying to get out of the window but it was ignorant of that glass which steered it to strike on that glass many times. I think that I love all animals and birds, I just wanted to help it. I was trying to get it out so that it could go back to its own place. The door was on the opposite side of the transparent glass window. After half hour of the struggle, it fell down on the back of my drawer but didn't come out. I left it there and got back to my works. I was thinking about it but I could do nothing. I couldn't even shake my drawer alone. I thought it will come out after some time.

While doing other works, I was thinking about it, my mind was totally into it. I was talking to the bird which I knew was on the back of that drawer. I was asking it to come out and I will show the way to its home. I was saying ''Even though you are small, you are free, you have the whole world for you. Hey 'Chari' come, get out it's raining, it might be wonderful to see the houses and people bathing. Hey 'Chari" come, there is a cool and beautiful environment outside, why are you hiding there?'' I was talking and my sister was teasing me for saying 'Chari' and talking to it. Even after making lots of palliates, it didn't come out.

As it was the rainy season and mom went to the field to plant rice. After sometimes, my mom came from the field and took rest. She fell asleep on the bed in my room. I was sitting on the floor. I watched one video on youtube and an episode of one series. Then there was the sound of some activity backward of the drawer. Just my mom got awake and my sister entered the room. The bird also came out from the back of my drawer. It sat on my fan easily and looked around. I already opened all the windows and doors of my room. The bird roamed around the room once and found the door to get out.

I wondered how easily it got out this time. What might be the reason it didn't find the way to get out before? What power suddenly governed it? And I am still wondering. How easily it changed the direction to go? Also, why didn't it go to the transparent glass for a single time?

All I hope was for the happiness of the bird and wish that the bird has found its family and shelter.`;

  const essayOxymoron = `There is a bench on the roof of my house. I am lying on it, my face turned toward the sky, my hands working as a pillow for my head. The time is nearly 5:30; it is still bright daylight, but the moment is clearly guiding the day toward darkness. I turn off the music. The silence of the sky begins to create questions—why, how, when—many thoughts teasing my mind.

White clouds cover the sky, floating from south to north. They seem to raise questions of their own. I feel as if I am investigating the silence of the sky. Birds fly as though they are enjoying the evening after a good day, yet they disturb my investigation of silence.

I also see trees on the hilltop—only their upper halves. The clouds float, the birds dance, and the sky remains silent, until a small miracle happens. The moon appears, breaking through the white clouds. Yet the moon struggles to shine. It is an oxymoron—caught between shine and matte. The moon tries to glow, but it is not yet time. Though the sun is gone, its power still dominates, and the clouds continue to interfere.

Eventually, the birds find their shelters. The trees on the hilltop shift from green to dark. Still, I struggle to see the moon clearly. As my investigation continues, I realize that the moon is moving, changing its position, while I remain here, watching it appear and disappear. We are not truly seeing each other.

Then the white clouds turn dark, and still the moon remains hidden. I do not know whether it will shine or not, but my hope remains strong. The moon waits for the clouds to clear and for the sun's influence to fade. I wait for the same. Our intentions are similar, but the time we are given is not. The moon may have billions of years to shine, while I am here only for a moment.`;

  const contentMap: Record<string, React.ReactNode> = {
    pokhara: (
      <Card className="overflow-hidden shadow-earth animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="relative">
          <img src="/lovable-uploads/pokhara-mountains.png" alt="Pokhara" className="w-full h-64 md:h-80 object-cover" />
          <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Photo Credit: NTB</div>
        </div>
        <CardContent className="p-8 bg-gradient-to-b from-muted/30 to-background">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary font-heading">पोखरा</h3>
            <button onClick={() => copyToClipboard(poem1, "पोखरा")} className="p-2 hover:bg-muted rounded-full transition-colors" title="Copy poem">
              <Copy className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </button>
          </div>
          <div className="text-lg leading-relaxed text-foreground whitespace-pre-line font-serif italic">{poem1}</div>
        </CardContent>
      </Card>
    ),
    khadi: (
      <Card className="overflow-hidden shadow-earth animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="relative">
          <img src="/lovable-uploads/arabian-desert.png" alt="Arabian Desert" className="w-full h-64 md:h-80 object-cover" />
        </div>
        <CardContent className="p-8 bg-gradient-to-b from-muted/30 to-background">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary font-heading">खाडी</h3>
            <button onClick={() => copyToClipboard(poem2, "खाडी")} className="p-2 hover:bg-muted rounded-full transition-colors" title="Copy poem">
              <Copy className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </button>
          </div>
          <div className="text-lg leading-relaxed text-foreground whitespace-pre-line font-serif italic">{poem2}</div>
        </CardContent>
      </Card>
    ),
    message: (
      <Card className="overflow-hidden shadow-earth animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="relative">
          <img src="/lovable-uploads/sparrow-window.png" alt="Sparrow on window" className="w-full h-64 md:h-80 object-cover" />
        </div>
        <CardContent className="p-8 bg-gradient-to-b from-muted/30 to-background">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary font-heading">Message</h3>
            <button onClick={() => copyToClipboard(essayMessage, "Message")} className="p-2 hover:bg-muted rounded-full transition-colors" title="Copy essay">
              <Copy className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </button>
          </div>
          <div className="text-base leading-relaxed text-foreground/90 space-y-4 font-serif">
            {essayMessage.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-justify">{paragraph}</p>
            ))}
          </div>
        </CardContent>
      </Card>
    ),
    oxymoron: (
      <Card className="overflow-hidden shadow-earth animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="relative">
          <img src="/lovable-uploads/sky-clouds.png" alt="Sky and clouds" className="w-full h-64 md:h-80 object-cover" />
        </div>
        <CardContent className="p-8 bg-gradient-to-b from-muted/30 to-background">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary font-heading">Oxymoron</h3>
            <button onClick={() => copyToClipboard(essayOxymoron, "Oxymoron")} className="p-2 hover:bg-muted rounded-full transition-colors" title="Copy essay">
              <Copy className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </button>
          </div>
          <div className="text-base leading-relaxed text-foreground/90 font-serif text-justify">
            {essayOxymoron.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </CardContent>
      </Card>
    ),
    thaple: (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <TravelogueSection />
      </div>
    ),
  };

  return (
    <section id="literature" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">Literature</h2>
          <p className="text-muted-foreground text-lg">Poetry, Essays & Travelogues</p>
          <Separator className="mt-6 max-w-xs mx-auto" />
        </div>

        {/* Title Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(selected === item.id ? null : item.id)}
              className={`group relative overflow-hidden rounded-xl text-left transition-all duration-300 border-2 ${
                selected === item.id
                  ? "border-primary shadow-lg scale-[1.02]"
                  : "border-border hover:border-primary/50 hover:shadow-md"
              }`}
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-2 text-white/70 text-xs mb-1">
                  {categoryIcon[item.category]}
                  <span>{categoryLabel[item.category]}</span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white font-heading">{item.title}</h3>
                  <ChevronRight className={`w-5 h-5 text-white/70 transition-transform duration-300 ${selected === item.id ? "rotate-90" : ""}`} />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Content */}
        {selected && contentMap[selected]}
      </div>
    </section>
  );
};

export default LiteratureSection;
