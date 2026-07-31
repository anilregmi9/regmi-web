import { useCallback, useEffect, useRef, useState } from "react";
import { Crop, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export type PortraitCrop = {
  /** horizontal focal point in % (0-100) */
  x: number;
  /** vertical focal point in % (0-100) */
  y: number;
  /** zoom factor, 1 = fit whole image (no cropping) */
  zoom: number;
};

const STORAGE_KEY = "hero-portrait-crop";
const DEFAULT_CROP: PortraitCrop = { x: 50, y: 50, zoom: 1 };

function loadCrop(): PortraitCrop {
  if (typeof window === "undefined") return DEFAULT_CROP;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_CROP;
    const parsed = JSON.parse(raw) as Partial<PortraitCrop>;
    return {
      x: typeof parsed.x === "number" ? parsed.x : 50,
      y: typeof parsed.y === "number" ? parsed.y : 50,
      zoom: typeof parsed.zoom === "number" ? parsed.zoom : 1,
    };
  } catch {
    return DEFAULT_CROP;
  }
}

interface HeroPortraitProps {
  src: string;
  alt: string;
  /** Show the crop editor trigger (owner-facing tweak UI) */
  editable?: boolean;
}

const HeroPortrait = ({ src, alt, editable = true }: HeroPortraitProps) => {
  const [crop, setCrop] = useState<PortraitCrop>(DEFAULT_CROP);
  const [draft, setDraft] = useState<PortraitCrop>(DEFAULT_CROP);
  const [open, setOpen] = useState(false);
  const dragRef = useRef<{ active: boolean; w: number; h: number }>({
    active: false,
    w: 1,
    h: 1,
  });

  useEffect(() => {
    const stored = loadCrop();
    setCrop(stored);
    setDraft(stored);
  }, []);

  const save = useCallback(() => {
    setCrop(draft);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    } catch {
      /* ignore */
    }
    setOpen(false);
  }, [draft]);

  const reset = () => setDraft(DEFAULT_CROP);

  // zoom 1 => fully visible (contain). >1 => fills & crops around focal point.
  const imageStyle = (c: PortraitCrop): React.CSSProperties =>
    c.zoom <= 1.001
      ? { objectFit: "contain", objectPosition: "center" }
      : {
          objectFit: "cover",
          objectPosition: `${c.x}% ${c.y}%`,
          transform: `scale(${c.zoom})`,
          transformOrigin: `${c.x}% ${c.y}%`,
        };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    dragRef.current = { active: true, w: rect.width, h: rect.height };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setDraft((d) => ({
      ...d,
      x: Math.min(100, Math.max(0, x)),
      y: Math.min(100, Math.max(0, y)),
    }));
  };

  const onPointerUp = () => {
    dragRef.current.active = false;
  };

  return (
    <div className="relative w-full h-full">
      <div className="relative w-full h-full rounded-3xl overflow-hidden ring-1 ring-border/60 shadow-earth bg-background transition-transform duration-500 group-hover:scale-[1.01]">
        <img
          src={src}
          alt={alt}
          loading="eager"
          className="w-full h-full"
          style={imageStyle(crop)}
        />
      </div>

      {editable && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button
              type="button"
              aria-label="Adjust portrait framing"
              className="absolute bottom-2 right-2 z-30 inline-flex items-center gap-1.5 rounded-full bg-card/85 backdrop-blur border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-accent transition-colors"
            >
              <Crop className="w-3.5 h-3.5" />
              Adjust
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Adjust portrait framing</DialogTitle>
              <DialogDescription>
                Drag on the preview to set the focal point, then zoom. At 1.0×
                the full image stays visible with no cropping.
              </DialogDescription>
            </DialogHeader>

            <div
              className="relative mx-auto w-56 h-72 rounded-2xl overflow-hidden ring-1 ring-border bg-background touch-none cursor-move"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full pointer-events-none select-none"
                style={imageStyle(draft)}
              />
              {draft.zoom > 1.001 && (
                <span
                  className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-accent/30 pointer-events-none"
                  style={{ left: `${draft.x}%`, top: `${draft.y}%` }}
                />
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Zoom</span>
                <span className="font-medium">{draft.zoom.toFixed(2)}×</span>
              </div>
              <Slider
                value={[draft.zoom]}
                min={1}
                max={2.5}
                step={0.01}
                onValueChange={([v]) => setDraft((d) => ({ ...d, zoom: v }))}
              />
            </div>

            <div className="flex gap-2 justify-end pt-2">
              <Button variant="ghost" size="sm" onClick={reset}>
                <RotateCcw className="w-4 h-4 mr-1.5" />
                Reset
              </Button>
              <Button size="sm" onClick={save}>
                Save framing
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default HeroPortrait;
