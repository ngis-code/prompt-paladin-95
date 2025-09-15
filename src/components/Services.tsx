import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign } from "lucide-react";

interface ServicesProps {
  onBookService: (service: string) => void;
}

const Services = ({ onBookService }: ServicesProps) => {
  const services = [
    {
      title: "Home Organizing",
      description: "Transform cluttered spaces into functional, beautiful areas that work for your lifestyle.",
      duration: "2-8 hours",
      startingPrice: "Starting at $120/hour",
      features: ["Custom organization systems", "Decluttering guidance", "Storage solutions"],
      id: "organizing"
    },
    {
      title: "Move-Out / Exit Cleaning",
      description: "Thorough deep cleaning to help you get your security deposit back and leave on good terms.",
      duration: "4-8 hours",
      startingPrice: "Starting at $300",
      features: ["Deep clean all rooms", "Appliance cleaning", "Deposit-back guarantee"],
      id: "exit-cleaning"
    },
    {
      title: "Move-In / Entry Cleaning",
      description: "Start fresh in your new home with our comprehensive move-in cleaning service.",
      duration: "3-6 hours", 
      startingPrice: "Starting at $250",
      features: ["Sanitize all surfaces", "Cabinet interior cleaning", "Ready-to-live-in clean"],
      id: "entry-cleaning"
    },
    {
      title: "Staging for Sale",
      description: "Professional staging consultation to help your home sell faster and for top dollar.",
      duration: "2-4 hours",
      startingPrice: "Starting at $200",
      features: ["Staging consultation", "Furniture arrangement", "Decor recommendations"],
      id: "staging"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            From organizing chaos to creating move-ready spaces, we help transform your home with care and professionalism.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-card transition-all duration-300 border-border">
              <CardHeader className="space-y-4">
                <CardTitle className="text-xl text-text-primary group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-text-secondary leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <DollarSign className="w-4 h-4" />
                    <span>{service.startingPrice}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full"
                  variant="outline"
                  onClick={() => onBookService(service.id)}
                >
                  Schedule Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;