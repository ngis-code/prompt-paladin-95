import { useState } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BookingModal from "@/components/BookingModal";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedService, setSelectedService] = useState<string>();

  const handleBookConsultation = () => {
    setSelectedService(undefined);
    setShowBookingModal(true);
  };

  const handleBookService = (service: string) => {
    setSelectedService(service);
    setShowBookingModal(true);
  };

  const handleShowGallery = () => {
    const gallerySection = document.getElementById('gallery');
    gallerySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      <Hero 
        onBookConsultation={handleBookConsultation}
        onShowGallery={handleShowGallery}
      />
      
      <Services onBookService={handleBookService} />
      
      <div id="gallery">
        <Gallery />
      </div>
      
      <About onBookConsultation={handleBookConsultation} />
      
      <Testimonials />
      
      <FAQ />
      
      <Footer onBookConsultation={handleBookConsultation} />

      <BookingModal 
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        selectedService={selectedService}
      />
    </main>
  );
};

export default Index;
