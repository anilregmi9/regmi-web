import { Copy, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const MardiTravelogue = () => {
  const copyToClipboard = (text: string, title: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `"${title}" has been copied to clipboard.`,
    });
  };

  return (
    <Card className="overflow-hidden shadow-earth hover:shadow-lg transition-shadow duration-300">
      {/* Hero Image */}
      <div className="relative">
        <img
          src="/lovable-uploads/mardi-group.jpg"
          alt="Group photo at Mardi Base Camp 4500m with friends and Nepali flag"
          className="w-full h-72 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-3xl md:text-4xl font-bold text-white font-heading mb-2">
            Mardi with Friends
          </h3>
          <p className="text-white/80 text-sm">A trek to Mardi Base Camp (4500m)</p>
        </div>
        {/* Friend labels on the photo */}
        <div className="absolute top-4 right-4 bg-black/50 text-white text-xs p-3 rounded-lg backdrop-blur-sm max-w-[200px]">
          <p className="font-semibold mb-1">Left to Right:</p>
          <p>Sadikshya, Rajan, Pratik, Sabina, Samir, Jyotsna, Sajan, Me (Anil)</p>
        </div>
      </div>

      <CardContent className="p-6 md:p-10 bg-gradient-to-b from-muted/30 to-background">
        <div className="flex items-center justify-end mb-8">
          <button
            onClick={() => copyToClipboard("Mardi with Friends", "Mardi with Friends")}
            className="p-2 hover:bg-muted rounded-full transition-colors"
            title="Copy travelogue"
          >
            <Copy className="w-5 h-5 text-muted-foreground hover:text-primary" />
          </button>
        </div>

        <div className="prose prose-lg max-w-none text-foreground/90 font-serif space-y-6">
          <p className="text-justify first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            Gathering with friends is one of life's greatest joys. It's not just about having friends, but making time to come together, share memories, and talk about life's ups and downs. In my friend circle, planning a get-together is always tricky—someone is always "too busy." But there's always that one friend who brings everyone together. For me, that friend is Sajan. The moment he steps in, plans fall into place, and the fun begins.
          </p>

          <p className="text-justify">
            It is a diary of my gathering with my school friends. This time the togetherness was going up to Mardi Himal. A hike or a trek to the mountain with friends is always a great moment which I've experienced before during our previous meet's also. But this time it was a little challenging trip as we were making it to the highest till date i.e. Mardi Base Camp at 4500m from the sea level. It was the day just after Vijaya Dashami (the main day of the festival Dashain) we started our trip. Talking about my friends, the photo above captures some of my closest companions from school. This group represents not just friendships, but years of shared memories, laughter, and strong bonds that continue to stay with us. I missed Sangam a lot.
          </p>

          <p className="text-justify">
            Firstly, we the team of 8 people gathered at Prithvi Chowk, Pokhara. We bought the food and other stuff needed for the trip. We travel by bus from Prithvi Chowk to Kande. And we started to travel on foot from Kande. There are too many stairs to travel uphill from Kande. We reached Dhampus after more than an hour of traveling uphill. We took some rest, had some food, and had fun there. Then we got ready to move towards our destination though it was far from there. While traveling uphill from Dhampus our team scattered. Some moved too faster and some slower. All of us were yattering with each other as well as with the strangers who also had the same route to travel. As Pokhara and the surrounding mountains are very famous worldwide, we encountered tourists from different countries and become their mates during the travel. They had their destinations; some are going to ABC, Some to Ghandruk, Some to other places, and some to Mardi Base camp. All are here to feel nature and make their vacation glorious. The area between Dhampus and the next stop i.e. Pothana is a green lane with the cool natural tonic.
          </p>

          <p className="text-justify">
            I really loved Pothana—it's my personal favorite. I'm especially drawn to places where you can stay surrounded by lush green forests while enjoying views of white snow. Being Nepali, daal bhaat tarkari (lentils, rice, and vegetables) is naturally our favorite meal, and after having lunch at Pothana, we continued our journey with renewed energy. As we moved uphill, we stopped to rest at a chautari, where two people were already there. We sat together and started a conversation. One of them was a foreigner from Ireland who had already visited Nepal three times. We had a fun and engaging chat that lasted until our slower friends caught up, and then we continued on our way. Further along the trail, we met a lady traveling with her porter. I spoke with both of them, and she shared that she was from Thailand and traveling alone. She was heading to Landruk that day and planned to reach ABC in the coming days. What surprised me the most was her age, I initially thought she was around 25–30, but during our conversation, I learned she was actually 55. After that, our paths separated; we continued toward Forest Camp, while she took the route to Landruk.
          </p>

          <p className="text-justify">
            As it grew darker, the sun disappeared from view at Forest Camp and night began to set in. We decided to head toward the rest camp, which turned out to be a wise choice for the following day. By the time it was the first night of the trip and we were all exhausted and ready to sleep, though a few of us wanted to have a sip of 'rum' first but first, we booked three rooms at the rest camp. Before dinner, we had some drinks, partly to cope with the intense cold and the rain. The weather added to our stress, as we were worried that the route might be affected the next day. After dinner, we spent time talking about childhood memories and recent experiences. These conversations helped us reconnect, learn more about one another, and even reflect on ourselves. We appreciated some of our friends' life choices, while others were met with surprise or disagreement. After a while, we went to rest.
          </p>

          <p className="text-justify">
            Although it was a heavy rain last night, the second day starts with a good sunny morning which motivated us to move forward. We started our trip as soon as possible. We moved forward and took rest only after reaching low camp where we had breakfast but two of our friends had moved forward without waiting. We, the team of 6, had our breakfast and followed the route again. Moving further uphill we left all the big trees behind and following the route to the white peak of Machhapuchhre whose peak only is seen from Bhanjyang due to huge fog. The route was like giving us some courage that we worked hard in the woods which lead us to this beautiful destination and if we work harder in these beautiful hills we can get even better destinations.
          </p>

          {/* Machhapuchhre through clouds */}
          <figure className="my-8">
            <img
              src="/lovable-uploads/mardi-machha.jpg"
              alt="Peak of Machhapuchhre seen through clouds from the Mardi trail"
              className="w-full rounded-lg shadow-md"
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
              The peak of Machhapuchhre seen through the fog
            </figcaption>
          </figure>

          <p className="text-justify">
            The peak of Machhapuchhre seen from Bhanjyang was like the aircraft of fog is carrying the beautiful piece of the Snow to Heaven. We followed the fog but the fog already ate the beautiful piece of snow. We started singing and dancing and having fun with different funny chats. We were talking about the teachers and some friends from school which recalled school moments. We took photographs in many places. Photoshoots made our travel a little slower. Though we know that it was taking the time we did not want to leave the scenes without capturing in our cameras too.
          </p>

          <p className="text-justify">
            As we climbed higher, the tall trees gradually disappeared, and we followed the path toward the white peak of Machhapuchhre, which was only partially visible from Bhanjyang due to thick fog. The journey itself felt rewarding, as if the effort we had put in through the forest had brought us to this stunning landscape and pushing forward might lead to even more breathtaking places.
          </p>

          {/* Trekkers with Machhapuchhre */}
          <figure className="my-8">
            <img
              src="/lovable-uploads/mardi-trekkers.jpg"
              alt="Trekkers silhouetted against Machhapuchhre peak at dawn"
              className="w-full rounded-lg shadow-md"
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
              On the trail with Machhapuchhre in the background
            </figcaption>
          </figure>

          <p className="text-justify">
            The day was full of enjoyment. We reached High Camp on time and looked for rooms, only to find that our two friends who arrived earlier had booked the only one available. We decided the girls would take that room, while the five of us stayed in the dining hall. In the end, the dining hall turned out to be the better option, as it was warmer than the other rooms. It was a short but comfortable night.
          </p>

          <p className="text-justify">
            Before sleeping, the other travellers and porters informed that the next morning we had to begin our journey at 3 AM. This confused us at first as we couldn't understand why such an early start was necessary. The reason only became clear to us later, on our way back.
          </p>

          <p className="text-justify">
            Following the information, we woke up around 3:00 AM, still half-asleep and shivering from the cold, and began our trek at exactly 3:30 AM. When we started, we could see many people ahead of us on the hills, their lights visible even from about half an hour away. The temperature was so low that even walking felt difficult, and every step required effort. The trail was already crowded, with more than a hundred trekkers steadily making their way up the steep mountain in the dark. Headlamps and flashlights created a long, glowing line along the path, and we quietly followed the flow.
          </p>

          <p className="text-justify">
            We paused there for a while, waiting for the sunrise. Standing at the highest point we had ever reached, we watched as the sky slowly began to change colors. The darkness gradually faded, replaced by shades of orange and gold, and the first rays of sunlight touched the surrounding peaks. The moment felt surreal and deeply rewarding, making all the effort of the climb worthwhile. We came to know that at the rest point we can see beautiful sunrise which was the reason to come early.
          </p>

          <p className="text-justify">
            As the light spread, the beauty of the landscape became clearer, revealing breathtaking views that we could only partially imagine in the dark. The cold air, the silence of the mountains, and the shared excitement among trekkers made the experience unforgettable.
          </p>

          {/* Landscape view */}
          <figure className="my-8">
            <img
              src="/lovable-uploads/mardi-landscape.jpg"
              alt="Mountain landscape view from Mardi trail - green hills with snow-capped peaks"
              className="w-full rounded-lg shadow-md"
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
              The breathtaking landscape from the Mardi trail
            </figcaption>
          </figure>

          <p className="text-justify">
            After spending some time there, taking in the view and capturing photos, we prepared to continue further. We reached that point, but we still wanted to go further. The place was incredibly enjoyable, something completely new to us and it felt truly mesmerizing. Along the way, we captured several photos to preserve those moments.
          </p>

          <p className="text-justify">
            After spending about 2–3 hours at the base camp, most trekkers began heading back, and the porters also warned us about strong winds. We decided to return as well. However, I stayed behind for a while after my friends had left, sitting quietly and admiring the green mountain peaks to the south while being surrounded by snow-covered heights. It deepened my appreciation for such views though I usually prefer sitting among greenery and looking toward snowy peaks.
          </p>

          <p className="text-justify">
            There was also a small lake reflecting the surrounding mountains, which became a favorite point for many visitors. It added even more beauty to the already stunning landscape.
          </p>

          <p className="text-justify">
            It's clear that no one can stay in such a place for long, but moments like these are truly priceless. The experience taught us an important lesson that effort never goes to waste. On the first night, we had worried about rain and bad weather, but by holding onto hope and continuing forward, we were rewarded with an incredible experience. Eventually, it was time to head back home. A part of me wished we could have stayed longer, but our faster-paced friends were eager to move on. Still, there were no regrets, it was a wonderful and fulfilling journey.
          </p>

          <p className="text-justify">
            One important lesson for trekkers is to use proper gear and equipment. During the descent, especially on steep paths, we struggled, and our fingers became quite strained. I would suggest future travelers allow at least a couple of extra days to truly enjoy the journey instead of rushing through it.
          </p>

          <p className="text-justify">
            While returning, it took us two days to reach Pokhara, whereas some of our friends made the journey in just one day. In the end, we all got back to Pokhara and then headed our separate ways toward home.
          </p>

          {/* Final photo */}
          <figure className="my-8">
            <img
              src="/lovable-uploads/mardi-flag.jpg"
              alt="At Mardi Base Camp with Nepal flag and Machhapuchhre peak"
              className="w-full rounded-lg shadow-md"
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
              Forever in Memory
            </figcaption>
          </figure>

          <p className="text-justify italic text-muted-foreground text-center text-xl">
            Forever in Memory.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MardiTravelogue;
