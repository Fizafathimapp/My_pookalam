import { Pookalam } from '@/components/Pookalam';
import { FestivalTitle } from '@/components/FestivalTitle';

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* SEO optimized header section */}
      <header className="relative z-10 pt-12">
        <FestivalTitle />
      </header>
      
      {/* Main Pookalam display */}
      <section className="relative flex items-center justify-center" aria-label="Interactive Pookalam Design">
        <Pookalam />
      </section>
      
      {/* Festival information footer */}
      <footer className="relative z-10 text-center pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-white-jasmine/80 mb-4">
            Created with love for the Onam festival celebration 🌺
          </p>
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <span>Traditional Art</span>
            <span>•</span>
            <span>Digital Innovation</span>
            <span>•</span>
            <span>Cultural Heritage</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
