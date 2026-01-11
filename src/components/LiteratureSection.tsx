import { Copy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

const LiteratureSection = () => {
  const copyToClipboard = (text: string, title: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `"${title}" has been copied to clipboard.`,
    });
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

  const essayOxymoron = `There is a bench on the roof of my house. I am lying down on the bench with my face facing towards the sky and my hands working as a pillow for my head. The time was nearly 5:30 and it is still the bright day but time showing the way to darkness. I turned off the music. The silence of the sky was creating questions. Why, How, When and many more teasing my mind. The white clouds were covering the sky, floating from south to north. The clouds were creating questions. I thought I was investigating the silence of the sky. The birds flying like they were enjoying the evening after having a good day. But the birds were hindering my investigation of silence. I also saw the trees on the top of the hill. Only the upper halves. The clouds were floating, birds were dancing, the sky was silent but there happened a miracle in the sky. Yes, there arrived the moon clearing the white clouds. But the moon was hindered to shine. That was an oxymoron situation between shine and matt. The moon was trying to shine but it was not the time that it could shine; though there was no sun its power was still dominating, the clouds were still trying to disturb. But the time came when birds have found their shelter. Trees on the hilltop were green to dark. Still, I was struggling to see the moon. As my investigation was ongoing, I was thinking that the moon is there changing the position and I am still here seeing it shine and disappear. We both are not seeing each other. And now there came a time when the white cloud changed to dark but I was still struggling to see the moon. I didn't know whether the moon will shine or not, but the hope was still strong. As the moon is waiting for the clouds to get cleared and the sun goes away. I am also here waiting for the same. Our intentions were similar but the time we've got...; the moon can have billions of years to shine and I am here only for some time.`;

  return (
    <section id="literature" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">
            Literature
          </h2>
          <p className="text-muted-foreground text-lg">Poetry & Essays</p>
          <Separator className="mt-6 max-w-xs mx-auto" />
        </div>

        {/* Poem 1 - एक तरुण जस्तो */}
        <Card className="mb-12 overflow-hidden shadow-earth hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <img 
              src="/lovable-uploads/pokhara-mountains.png" 
              alt="Pokhara - Mountains and Lake"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              Photo Credit: NTB
            </div>
          </div>
          <CardContent className="p-8 bg-gradient-to-b from-earth-cream/50 to-background">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-primary font-heading">
                एक तरुण जस्तो
              </h3>
              <button 
                onClick={() => copyToClipboard(poem1, "एक तरुण जस्तो")}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                title="Copy poem"
              >
                <Copy className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </button>
            </div>
            <div className="text-lg leading-relaxed text-foreground whitespace-pre-line font-serif italic">
              {poem1}
            </div>
          </CardContent>
        </Card>

        {/* Poem 2 - घर गल्ली टोल छिमेक */}
        <Card className="mb-12 overflow-hidden shadow-earth hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <img 
              src="/lovable-uploads/arabian-desert.png" 
              alt="Arabian Desert - Golden sand dunes at sunset"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
          <CardContent className="p-8 bg-gradient-to-b from-earth-orange/10 to-background">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-primary font-heading">
                घर गल्ली टोल छिमेक
              </h3>
              <button 
                onClick={() => copyToClipboard(poem2, "घर गल्ली टोल छिमेक")}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                title="Copy poem"
              >
                <Copy className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </button>
            </div>
            <div className="text-lg leading-relaxed text-foreground whitespace-pre-line font-serif italic">
              {poem2}
            </div>
          </CardContent>
        </Card>

        <Separator className="my-16" />

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-primary font-heading">Essays</h3>
        </div>

        {/* Essay - Message */}
        <Card className="mb-12 overflow-hidden shadow-earth hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <img 
              src="/lovable-uploads/sparrow-window.png" 
              alt="Sparrow on window - A bird silhouette against rainy window"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
          <CardContent className="p-8 bg-gradient-to-b from-muted/50 to-background">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-primary font-heading">
                Message
              </h3>
              <button 
                onClick={() => copyToClipboard(essayMessage, "Message")}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                title="Copy essay"
              >
                <Copy className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </button>
            </div>
            <div className="text-base leading-relaxed text-foreground/90 space-y-4 font-serif">
              {essayMessage.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-justify first-letter:text-3xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-2">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Essay - Oxymoron */}
        <Card className="overflow-hidden shadow-earth hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <img 
              src="/lovable-uploads/sky-clouds.png" 
              alt="Sky and clouds - Peaceful blue sky"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
          <CardContent className="p-8 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-primary font-heading">
                Oxymoron
              </h3>
              <button 
                onClick={() => copyToClipboard(essayOxymoron, "Oxymoron")}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                title="Copy essay"
              >
                <Copy className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </button>
            </div>
            <div className="text-base leading-relaxed text-foreground/90 font-serif text-justify first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              {essayOxymoron}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LiteratureSection;
