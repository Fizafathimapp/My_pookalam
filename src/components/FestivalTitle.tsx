export const FestivalTitle = () => {
  return (
    <div className="text-center space-y-6 mb-12">
      {/* Main title with gradient text */}
      <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-marigold via-red-rose to-purple-royal bg-clip-text text-transparent animate-float">
        പൂക്കളം
      </h1>
      
      {/* English subtitle */}
      <h2 className="text-4xl md:text-5xl font-semibold text-marigold-light animate-pulse">
        Pookalam
      </h2>
      
      {/* Decorative description */}
      <p className="text-xl md:text-2xl text-white-jasmine max-w-2xl mx-auto leading-relaxed">
        A celebration of Kerala's vibrant Onam festival through the ancient art of flower carpets
      </p>
      
      {/* Animated decorative elements */}
      <div className="flex justify-center items-center space-x-4 mt-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={`title-decoration-${index}`}
            className="w-3 h-3 rounded-full bg-gradient-to-r from-marigold to-red-rose animate-pulse"
            style={{ animationDelay: `${index * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};