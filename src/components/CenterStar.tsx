export const CenterStar = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-50">
      {/* Outer star glow */}
      <div className="absolute w-32 h-32 animate-pulse-glow">
        <div className="w-full h-full bg-gradient-radial from-marigold via-red-rose to-purple-royal rounded-full blur-xl opacity-60" />
      </div>
      
      {/* Main star container */}
      <div className="relative w-24 h-24 animate-spin-slow">
        {/* Star points */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={`star-point-${index}`}
            className="absolute w-full h-full"
            style={{ transform: `rotate(${index * 45}deg)` }}
          >
            {/* Main ray */}
            <div className="absolute top-0 left-1/2 w-1 h-12 bg-gradient-to-t from-marigold via-calendula to-white-pure transform -translate-x-1/2 rounded-full shadow-lg" />
            
            {/* Decorative tip */}
            <div className="absolute -top-1 left-1/2 w-3 h-3 bg-marigold rounded-full transform -translate-x-1/2 animate-pulse shadow-glow" />
          </div>
        ))}
        
        {/* Inner star pattern */}
        <div className="absolute inset-2 rounded-full bg-gradient-radial from-red-rose via-magenta-bright to-purple-royal animate-float">
          {/* Central flower pattern */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`inner-petal-${index}`}
              className="absolute w-full h-full"
              style={{ transform: `rotate(${index * 60}deg)` }}
            >
              <div className="absolute top-1 left-1/2 w-4 h-8 bg-gradient-to-t from-white-pure via-marigold-light to-calendula transform -translate-x-1/2 rounded-full opacity-90" />
            </div>
          ))}
          
          {/* Central dot */}
          <div className="absolute inset-1/3 rounded-full bg-gradient-radial from-marigold to-red-rose animate-pulse-glow shadow-festival" />
        </div>
      </div>
      
      {/* Floating decorative elements */}
      {Array.from({ length: 12 }).map((_, index) => {
        const radius = 60 + Math.random() * 40;
        const angle = (360 / 12) * index;
        
        return (
          <div
            key={`floating-${index}`}
            className="absolute w-2 h-2 bg-marigold rounded-full animate-float opacity-70"
            style={{
              top: '50%',
              left: '50%',
              transform: `
                translate(-50%, -50%) 
                rotate(${angle}deg) 
                translateY(-${radius}px)
              `,
              animationDelay: `${index * 0.3}s`,
            }}
          />
        );
      })}
    </div>
  );
};