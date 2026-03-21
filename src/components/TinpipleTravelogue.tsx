import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TinpipleTravelogue = () => {
  return (
    <Card className="overflow-hidden shadow-earth hover:shadow-lg transition-shadow duration-300">
      {/* Hero Image */}
      <div className="relative">
        <img
          src="/lovable-uploads/tinpiple-hero.jpg"
          alt="Forest trail on the way to Tarkeshwar with ancient stone steps"
          className="w-full h-72 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-3xl md:text-4xl font-bold text-white font-heading mb-2">
            Tinpiple – Tarkeshwar – Army camp – Gurje Bhanjyang – Jhor
          </h3>
          <p className="text-white/80 text-sm">A hike with Wondervibes in the hills of Kathmandu</p>
        </div>
      </div>

      <CardContent className="p-6 md:p-10 bg-gradient-to-b from-muted/30 to-background">
        <div className="flex items-center justify-end mb-8">
          <a
            href="https://wondervibes.blogspot.com/2017/06/wondervibes-travels-tinpiple-tarkeshwar.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Read on Wondervibes Blog
          </a>
        </div>

        <div className="prose prose-lg max-w-none text-foreground/90 font-serif space-y-6">
          <p className="text-justify first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            Do you know ?? There are some stairs made of bricks exported from Heaven. Yes, I'm talking about the place we've been for our Hike in the hill of Kathmandu District. It was an amazing and natural hike with the team of 'Wondervibes' along Tinpiple – Tarkeshwar – Army camp – Gurje Bhanjyang – Jhor.
          </p>

          <p className="text-justify">
            Travelling teaches us about the world, life and ourselves than any education ever could. We learned teamwork during this hike. Everybody is never together during the walk but there comes some special place or point where we wait for others to come and join to capture the magical moment of that place. This also becomes that place where we share what we see and how we feel. Some of 'what we see and what we feel' are in this blog.
          </p>

          {/* Stone stairs */}
          <figure className="my-8">
            <img
              src="/lovable-uploads/tinpiple-stairs.jpg"
              alt="Ancient stone stairs on the hiking trail"
              className="w-full rounded-lg shadow-md"
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
              The ancient stone steps — "stairs made of bricks exported from Heaven"
            </figcaption>
          </figure>

          <p className="text-justify">
            Our hike started from Machhapokhari, Kathmandu. There was a walk for a while up to 'Tinpiple' where we discussed the trip with the plan maker Asim Ojha. The group of 10 'wondervibes' made a decision and continued our journey. Our main aim was to walk along the forests of Shivapuri National Park and end it to Jhor. Firstly moving to Tinpiple was not that good. All because of the dusty road and strong sunlight. We're just eager to reach the forest area and make some affairs with a peaceful environment. There is no chance of stopping anywhere except some special places before reaching the forest. There are very beautiful temples nearly 500m uphill from Tinpiple on the way to Tarkeshwar Temple also the Kathmandu valley can be observed from this temple.
          </p>

          {/* Temple */}
          <figure className="my-8">
            <img
              src="/lovable-uploads/tinpiple-temple.jpg"
              alt="Beautiful temple on the way to Tarkeshwar"
              className="w-full rounded-lg shadow-md"
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
              Temple on the way to Tarkeshwar with views of Kathmandu valley
            </figcaption>
          </figure>

          {/* Forest views */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <figure>
              <img
                src="/lovable-uploads/tinpiple-forest1.jpg"
                alt="Lush green forest trail in Shivapuri"
                className="w-full rounded-lg shadow-md h-64 object-cover"
              />
              <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
                Into the forests of Shivapuri
              </figcaption>
            </figure>
            <figure>
              <img
                src="/lovable-uploads/tinpiple-forest2.jpg"
                alt="Dense forest along the hiking trail"
                className="w-full rounded-lg shadow-md h-64 object-cover"
              />
              <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
                The peaceful forest trail
              </figcaption>
            </figure>
          </div>

          {/* Valley view */}
          <figure className="my-8">
            <img
              src="/lovable-uploads/tinpiple-valley.jpg"
              alt="View of Kathmandu valley from the trail"
              className="w-full rounded-lg shadow-md"
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
              Views along the trail
            </figcaption>
          </figure>

          {/* Group photo */}
          <figure className="my-8">
            <img
              src="/lovable-uploads/tinpiple-group.jpg"
              alt="Wondervibes group photo on the trail"
              className="w-full rounded-lg shadow-md"
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
              The Wondervibes team
            </figcaption>
          </figure>

          <p className="text-justify">
            Army camp to Gurje Bhanjyang was a little different task as it started raining and struggle with leach was hilariously astounding. There is a saying by Albert Einstein 'Look deep into nature, and then you will understand everything better'. We were getting deep inside the nature: the green forest, raining, walking on a wet and slippery soil, fighting with leach, listening to river flow, hearing the chattering of leaves. We missed Surya Chaur as we had no time.
          </p>

          {/* Rain and trail photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <figure>
              <img
                src="/lovable-uploads/tinpiple-rain.jpg"
                alt="Rainy trail from Army camp to Gurje Bhanjyang"
                className="w-full rounded-lg shadow-md h-64 object-cover"
              />
              <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
                Rain on the trail
              </figcaption>
            </figure>
            <figure>
              <img
                src="/lovable-uploads/tinpiple-leech.jpg"
                alt="The trail through the wet forest"
                className="w-full rounded-lg shadow-md h-64 object-cover"
              />
              <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
                Deep inside nature
              </figcaption>
            </figure>
          </div>

          <p className="text-justify">
            Nearly half an hour moving downward from Gurje Bhanjyang we came to the destination 'Jhor'. Jhor is a historical and religious place where the powerful god of Hinduism Lord Shiva is celebrated as 'Baruneshwar Mahadev'. Many devotees come and worship here. A cave inside which three statues are worshipped for their purpose. Jhor is known for the beautiful waterfall during the rainy season. But we were here in the offseason. Though we enjoyed the nature and the greenery that surrounds Jhor. Here people come with families and friends to pass their days with fun and enjoyment. Here, we observed the beauty of Jhor and got ready for the farewell of this hike.
          </p>

          {/* Jhor photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <figure>
              <img
                src="/lovable-uploads/tinpiple-jhor.jpg"
                alt="Jhor - the destination of the hike"
                className="w-full rounded-lg shadow-md h-64 object-cover"
              />
              <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
                Jhor
              </figcaption>
            </figure>
            <figure>
              <img
                src="/lovable-uploads/tinpiple-waterfall.jpg"
                alt="Waterfall area near Jhor"
                className="w-full rounded-lg shadow-md h-64 object-cover"
              />
              <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
                The waterfall area
              </figcaption>
            </figure>
          </div>

          {/* Cave and Shiva */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <figure>
              <img
                src="/lovable-uploads/tinpiple-cave.jpg"
                alt="Cave at Jhor with religious statues"
                className="w-full rounded-lg shadow-md h-64 object-cover"
              />
              <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
                The cave at Jhor
              </figcaption>
            </figure>
            <figure>
              <img
                src="/lovable-uploads/tinpiple-shiva.jpg"
                alt="Baruneshwar Mahadev at Jhor"
                className="w-full rounded-lg shadow-md h-64 object-cover"
              />
              <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
                Baruneshwar Mahadev
              </figcaption>
            </figure>
          </div>

          <p className="text-justify">
            There is a river which we can not cross and that is nature. We can never finish exploring, enjoying, and feeling nature. I hope the following river never stops and the greenery never fades. Nepal has enormous natural beauties and we can explore easily. The team of wondervibes is not going to stop. We will explore the best we can. This is our journey of exploring the naturally prosperous Nepal.
          </p>

          {/* Final photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <figure>
              <img
                src="/lovable-uploads/tinpiple-greenery.jpg"
                alt="Lush greenery surrounding Jhor"
                className="w-full rounded-lg shadow-md h-64 object-cover"
              />
              <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
                The greenery of Jhor
              </figcaption>
            </figure>
            <figure>
              <img
                src="/lovable-uploads/tinpiple-river.jpg"
                alt="River near Jhor"
                className="w-full rounded-lg shadow-md h-64 object-cover"
              />
              <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
                The river that never stops
              </figcaption>
            </figure>
          </div>

          <figure className="my-8">
            <img
              src="/lovable-uploads/tinpiple-farewell.jpg"
              alt="Farewell photo of the Wondervibes team"
              className="w-full rounded-lg shadow-md"
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
              The Wondervibes — exploring the naturally prosperous Nepal
            </figcaption>
          </figure>

          <p className="text-justify italic text-muted-foreground text-center text-xl">
            The team of Wondervibes is not going to stop.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TinpipleTravelogue;
