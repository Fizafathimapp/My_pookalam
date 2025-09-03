import { cn } from '@/lib/utils';

interface PetalLayerProps {
  size: number;
  color: string;
  borderColor: string;
  animationDelay: number;
  rotationDirection: 'normal' | 'reverse';
  zIndex: number;
}

export const PetalLayer = ({
  size,
  color,
  borderColor,
  animationDelay,
  rotationDirection,
  zIndex,
}: PetalLayerProps) => {
  const petals = Array.from({ length: 32 });
  
  return (
    <div
      className={cn(
        "absolute rounded-full transition-all duration-1000 hover:scale-105 cursor-pointer",
        rotationDirection === 'normal' ? 'animate-spin-slow' : 'animate-spin-slow-reverse'
      )}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${animationDelay}s`,
        zIndex,
      }}
    >
      {/* Main circle with gradient border */}
      <div
        className={cn(
          "absolute inset-0 rounded-full border-4 transition-all duration-300",
          color,
          borderColor,
          "shadow-lg hover:shadow-xl"
        )}
        style={{
          background: `conic-gradient(from 0deg, currentColor, transparent 50%, currentColor)`,
          opacity: 0.9,
        }}
      />
      
      {/* Decorative petals around the circumference */}
      {petals.map((_, index) => {
        const angle = (360 / petals.length) * index;
        const petalSize = Math.max(8, size / 40);
        
        return (
          <div
            key={`petal-${index}`}
            className={cn(
              "absolute rounded-full transition-all duration-300 hover:scale-110",
              color,
              "opacity-80 hover:opacity-100"
            )}
            style={{
              width: `${petalSize}px`,
              height: `${petalSize}px`,
              top: '50%',
              left: '50%',
              transform: `
                translate(-50%, -50%) 
                rotate(${angle}deg) 
                translateY(-${size / 2 + petalSize / 2}px)
                rotate(${-angle}deg)
              `,
              boxShadow: `0 0 ${petalSize}px currentColor`,
            }}
          />
        );
      })}
      
      {/* Inner decorative ring */}
      <div
        className={cn(
          "absolute rounded-full border-2 opacity-40",
          borderColor
        )}
        style={{
          width: `${size * 0.8}px`,
          height: `${size * 0.8}px`,
          top: '10%',
          left: '10%',
        }}
      />
    </div>
  );
};