import { useState } from "react";
import { Copy, ChevronRight, BookOpen, Feather } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

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
  { id: "banduk", title: "बन्दुक: द्वन्द्वदेखि दैनिकीसम्म", category: "essay", image: "/lovable-uploads/banduk-essay.jpg", imageAlt: "Farmer in corn field, mid-hills Nepal" },
];

const categoryIcon: Record<string, React.ReactNode> = {
  poetry: <Feather className="w-4 h-4" />,
  essay: <BookOpen className="w-4 h-4" />,
};

const categoryLabel: Record<string, string> = {
  poetry: "Poetry",
  essay: "Essay",
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

  const essayAchanakKheleko = `केही हप्ता अगाडि कास्की जिल्लाको सेती खोलाको तिरमा बन्न लागेको जलबिधुत आयोजनाको हेड वर्क्समा पुगेर केही समय क्याम्पमा बसेको बेला यस्तो लेखेको रहेछु फोनमा।

        गड्याङ गुडुङ नै भएपनि ब्याकग्राउन्ड संगीत जस्तो काम गर्दै छ सेतीको आवाज। रसुवा कन्स्ट्रक्सन र लुना कन्स्ट्रक्सनको संयुक्त उद्यममा बन्न लागेको सेती हाइड्रोपावरको कामको थालनी हुँदै रहेछ। अलि माथि गएपछि भाराभुरी गाउँ आउँछ रे। म निर्माणको लागि बसेको क्याम्पको अगाडी प्लास्टिकको कुर्सीमा बसेर वरपर वातावरण नियाल्दै छु। माथि पट्टी जंगल अनि चट्टानको पहरो अनि फेरि जंगल अनि त्यो माथि सेतो कुहिरो। यहाँ भन्दै हुनुहुन्छ कि त्यो कुहिरो पछाडि माछापुछ्रे छ रे। मलाई पनि विश्वास लाग्यो किनकि यहांको भूगोल केही हद सम्म थाहा छ मलाई। मैले म्याप्स मी भन्ने एप खोलेर हेर्दै गए, तल हामी आएको तातोपानी र चौर भन्ने ठाउँ देखाएको छ। अनि एउटा बाटो छ जुन म हेर्दै जाँदै छु, त्यो त मार्दी हिमालको बेस क्याम्प जाने ट्रेकिङ ट्रेल रहेछ। माथि पनि अर्को हाइड्रो पावरको काम हुँदैछ रे। यो चाहिँ २५ मेगावाटको टनेल बिनाको हाइड्रो पावरको काम हुँदै रहेछ। मैले सोधें यहांको एक जना प्राविधिकलाई "कति छ हेड?' उत्तर आयो १६५ नेट हेड। ए सही हो, अनि यो माथि बन्न लागेको ड्याममा फ्लासिङ र इनलेट कता-कता हुन्छ? उत्तर आयो यहाँ यहाँ। खोलाको छेउ मै रहेको हेड वर्कमा क्रसर राख्नको लागि पर्यवेक्षक ल्याउन लागेको रहेछ त्यही क्रममा रसुवा कन्स्ट्रक्सनको एक जना दाईसंग आएको छु यहाँ। बर्खा अली मज्जैले लागेको बेला यो ३-४ दिन देखि नदेखिएको घाम आज बल्ल देखिएको छ। वरपर पुरै हरियो मात्र छ। र हरियो को बीचमा सेतो रंगको धर्का हरु धेरैनै। ती सेता धर्काहरु चाहिँ झरनाहरु हुन। बर्खामा यो भेगमा यस्ता धर्काहरु गजबले देख्न पाइन्छ। सेतीको कलकलमा रमाउन मन लागेर केही समय अगडि सेतीको तिरमा पुगेर बसेको थिए, नाइस(एक चट्टान) माथि। नाइस भित्र माइका अनि गार्नेट र टुर्मालिन मज्जाले देख्न पाइन्थ्यो। मैले अनुमान लगाएँ की यहाँ नजिकै थ्रुस्ट (टेक्टोनिक प्लेटको टकरावका कारण बनेको भौगर्भिक संरचना)  हुन पर्छ भनेर। घर गएर हेर्न पर्ला।

        खाना खाने बेला सबै बस्दा छुट्टै रमाइलो थियो क्याम्पमा। श्रावन महिना भएकोले खानामा मासु लिइन। यो पाली पहिलोपटक श्रावन महिना बारेको छु। क्याम्पको  मेसमा सबैजना बसेर खाना खाँदा रमाइलो हुन्छ। साइटको एक जना महत्त्वपूर्ण सरले पनि मासु नखाने हुनाले साथी पाइयो। नत्र साँच्ची नै क्याम्पमा मासु भनेको रौनकको कुरा हो। हप्ताको २ दिन बुधबार र शनिबार मासु हुने रहेछ। परिचयको क्रममा यहांको लेखा हेर्ने हाम्रै उमेरको एक जना सरसँग कुरा भयो। इलामको हुनुहुँदो रहेछ। अनि निस्कीहल्न पर्यो बाहिरबाट आवाज आएर।

        रसुवा कन्स्ट्रक्सनको काम भएर होला काम गर्ने, सुपर्भाइस गर्ने, केही प्राबिधिक: लगभग रसुवा र नुवाकोट कै हुनुहुँदो रहेछ। भूगोलको सम्बन्ध साँच्चै नै बलियो हुन्छ। मलाई लिएर आउनुभएको दाई जो रसुवाको हुनुहुन्छ स्याङ्जामा भन्दा यहाँ आफ्नो भूगोलको मान्छे भेट्दा खुशी देखिनुभएको थियो। मलाई भूगोलको सम्बन्ध बलियो हुन्छ भन्ने महशुस भएको त्रिचन्द्र क्याम्पस पढ्दा देखि हो। त्यहाँ भने भूगोल भनेको स्याङ्जा मात्र हुँदैनथ्यो। पश्चिमाञ्चल नै मेरो भूगोल हुन्थ्यो। लगभग मेरा साथीहरु पूर्व देखि पश्चिम सम्मका थिए। राजनीतिमा चाहिँ भूगोलको असर हुने रहेछ तर मित्रतामा भने त्यसको असर कम हुन्छ। तर पनि जब म भूगोलका मान्छे भेट्थे रमाइलो लाग्थ्यो। आफ्नो ठाउँको बारेमा कुराहरु साट्न अनी चिनेका मान्छेहरुको कुरा गर्न छुट्टै रमाइलो हुन्थ्यो। अझै बढी नोस्टाल्जिक त आफ्नो लवजमा बोल्दा भैन्थ्यो।  तर एउटा कुरा भने बुझेको थिएँ कि पोखरा जाँदा पुतलीबजार जुन म बस्ने नगरपालिका हो त्यहाँको मानिस भेट्दा रमाइलो लाग्थ्यो। काठमाडौं वा अन्त जाँदा चाहिँ स्याङ्जा जिल्ला भित्र जहाँको भएपनि रमाइलो लाग्थ्यो। यस्तै विदेश जाँदा नेपाल भनेपछि आफ्नोपन महसुस हुने कुरा साथीहरुले सुनाउँथे। यस्तै हो मान्छेलाई बस रमाउने एउटा बहाना चाहियको छ।

        भूगोल मात्र होइन धेरै कुरा छन् जुन कुराले आफ्नो महसुस गराउँदै जान्छ। जस्तै म यहाँ आएको छु मलाई प्राविधिक हरुसंग कुरा गर्दा आफ्नोपन महसुस हुन्छ। हामीलाई ल्याउनुभएको ड्राइभर दाई यहाँ कन्स्ट्रक्सनको ड्राइभर दाईसँग गफ गर्न व्यस्त हुनुहुन्छ। मलाई ल्याउने ठेकेदार दाई यहांको ठेकेदार सँग नै टाँसिएर बस्नु भएको छ। यस्तै हो मानिस जे सँग पनि रमाउन सक्छ। उता चुरोट खाँदै ड्राइभर दाई अर्को चुरोट खाने कुक दाई सँग गफ गर्दै छन् अनि हाँस्दै छन्, जहाँँ चुरोट पो मान्छे जोड्ने साधन बनिदियो।

        यो ठाउँ गजब हो जहाँ मानिस प्रक्रितीको काखमा, एक अर्कासँग रमायार नै बसिरहेको छ। काम हुने बेलासम्म लगभग ५ बर्ष यिनिहरु संगै हुन्छन होला तर त्यो पछी भने त्यही पुरानो संसारमा जहाँ आफ्नो लागि भन्दा अरुको लागि बाँच्नुपर्ने हुन्छ, जहाँ बुधवार र शनिबार खल्लो हुनेछ अझै लाग्छ बार नै थाहा हुने छैन। सबै आफ्नै भुगोलको मानिस भयपछी यहाँ भुगोलका मानिस भेट्दा हुने नोस्टाल्जिया पनि हुने छैन। संसार फेरी घुमेर त्यही पुग्छ।

यस्तो संसार भोगेर मानिस सोच्न वाध्य हुँदो हो

अहो! जिन्दगी त त्यही जोगीको ठीक हुन्छ कि क्याहो

जिन्दगी नै मागेर बिताउँछ

जिन्दगी डुलेर बिताउँछ

जिन्दगी भरी भोग्छ

जिन्दगीभरी आफ्नै जिन्दगीसँग लुप्त हुन्छ।

अहो! हाम्रो जिन्दगी त नर्क पो रहेछ

मैले रोजेको जिन्दगी त जाल रहेछ

आँफै फँसीरहेछु

फिक्री नै फिक्रिमा बसिरहेछु

तर यस्सो समाज हेर्छु

अनी चित्त बुझाउँछु

जब देख्तछु हरेक व्यक्ती

जसको समाजमा जयजयकार गरिन्छ

जसलाई केही मानिस देउता भनी पुज्न पनि पछी नपर्लान

त्यस्तो मानिस् पनि पत्निको टोकाइ

बच्चाको रुवाइ

आफ्नै दाजुभाइको षड्यन्त्र अनी

प्रतिशपर्धीको जालझेल झेल्न वाध्य छ

हो यसरी चित्त बुझाउँछु

धत लाटा

म भन्दा नर्कमा त अरु हजार छन्।`;

  const essayBanduk = `यो बन्दुक द्वन्द्वकालमा सेना वा माओवादीले प्रयोग गरेको बन्दुक होइन, बरु किसानले आफ्नो अन्नबाली जोगाउन उठाएको हतियार हो। त्यस्ता "आक्रमणकारी" विरुद्ध, जसले उनीहरूको मेहनत लुट्न खेतबारीमै आइपुग्छन्। २०७७ साल असारको कुरा हो। सधैंजसो भेटिने र आवश्यक पर्दा बोलाउने साथी सँगमले एक दिन फेरि बोलायो। "नगरपालिका जाऔँ, बन्दुक लिनुपर्‍यो।" उसलाई नाइँ भन्ने बानी नभएकाले म पनि तुरुन्तै घरबाट झरें। साथीले बन्दुक भन्दा एक प्रतिप्रश्न पनि नगरी हिड्न तयार भए म । सँगम त्यतिबेला मेरो घर नजिकै रहेको अर्को साथी सनमको वर्कसपमा पुगिसकेको थियो। त्यसपछि हामी सँगमकै घर रहेको वडा नं. ३, बाढ्खोलास्थित वडा कार्यालयमा आवश्यक सिफारिस पत्र लिन गयौं। त्यहाँबाट पत्र नगरपालिका कार्यालयमा पुगिसकेको जानकारी पाएपछि हामी त्यतैतर्फ लाग्यौं। म भने घरमै लगाएको सामान्य पोसाक, कालो जाँगे र स्लिभलेस सर्ट मै भएकाले नगरपालिका कार्यालयभित्र पसिन।

मैले बाँदरको उपद्रवबारे धेरै सुनेको छु, र यस्ता घटनाहरू देशभरि बारम्बार दोहोरिँदै आएका छन्। हरेक वर्षजसो बाँदरको आतंकले समाचारपत्रका पहिलो नभए दोस्रो पानामा स्थान पाउन छोड्दैन। हाम्रोतिर बाँदरलाई "लाखु" भनेर चिनिन्छ, र "लाखुले सतायो", "लाखुले बसिखान दिएन", "लाखुले सखाप पार्ने भयो" जस्ता अभिव्यक्तिहरू किसानहरूको दैनिकीझैं बनेका छन्, जुन उनीहरूको पीडा र निराशालाई स्पष्ट रूपमा व्यक्त गर्छन्।

बाँदरको उपद्रव यति बढिसकेको छ कि किसानहरू खेतबारीमै बास बस्न बाध्य भएका खबरहरू सुनिन थालेका छन्। कतिपयले त कुकुर लिएर खेतमै रात बिताएको समेत देख्न पाइन्छ, सायद बाँदर धपाउने एउटा उपायको रूपमा। मैले आफैंले पनि यस्तो दृश्य देखेको छु। जब बाँदरको समस्या असह्य बन्न थाल्यो, तब जनताले आफ्ना जनप्रतिनिधिहरूलाई यस विषयमा आवाज उठाउन आग्रह गर्न थाले। मध्यपहाडी क्षेत्रका झण्डै सबै जिल्लामा बाँदरको बिगबिगी बढेपछि किसानहरू चुप लागेर बस्न सकेनन् । कहिले उनीहरू मार्न पाउनुपर्ने माग गर्दै आक्रोशित भए, त कहिले विभिन्न उपाय खोज्न थाले। संसदमा यस विषयलाई गम्भीर रूपमा समयसमयमा आवाज उठाएको देखिन्छ। तर समस्या राष्ट्रिय स्तरको भए पनि यसको समाधानका लागि राष्ट्रिय तहबाट ठोस पहल भएको भने खासै देखिँदैन; हालसम्म भएका प्रयासहरू मुख्यतः स्थानीय तहमै सीमित छन्।

बाँदरको बढ्दो समस्या देखेपछि यसको बारेमा कत्तिको अध्ययन भएको होला भन्ने जिज्ञासा लागेर मैले इन्टरनेटमा खोजें। अध्ययन त प्रशस्तै भएको रहेछ, तर त्यसबाट निस्किने ठोस नतिजा भने अझै अस्पष्ट देखिन्छ। जहाँसुकै बाँदर देखिनु अहिले वातावरणविद्हरूका लागि अध्ययनको विषय बनेको छ, तर अध्ययन केवल कागजमै सीमित रहनु पर्याप्त होइन । यसले व्यवहारिक समाधान दिन सक्नुपर्छ।

बाँदर किन गाउँ पस्छन् भन्ने प्रश्नमा धेरैजसो उत्तर "खानाको अभाव" मा गएर टुंगिन्छ। तर यहाँ फेरि अर्को प्रश्न उठ्छ । जंगलले ठूलो भूभाग ओगटेको देशमा जंगली जनावरलाई खानेकुराको कमी किन भयो? विभिन्न स्रोतहरूमा पढ्दा के पाइन्छ भने बाँदरलाई मकै अत्यन्तै मनपर्छ। त्यस्तै आलु र सखरखण्ड पनि उनीहरूको रोजाइमा पर्छ। तर धान, कोदो, गहुँजस्ता अन्नबाली भने उनीहरूले बाध्यतामा मात्र खाने गर्छन् । जब अन्य विकल्प हुँदैनन्। यसले स्पष्ट देखाउँछ कि बाँदर "जे भेट्यो त्यही खाने" प्राणी होइन, बरु रुचि र छनोट भएको जीव हो। त्यसैले, बाँदरले कुन बाली खान्छ, कुन खान्न, कुन ठाउँमा जान्छ र कुन ठाउँबाट टाढा बस्छ। यी सबै कुराको व्यवस्थित अध्ययन हुनु आवश्यक छ। अहिले यस्ता अध्ययनको अभावमा समस्या झन् जटिल बन्दै गएको छ। त्यसैले आजभोलि बाँदर घरभित्रै पसेर अन्नबाली नष्ट गरेको खबर सर्वत्र सुनिन थालेको छ।

यस सन्दर्भमा दीर्घकालीन समाधान भनेको जंगलमै बाँदरका लागि उपयुक्त वातावरण सिर्जना गर्नु हो। अहिलेका जंगलमा कटुस, मौवा र चिलाउने जस्ता रुखहरू भए पनि बाँदरलाई आकर्षित गर्ने फलफूलको पर्याप्त व्यवस्था छैन। यदि जंगलमै बाँदरलाई मनपर्ने फलफूलका बिरुवा लगाइयो भने उनीहरू आफ्नै बासस्थानमा रमाउन सक्छन् र गाउँ पस्ने आवश्यकता पनि घट्छ। यसले मानिसलाई पनि फलफूलबाट फाइदा पुग्नेछ। जंगली वा अर्धजंगली रूपमा उपयुक्त फलहरूमा काफल, ऐंसेलु, जामुन, बेल, चिउरी (मौवा), कटुससँगै फल दिने प्रजातिहरू, डुम्री (जंगली अंजीर), बयर, करौंदा जस्ता झाडी तथा रुखहरू पर्छन्। यस्ता बिरुवाहरू पहाडी र मध्यपहाडी क्षेत्रमा सजिलै हुर्कन्छन् र बाँदरका लागि प्राकृतिक आहारको स्रोत बन्न सक्छन्।

यद्यपि बाँदरलाई टाढा राख्ने अन्य उपायहरू पनि अपनाइएका छन्। उदाहरणका लागि, उत्तरगया गाउँपालिकामा "बाँदर घाँस" प्रयोग गरिएको छ, जसको गन्ध, बनावट र झुसयुक्त प्रकृतिका कारण बाँदर त्यसतर्फ नजिकिनै चाहँदैन। यस्तै, नक्कली सर्प राख्दा पनि बाँदर डराएर टाढा बस्ने गरेको पाइन्छ। विदेशमा त अझ प्रविधिको प्रयोग गरिएको छ । दक्षिण अफ्रिकाको एक स्थानमा सेन्सर जडान गरिएको छ, जसले बाँदर नजिकिएपछि आवाज निकाल्ने र पानीको छहरा छोड्ने काम गर्छ। यसबाहेक, खेतबारीलाई तारबारले पूर्ण रूपमा घेरेर पनि बाँदर प्रवेश रोक्ने उपाय अपनाइएको छ। भारतका केही राज्यहरूमा 'हार्मोनी क्यु' जस्ता उपकरण प्रयोगमा ल्याइएका छन् भने जापान र चीनले जंगलमै बाँदरमैत्री फलफूलका बिरुवा रोप्ने अभ्यास गरेका छन्। तर नेपालको सन्दर्भ फरक छ। यहाँ बाँदरलाई धार्मिक दृष्टिले पनि हेर्ने गरिन्छ, त्यसैले मार्ने वा मासुका रूपमा प्रयोग गर्ने कुरा सहज छैन, न त सामाजिक रूपमा स्वीकार्य। बाँदर निर्यात गरेर आर्थिक लाभ लिन सकिन्छ भन्ने कुरा पनि कहिलेकाहीँ उठ्ने गर्छ, तर "देउता बेच्ने" कुरा समाजले कत्तिको स्वीकार्छ भन्ने प्रश्न यथावत् छ।

यहीबीच पुतलीबजार नगरपालिकाले एउटा फरक उपाय अपनाएको छ—बाँदर धपाउन बन्दुकको प्रयोग। खेतबारीमा बाली भएको समयमा बन्दुक पड्काएर बाँदर भगाउने प्रयास गरिएको छ। स्थानीय किसानका अनुसार यसको आवाजले बाँदर केही समयका लागि त भाग्छन्, तर फेरि फर्किन्छन्। यसले समस्या अस्थायी रूपमा मात्र समाधान गरेको देखिन्छ। अझ महत्वपूर्ण कुरा, यस्तो आवाजले अन्य वन्यजन्तुमा कस्तो असर पार्छ भन्ने विषयमा पर्याप्त अध्ययन भएको देखिँदैन। तथापि, किसानको समस्या समाधान गर्न खोजिएको प्रयासका लागि स्थानीय तहलाई धन्यवाद दिनैपर्छ। समस्या केवल बाँदरमा सीमित छैन; यसको जडमा वनजंगल र मानवबीचको बदलिँदो सम्बन्ध पनि छ। विकासका नाममा जंगल मासिन्छ भनेर विरोध गर्ने हामी, जब त्यही जंगलले समस्या निम्त्याउँछ, तब बन्दुक उठाउन पछि पर्दैनौं। शहरमा बसेर बाँदरलाई खुवाउनेहरूलाई गाउँमा किसानले भोगिरहेको पीडाको गहिराइ सायद थाहा छैन। त्यहाँ बाँदर "मनोरञ्जन" हो, यहाँ "आतंक"।

आज स्थिति यस्तो बनेको छ कि जंगलले बाँदर मात्र होइन, सर्पजस्ता अन्य जनावर पनि बस्तीमा धकेल्न थालेको छ। मध्यपहाडमा सर्पको संख्या बढ्दै गएको कुरा पनि चर्चामा छ। यसले देखाउँछ कि समस्या अझ गहिरो छ र यसको समाधानका लागि राष्ट्रिय स्तरमै अध्ययन र दीर्घकालीन नीति आवश्यक छ। हाल पुतलीबजारमा भने बन्दुकको आवाज अझै सुनिन्छ। खेतका मकै सकिए पनि बारीका मकै बाँकी छन्, सायद त्यसैले यो "बाँदर युद्ध" अझै जारी छ। दुई महिना बितिसक्दा पनि गाउँ–गाउँबाट बन्दुक पड्किने आवाज आइरहेको छ। यही क्रम जारी रहने हो भने यसपाली दशैं–तिहारमा पटका नपड्किए पनि, बाँदर धपाउने बन्दुकले त्यो कमी पूरा गर्नेछ भन्ने अनुमान गर्न गाह्रो छैन।

बाँदरलाई भगाउनु मात्रै समाधान होइन, उनीहरू किन आउँछन् भन्ने कारण बुझ्नु नै वास्तविक समाधान हो। जबसम्म जंगलमा उनीहरूको आवश्यकता पूरा हुँदैन, तबसम्म उनीहरू गाउँ आउन छोड्ने छैनन्। त्यसैले समाधान बन्दुक होइन, सन्तुलित वातावरण निर्माण हो।

अन्ततः
यो बन्दुक द्वन्द्वकालको होइन तर यो पनि एक युद्धकै प्रतीक हो।
पहिले विचारको युद्ध थियो, अहिले बालीको युद्ध छ।
पहिले मान्छे बचाउन बन्दुक उठ्थ्यो, अहिले मकै बचाउन।
देश बदलिएको छ भनिन्छ, तर बन्दुक अझै पड्किरहेको छ।
केवल निशाना बदलिएको छ।`;

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
    achanakKheleko: (
      <Card className="overflow-hidden shadow-earth animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="relative">
          <img src="/lovable-uploads/seti-hydropower-camp.jpg" alt="Seti river hydropower camp" className="w-full h-64 md:h-80 object-cover" />
        </div>
        <CardContent className="p-8 bg-gradient-to-b from-muted/30 to-background">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary font-heading">अचानक खेलेको कुरा</h3>
            <button onClick={() => copyToClipboard(essayAchanakKheleko, "अचानक खेलेको कुरा")} className="p-2 hover:bg-muted rounded-full transition-colors" title="Copy essay">
              <Copy className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </button>
          </div>
          <div className="text-base leading-relaxed text-foreground/90 font-serif text-justify">
            {essayAchanakKheleko.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </CardContent>
      </Card>
    ),
    banduk: (
      <Card className="overflow-hidden shadow-earth animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="relative">
          <img src="/lovable-uploads/banduk-essay.jpg" alt="Farmer in corn field, mid-hills Nepal" className="w-full h-64 md:h-80 object-cover" />
        </div>
        <CardContent className="p-8 bg-gradient-to-b from-muted/30 to-background">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl md:text-3xl font-bold text-primary font-heading">बन्दुक: द्वन्द्वदेखि दैनिकीसम्म</h3>
            <button onClick={() => copyToClipboard(essayBanduk, "बन्दुक: द्वन्द्वदेखि दैनिकीसम्म")} className="p-2 hover:bg-muted rounded-full transition-colors" title="Copy essay">
              <Copy className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </button>
          </div>
          <p className="text-xs text-muted-foreground mb-6">July 17, 2020</p>
          <div className="text-base leading-relaxed text-foreground/90 font-serif text-justify">
            {essayBanduk.split('\n\n').map((paragraph, index) => (
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
