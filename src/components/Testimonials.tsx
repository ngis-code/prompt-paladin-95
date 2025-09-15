import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jennifer R.",
      location: "Downtown",
      rating: 5,
      text: "Transformed our cluttered home into a peaceful space in just one weekend. Sarah's systems actually work for our busy family with two kids. Couldn't be happier!",
      service: "Home Organizing"
    },
    {
      id: 2,
      name: "Kevin M.",
      location: "Westside",
      rating: 5,
      text: "Perfect move-out clean — we got our full security deposit back plus compliments from our landlord. Professional, thorough, and reliable. Highly recommend.",
      service: "Move-Out Cleaning"
    },
    {
      id: 3,
      name: "Diana S.",
      location: "Northbrook",
      rating: 5,
      text: "Sarah's staging advice helped our house sell in 7 days above asking price. Her eye for detail and knowledge of what buyers want is incredible.",
      service: "Home Staging"
    },
    {
      id: 4,
      name: "Michael T.",
      location: "East Village",
      rating: 5,
      text: "The move-in cleaning service was exceptional. Every surface was spotless and the attention to detail was impressive. Started our new home journey perfectly.",
      service: "Move-In Cleaning"
    },
    {
      id: 5,
      name: "Lisa & David K.",
      location: "Riverside",
      rating: 5,
      text: "Sarah organized our entire home office and created systems that have lasted months. We're more productive and the space feels so much calmer now.",
      service: "Home Organizing"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-neutral-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Real feedback from families who've experienced the transformation
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="shadow-card border-0">
            <CardContent className="p-12">
              <div className="text-center">
                {/* Star Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl lg:text-2xl text-text-primary font-medium leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Client Info */}
                <div className="space-y-2">
                  <div className="font-semibold text-text-primary text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-text-secondary">
                    {testimonials[currentIndex].location} • {testimonials[currentIndex].service}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-border'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;