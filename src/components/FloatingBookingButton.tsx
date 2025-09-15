import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, X } from 'lucide-react';

interface FloatingBookingButtonProps {
  onBookConsultation: () => void;
}

const FloatingBookingButton = ({ onBookConsultation }: FloatingBookingButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isMinimized ? (
        <Button
          onClick={() => setIsMinimized(false)}
          size="icon"
          className="w-14 h-14 rounded-full shadow-2xl animate-glow bg-primary hover:bg-primary/90 text-white"
        >
          <Calendar className="h-6 w-6" />
        </Button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl p-4 animate-float border border-primary/20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-text-primary">Ready to book?</span>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <p className="text-xs text-text-secondary mb-3">
            Get your free consultation today
          </p>
          
          <Button
            onClick={onBookConsultation}
            size="sm"
            variant="hero"
            className="w-full font-medium"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Book Now
          </Button>
        </div>
      )}
    </div>
  );
};

export default FloatingBookingButton;