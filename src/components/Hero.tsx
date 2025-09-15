import { Button } from "@/components/ui/button";
import ownerHero from "@/assets/owner-hero.jpg";

interface HeroProps {
  onBookConsultation: () => void;
  onShowGallery: () => void;
}

const Hero = ({ onBookConsultation, onShowGallery }: HeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-background to-neutral-warm py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary leading-tight">
                Calm. Clean.{" "}
                <span className="text-primary">Move-ready.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-text-secondary max-w-xl">
                Professional organizing, move-in / move-out cleaning, and staging to help your home shine.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="hero"
                onClick={onBookConsultation}
                className="text-lg px-8 py-6"
              >
                Book a Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={onShowGallery}
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-white"
              >
                See Before & After
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Background Checked</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Pet Friendly</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-hero">
              <img 
                src={ownerHero} 
                alt="Professional home organizer and cleaning specialist"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;