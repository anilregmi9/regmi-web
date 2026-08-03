import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Twitter } from "lucide-react";

declare global {
  interface Window {
    twttr?: { widgets: { load: (el?: HTMLElement | null) => void } };
  }
}

const TwitterFeed = ({ handle = "midhillnepal" }: { handle?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = document.getElementById("twitter-wjs") as HTMLScriptElement | null;
    if (existing) {
      window.twttr?.widgets.load(containerRef.current);
      return;
    }
    const script = document.createElement("script");
    script.id = "twitter-wjs";
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.onload = () => window.twttr?.widgets.load(containerRef.current);
    document.body.appendChild(script);
  }, [handle]);

  return (
    <Card className="shadow-earth">
      <CardHeader>
        <CardTitle className="text-2xl text-primary flex items-center gap-3">
          <Twitter className="w-6 h-6" />
          Latest Tweets
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={containerRef} className="max-h-[600px] overflow-hidden rounded-lg">
          <a
            className="twitter-timeline"
            data-height="600"
            data-theme="dark"
            data-chrome="noheader nofooter transparent"
            href={`https://twitter.com/${handle}?ref_src=twsrc%5Etfw`}
          >
            Tweets by @{handle}
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default TwitterFeed;
