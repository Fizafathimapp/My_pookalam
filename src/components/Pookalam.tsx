import { PetalLayer } from './PetalLayer';
import { CenterStar } from './CenterStar';

interface PookalamLayer {
  size: number;
  color: string;
  borderColor: string;
  animationDelay: number;
  rotationDirection: 'normal' | 'reverse';
}

const POOKALAM_LAYERS: PookalamLayer[] = [
  { size: 600, color: 'bg-marigold', borderColor: 'border-marigold-light', animationDelay: 0, rotationDirection: 'normal' },
  { size: 520, color: 'bg-red-rose', borderColor: 'border-red-deep', animationDelay: 0.5, rotationDirection: 'reverse' },
  { size: 450, color: 'bg-calendula', borderColor: 'border-calendula-light', animationDelay: 1, rotationDirection: 'normal' },
  { size: 380, color: 'bg-white-jasmine', borderColor: 'border-white-pure', animationDelay: 1.5, rotationDirection: 'reverse' },
  { size: 320, color: 'bg-purple-royal', borderColor: 'border-purple-deep', animationDelay: 2, rotationDirection: 'normal' },
  { size: 260, color: 'bg-magenta-bright', borderColor: 'border-magenta-deep', animationDelay: 2.5, rotationDirection: 'reverse' },
  { size: 200, color: 'bg-calendula-light', borderColor: 'border-calendula', animationDelay: 3, rotationDirection: 'normal' },
  { size: 150, color: 'bg-white-pure', borderColor: 'border-white-jasmine', animationDelay: 3.5, rotationDirection: 'reverse' },
];

export const Pookalam = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-marigold/20 via-purple-royal/10 to-background animate-pulse-glow" />
      
      {/* Pookalam container */}
      <div className="relative w-[700px] h-[700px] flex items-center justify-center">
        {/* Outer glow rings */}
        {[800, 750, 700].map((size, index) => (
          <div
            key={`glow-${size}`}
            className="absolute rounded-full animate-pulse-glow opacity-30"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              background: `conic-gradient(hsl(var(--marigold)), hsl(var(--rose-red)), hsl(var(--royal-purple)), hsl(var(--bright-magenta)), hsl(var(--marigold)))`,
              animationDelay: `${index * 0.5}s`,
              filter: 'blur(40px)',
            }}
          />
        ))}
        
        {/* Main pookalam layers */}
        {POOKALAM_LAYERS.map((layer, index) => (
          <PetalLayer
            key={`layer-${index}`}
            size={layer.size}
            color={layer.color}
            borderColor={layer.borderColor}
            animationDelay={layer.animationDelay}
            rotationDirection={layer.rotationDirection}
            zIndex={POOKALAM_LAYERS.length - index}
          />
        ))}
        
        {/* Center star */}
        <CenterStar />
        
        {/* Festival sparkles */}
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={`sparkle-${index}`}
            className="absolute w-2 h-2 bg-marigold rounded-full animate-float opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};