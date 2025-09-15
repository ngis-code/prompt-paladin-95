import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

interface FooterProps {
  onBookConsultation: () => void;
}

const Footer = ({ onBookConsultation }: FooterProps) => {
  return (
    <footer className="bg-text-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Clean & Calm Organizing</h3>
              <p className="text-gray-300 max-w-md leading-relaxed">
                Professional home organizing, move cleaning, and staging services that transform your space and simplify your life.
              </p>
            </div>
            
            <Button 
              onClick={onBookConsultation}
              variant="hero"
              size="lg"
              className="bg-white text-text-primary hover:bg-gray-100"
            >
              Book Your Consultation
            </Button>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">(555) 123-4567</div>
                  <div className="text-sm text-gray-300">Call or text</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">hello@cleanandcalm.com</div>
                  <div className="text-sm text-gray-300">Free quotes</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <div className="font-medium">Service Area</div>
                  <div className="text-sm text-gray-300 leading-relaxed">
                    Greater Metro Area<br />
                    25-mile radius
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-gray-300">
              <div>Home Organizing</div>
              <div>Move-Out Cleaning</div>
              <div>Move-In Cleaning</div>
              <div>Home Staging</div>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-gray-300 hover:text-white hover:bg-white/10"
                  asChild
                >
                  <a href="#" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-gray-300 hover:text-white hover:bg-white/10"
                  asChild
                >
                  <a href="#" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <div>
              © 2024 Clean & Calm Organizing. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Satisfaction Guarantee</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;