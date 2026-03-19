import { Copy, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import PlantGallery from "./PlantGallery";

const TravelogueSection = () => {
  const copyToClipboard = (text: string, title: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `"${title}" has been copied to clipboard.`,
    });
  };

  const fullText = `The sudden Thaple - June 18, 2020`;

  return (
    <Card className="overflow-hidden shadow-earth hover:shadow-lg transition-shadow duration-300">
      {/* Hero Image */}
      <div className="relative">
        <img
          src="/lovable-uploads/thaple-panorama.png"
          alt="Panoramic view from Thaple peak - green hills and valleys of Syangja"
          className="w-full h-72 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-3xl md:text-4xl font-bold text-white font-heading mb-2">
            The sudden Thaple
          </h3>
          <p className="text-white/80 text-sm">June 18, 2020</p>
        </div>
      </div>

      <CardContent className="p-6 md:p-10 bg-gradient-to-b from-muted/30 to-background">
        <div className="flex items-center justify-between mb-8">
          <a
            href="https://anilregmi9.blogspot.com/2020/06/the-sudden-thaple.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Read on Blogspot
          </a>
          <button
            onClick={() => copyToClipboard(fullText, "The sudden Thaple")}
            className="p-2 hover:bg-muted rounded-full transition-colors"
            title="Copy travelogue"
          >
            <Copy className="w-5 h-5 text-muted-foreground hover:text-primary" />
          </button>
        </div>

        <div className="prose prose-lg max-w-none text-foreground/90 font-serif space-y-6">
          <p className="text-justify first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            Firstly, the paragraphs accumulate the feelings and memories of my hike to Thaple. The Thaple peak is one of the highest peaks of the Syangja district. Kharsu peak and Thaple peak are of beautiful views from our places. We were raised seeing these peaks. So, it was a desire to be there someday. Though these peaks lie approx. 2050m from sea level and Syangja Bazar lie approx. 870m, being seen nearer but most of the people of Syangja have not been there. It took us all nearly 10 years after we wanted to be here. The peak seems skyscraping and shows people fear walking to the peak, I guess. These days youth from whole Nepal are influenced by the trend of visiting local places and its impact is more scattered by social media. These days Thaple and Kharsu peaks are becoming common hiking destinations for local youth.
          </p>

          {/* Image: Between Sataun and Kharshugau */}
          <figure className="my-8">
            <img
              src="/lovable-uploads/thaple-rest-stop.png"
              alt="Between Sataun and Kharshugau - hikers resting"
              className="w-full rounded-lg shadow-md"
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
              Between Sataun and Kharshugau
            </figcaption>
          </figure>

          <p className="text-justify">
            We four (Sajan, Sameer Prashant, and me) started our journey from Narayansthan, Syangja. My friends were also very interested to be there as I was. The journey had a bonzer beginning all because of Araudi Khola, Badkhola, and Andhi Khola. Crossing these three rivers and leaving them behind, we headed towards the Fulbari and continued our walk up to the Sataun Maidan. Up to Sataun we have traveled many times and was always fun. We choose Syangja-Amdada-Sataun roadway. But most hikers enjoy the trip starting from Lamage and hiking through the Gahate-Sataun Chandi Mandir-Sataun Kot- Sataun Maidan trail. Walking the way with the beautiful views of Andhi Khola and hills around never let us feel tired. Sometimes leaving the blacktopped road and walking on a short route(Goreto) that seemed to be the old walking track was fun.
          </p>

          {/* Image: Flatland below Thaple peak */}
          <figure className="my-8">
            <img
              src="/lovable-uploads/thaple-foggy-field.png"
              alt="The flatland below Thaple peak - misty green field"
              className="w-full rounded-lg shadow-md"
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
              The flatland below Thaple peak
            </figcaption>
          </figure>

          <p className="text-justify">
            Prakash from Sataun (village with nearly 200 houses overall which hikers must cross during the hike) helped us with a bag and bottle to carry water and food. He came with us to the shop nearly a hundred meters upward from his house. We just got inside a house where there seemed to be no shop but there was. The place was not like a shop but an arsenal as used to be in the village areas. There came a sweet voice which was a lady taking Sajan's name. The lady in the shop was a friend/sister of our friend or was from the same village. After they had some conversations we bought some food to support our journey. Prakash accompanied us to the place where the roadway finishes and foot trail starts.
          </p>

          {/* Images: Kharshu peak and prayer spot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <figure>
              <img
                src="/lovable-uploads/thaple-hilltop-trees.png"
                alt="At the peak of Kharshu - trees and stone steps in fog"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
                At the peak of Kharshu
              </figcaption>
            </figure>
            <figure>
              <img
                src="/lovable-uploads/thaple-prayer-spot.png"
                alt="Place for praying god - stone shrine with ferns"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
                Place for praying god
              </figcaption>
            </figure>
          </div>

          <p className="text-justify">
            The climate seemed cool and foggy which was good for walking. The villagers prepared beautiful steps of rock slabs which made the walk easy. Walking on the steps inhaling the natural air and talking with friends about it was more than fun. The songs of birds were making the journey more beautiful. This place might be a good place for birdwatching as we saw many birds roaming around some near and some in a distance.
          </p>

          {/* Image: Cliff and greenery */}
          <figure className="my-8">
            <img
              src="/lovable-uploads/thaple-cliff-view.png"
              alt="Cliff near Thaple - dramatic cliff face with green valleys"
              className="w-full rounded-lg shadow-md"
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
              Cliff
            </figcaption>
          </figure>

          <p className="text-justify">
            The beautiful seepage of water made the rock brighter in some places. And more heavenly is the collection of water drops which might be useful for travelers. I don't know whether it was because of the season or is evergreen but in the seepage area, the green hanging plants were looking ravishing. The name of that plant is Campyloneurum Costatum which I searched on google lens. After some walk, we reached Kharsugaun, Gurung village, the ironic thing is that there are few people living in the village. Most of them left the village. Sagar, a friend of ours, from the same village also left for Pokhara with his whole family after being an Indian Army. The place now has barren lands with less cultivation and all the houses were changing to wreck. The context is not only at Kharsugaun, but this is also the representation of most of the villages of Nepal.
          </p>

          <p className="text-justify">
            I was clicking the pictures of all the plants seen on the way. I was ignoring the trees but all the small plants kissed my camera. Sajan and Sameer, who are working as engineering, were talking about the startups and Prashant, the one from management was talking about the Mediation. I was saying either yes or no but seeing geological features I was not able to stop myself from explaining them to my friends.
          </p>

          {/* Image: View of Sataun and surrounding peaks */}
          <figure className="my-8">
            <img
              src="/lovable-uploads/thaple-panorama.png"
              alt="View of Sataun Gaun and other peaks surrounding Syangja Bazar"
              className="w-full rounded-lg shadow-md"
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
              View of Sataun Gaun and other peaks surrounding Syangja Bazar
            </figcaption>
          </figure>

          <p className="text-justify">
            Geologically, the area lies in the Lesser Himalaya of western Nepal. The journey starts with the exposures of Quartzite rock and ends with phyllites. The steps were mostly made of quartzite slabs. The quartzite of this area was thin to medium in thickness and white in color. The age of these rocks is Proterozoic Eon. Being one of the hardest rocks found locally, Quartzite is used in all the local construction works in this area. Even the 'Chautari' has most of the quartzite. The shining phyllites can be seen when sunlight hits the ground.
          </p>

          {/* Image: Misty peak */}
          <figure className="my-8">
            <img
              src="/lovable-uploads/thaple-misty-peak.png"
              alt="View of Syangja Bazar and Sataun Village through the mist"
              className="w-full rounded-lg shadow-md"
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
              View of Syangja Bazar and Sataun Village
            </figcaption>
          </figure>

          <p className="text-justify">
            The foggy climate was not making us able to watch the peaks during our walk. But continuing the walk we reached a peak of Kharshu. Stopped there, took rest, and had some food. The leeches stuck on our bodies were removed. Leeches were stuck on our legs sucking blood which was filthy but also adventurous. Though everything was unclear we were still searching the peak where we targeted to go which was venturesome. After walking some way uphill we reached the peak. Staying at the peak, the fog got a little clear and we saw another peak with some blue colored zinc sheets the same as we were staying at. Then we moved to that peak. We were at the peak and had nothing to see from there. Then the Sataun friend called and said there is more to go to reach Thaple. We heard and started moving. The trail now was little downhill and a little smoother. Going downhill we found a place to take rest viz. 'Chautari'. During our stay, a group of people came from downhill and we talked. They were also from Syangja and going to Thaple. One of them honestly asked for weed but we didn't have.
          </p>

          <p className="text-justify">
            After the group left us we also moved towards Thaple knowing nothing about the peak and way. We were just following the foot trail and had confidence that the trail will lead to the destination. The fog was too much thicker that we could not see 2-3 meters far. Moving uphill now we found a flatland with some buffalos enjoying in the 'Pokhari'. There we stayed for a while to feel the beauty of greenery and flatland in the height. This was the place where a senior of ours talked about making a football stadium. This place is flat and something new can be done here. I guess Some parks or even the ground might be possible to construct.
          </p>

          {/* Image: Kharshugaun houses */}
          <figure className="my-8">
            <img
              src="/lovable-uploads/thaple-kharshugaun-houses.jpg"
              alt="Houses at Kharshugaun - traditional village houses"
              className="w-full rounded-lg shadow-md"
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
              Houses at Kharshugaun
            </figcaption>
          </figure>

          <p className="text-justify">
            Leaving flatland behind we walked uphill now but the fog was even thicker to see things around. We thought that we were following the trail but we didn't. We lost near the flatland for a while, a friend moved upward to find the trail but he failed. We three were down there searching the trail. After a few minutes, we found a small trail that is not for humans but for buffalos and goats for grazing.
          </p>

          <p className="text-justify">
            Anyways, we found the way and moved to the peak. There was something that astonished us all. There was all up a sudden extremely beautiful and mesmerizing view with a huge statue. That was a huge statue of Buddha which was under construction. The painting work was going on. There was remarkably beautiful ground on the peak with some homestay. But because of the COVID-19 pandemic, we were not allowed to enter the hotels. This place is the Thaple peak. The beautiful views of most of the parts of the Syangja District can be seen from here. We saw the rivers and villages and started identifying them. Because of fog, the view was not clear totally but it used to become clear for some times and again the thick fog covered it all. The covering and clearing continued the whole day. But we just enjoyed the scene. The Andhikhola rural Municipality on the northwest, Arjunchaupari rural municipality on the southwest, and Pulatibazar Municipality on the Southeast can be seen from this place.
          </p>

          {/* Image: Buddha statue at Thaple peak */}
          <figure className="my-8">
            <img
              src="/lovable-uploads/thaple-buddha-statue.jpg"
              alt="At the peak of Thaple - four friends sitting in front of the Buddha statue under construction"
              className="w-full rounded-lg shadow-md"
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
              At the peak of Thaple
            </figcaption>
          </figure>

          <p className="text-justify">
            We returned after some while. During our return, there was a place where we sit for more than half an hour to watch the view of Syangja Bazar, Sataun, and the red cliff. There was a red cliff near the place we rested. The cliff was far more beautiful.
          </p>

          <PlantGallery />

          <p className="text-justify">
            After this huge try to know about these plants, I found "Chutro" is called Berberis Aristata. The scientific name of ''Arubakhada'' is Chickasaw Palm, ''kafal'' is Rubus Ellipticus, ''Gholtapre'' is Centella Asiatica.
          </p>

          <p className="text-justify">
            There is nothing I can describe except my enjoy seeing the views. The views were all clear while returning. The greenery was the most attractive part of the whole trip.
          </p>

          <p className="text-justify">
            In the end, the place is exceedingly beautiful and worth taking a walk. The place can be a good destination for birdwatching also. The place is not so far from Syangja Bazar. There are homestays to stay at and lots more experiences to gain. The place is accessible by road also if the mood is of seeing Syangja Bazar and the surrounding from the highest peak. From Pokhara also it is accessible for bikers and for other vehicles also. I didn't see the snowfall because it was not the season and also there are lots of Rhodondern trees that we only saw the tree but in the season the hill is filled with red Rhodondern flowers as said by local people. And now from the religious point of view, the under constructing Buddha Statue shows that it would be a great destination for Buddhists.
          </p>

          <p className="text-justify italic text-muted-foreground">
            Its nearer but people are thinking wider and their wideness do not cover the most interesting places near them. This might be the impact of globalization.
          </p>

          <p className="text-justify">
            I was quite sure about the name 'Kharsugaun' that the name was kept after the plant named "Kharsu'' and after searching on the internet I found that the plant is ''Quercus Leucotrichophora'' and is widely found in this area. I verified the tree name and got this conclusion. Also, the beautiful Kharsu peak is named after the village Kharsugaun as the closest residence of that peak is Kharsugaun. The local people use to call it 'Kharsu ko dada' i.e. the peak of Kharsu.
          </p>

          <p className="text-justify">
            I wish my friend from Sataun had been with us so that many instances of history can be heard and their physical evidence can be seen. As it is the historical place there are lots more to know. I will try to collect more interesting things on my next trip.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TravelogueSection;
