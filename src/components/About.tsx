import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, Heart } from "lucide-react";
import ownerHero from "@/assets/owner-hero.jpg";

interface AboutProps {
  onBookConsultation: () => void;
}

const About = ({ onBookConsultation }: AboutProps) => {
  const credentials = [
    "5+ years organizing experience",
    "Serving greater metropolitan area",
    "Certified professional organizer",
    "Background in interior design"
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Fully Insured & Bonded",
      description: "Complete liability coverage and background-checked staff"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Always On Time",
      description: "Respect for your schedule with reliable, punctual service"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Pet Friendly",
      description: "Love working with families and their furry friends"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Satisfaction Guaranteed",
      description: "Not happy? We'll make it right or refund your money"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                Meet the Owner
              </h2>
              <p className="text-xl text-text-secondary">
                Your partner in creating organized, beautiful spaces
              </p>
            </div>

            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Hi — I'm Sarah Thompson. I've spent over 5 years helping busy families and sellers create calm, organized spaces and get homes market-ready. What started as helping friends declutter has grown into a passion for transforming how people live and feel in their homes.
              </p>
              
              <p>
                I specialize in practical organizing systems that actually work for real families, thorough move cleaning that ensures you get your deposit back, and low-cost staging strategies that maximize your home's appeal to buyers.
              </p>
              
              <p>
                Every project is different, but my approach is always the same: listen to your needs, respect your space and belongings, and deliver results that make your life easier and more beautiful.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-text-primary mb-4">Credentials & Experience</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-text-secondary">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Button onClick={onBookConsultation} size="lg" variant="hero">
                Book a Consultation
              </Button>
            </div>
          </div>

          <div>
            <div className="relative mb-8">
              <div className="relative overflow-hidden rounded-2xl shadow-hero">
                <img 
                  src={ownerHero} 
                  alt="Sarah Thompson - Professional Home Organizer"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-text-primary text-center lg:text-left">
                Why Choose Us?
              </h3>
              
              <div className="grid gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg">
                    <div className="text-primary mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-text-secondary">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;