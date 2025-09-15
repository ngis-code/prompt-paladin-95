import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import ownerHero from "@/assets/owner-hero.jpg";

interface HeroProps {
  onBookConsultation: () => void;
  onShowGallery: () => void;
}

const Hero = ({ onBookConsultation, onShowGallery }: HeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-background to-neutral-warm pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-8">
              <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-text-primary leading-tight">
                Calm. Clean.{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Move-ready.
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-text-secondary max-w-xl font-inter font-light leading-relaxed">
                Professional organizing, move-in / move-out cleaning, and staging to help your home 
                <span className="italic font-medium text-primary"> shine</span>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="hero"
                onClick={onBookConsultation}
                className="text-lg px-8 py-6 font-inter font-medium shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-glow"
              >
                Book a Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={onShowGallery}
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-white font-inter font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
          </ScrollReveal>

          <ScrollReveal delay={200}>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-hero transform hover:scale-105 transition-all duration-500">
              <img 
                src={ownerHero} 
                alt="Professional home organizer and cleaning specialist"
                className="w-full h-[600px] object-cover filter hover:brightness-110 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-primary/10"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-inter font-medium text-text-primary">Premium Service</span>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;