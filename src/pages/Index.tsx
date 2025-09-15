import { useState } from "react";
import Header from "@/components/Header";
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
      <Header onBookConsultation={handleBookConsultation} />
      
      <Hero 
        onBookConsultation={handleBookConsultation}
        onShowGallery={handleShowGallery}
      />
      
      <div id="services">
        <Services onBookService={handleBookService} />
      </div>
      
      <div id="gallery">
        <Gallery />
      </div>
      
      <div id="about">
        <About onBookConsultation={handleBookConsultation} />
      </div>
      
      <Testimonials />
      
      <div id="faq">
        <FAQ />
      </div>
      
      <div id="contact">
        <Footer onBookConsultation={handleBookConsultation} />
      </div>

      <BookingModal 
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        selectedService={selectedService}
      />
    </main>
  );
};

export default Index;
