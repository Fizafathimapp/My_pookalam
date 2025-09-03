import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-radial from-marigold via-red-rose to-purple-royal animate-pulse-glow" />
        
        <h1 className="text-6xl font-bold bg-gradient-to-r from-marigold via-red-rose to-purple-royal bg-clip-text text-transparent">
          404
        </h1>
        
        <h2 className="text-2xl text-white-jasmine mb-4">
          പൂവ് കണ്ടെത്താൻ കഴിഞ്ഞില്ല
        </h2>
        
        <p className="text-xl text-white-jasmine/80 mb-8">
          The flower you're looking for has been scattered by the wind
        </p>
        
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-marigold to-red-rose text-background font-semibold rounded-full hover:shadow-festival transition-all duration-300 hover:scale-105"
        >
          Return to Pookalam
        </a>
      </div>
    </main>
  );
};

export default NotFound;
