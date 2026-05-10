// CSS/SVG-based geological background.
// Note: an earlier react-three-fiber version of this component crashed because
// lovable-tagger injects data-lov-* props into JSX, and R3F's applyProps
// cannot handle unknown props on <mesh> elements ("Cannot read properties of
// undefined (reading 'lov')"). A pure CSS/SVG approach avoids that entirely
// while still giving a rich, professional geological feel.

const GeologicalBackground = () => {
  return (
    <div className="absolute inset-0 -z-0 pointer-events-none overflow-hidden">
      {/* Warm radial glows - mineral/ore feel */}
      <div
        className="absolute inset-0 opacity-70 dark:opacity-50"
        style={{
          background:
            "radial-gradient(circle at 18% 25%, hsl(var(--accent) / 0.35), transparent 45%), radial-gradient(circle at 82% 70%, hsl(25 70% 45% / 0.3), transparent 50%), radial-gradient(circle at 50% 100%, hsl(210 40% 30% / 0.25), transparent 55%)",
        }}
      />

      {/* Floating crystal shapes (SVG) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 dark:opacity-25"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="crystal-a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(28 75% 55%)" />
            <stop offset="100%" stopColor="hsl(15 60% 30%)" />
          </linearGradient>
          <linearGradient id="crystal-b" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(210 40% 55%)" />
            <stop offset="100%" stopColor="hsl(220 30% 25%)" />
          </linearGradient>
          <linearGradient id="crystal-c" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(35 65% 50%)" />
            <stop offset="100%" stopColor="hsl(20 50% 28%)" />
          </linearGradient>
        </defs>

        <g style={{ transformOrigin: "200px 180px", animation: "geo-float-1 14s ease-in-out infinite" }}>
          <polygon points="200,80 290,160 250,290 150,290 110,160" fill="url(#crystal-a)" opacity="0.9" />
          <polygon points="200,80 250,290 200,200" fill="hsl(0 0% 0% / 0.25)" />
        </g>

        <g style={{ transformOrigin: "950px 220px", animation: "geo-float-2 18s ease-in-out infinite" }}>
          <polygon points="950,120 1050,200 1010,330 890,330 850,200" fill="url(#crystal-b)" opacity="0.85" />
          <polygon points="950,120 1010,330 950,230" fill="hsl(0 0% 0% / 0.3)" />
        </g>

        <g style={{ transformOrigin: "600px 620px", animation: "geo-float-3 22s ease-in-out infinite" }}>
          <polygon points="600,520 700,600 660,730 540,730 500,600" fill="url(#crystal-c)" opacity="0.8" />
          <polygon points="600,520 660,730 600,630" fill="hsl(0 0% 0% / 0.25)" />
        </g>

        <g style={{ transformOrigin: "1050px 650px", animation: "geo-float-1 20s ease-in-out infinite reverse" }}>
          <polygon points="1050,580 1110,640 1090,720 1010,720 990,640" fill="url(#crystal-a)" opacity="0.7" />
        </g>

        <g style={{ transformOrigin: "120px 600px", animation: "geo-float-2 16s ease-in-out infinite reverse" }}>
          <polygon points="120,540 180,590 160,680 80,680 60,590" fill="url(#crystal-b)" opacity="0.7" />
        </g>
      </svg>

      {/* Subtle strata lines */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, hsl(var(--foreground)) 0 1px, transparent 1px 38px)",
        }}
      />

      <style>{`
        @keyframes geo-float-1 {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%     { transform: translateY(-18px) rotate(6deg); }
        }
        @keyframes geo-float-2 {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%     { transform: translateY(20px) rotate(-5deg); }
        }
        @keyframes geo-float-3 {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%     { transform: translateY(-14px) rotate(4deg); }
        }
      `}</style>
    </div>
  );
};

export default GeologicalBackground;
