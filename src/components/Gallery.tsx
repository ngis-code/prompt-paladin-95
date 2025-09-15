import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import galleryOrganizing from "@/assets/gallery-organizing.jpg";
import galleryCleaning from "@/assets/gallery-cleaning.jpg";

interface GalleryItem {
  id: string;
  category: "organizing" | "cleaning" | "staging";
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [viewMode, setViewMode] = useState<"before" | "after">("before");

  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      category: "organizing",
      beforeImage: galleryOrganizing,
      afterImage: galleryOrganizing,
      title: "Living Room Transformation",
      description: "Cluttered family space organized into a functional, beautiful living area"
    },
    {
      id: "2", 
      category: "cleaning",
      beforeImage: galleryCleaning,
      afterImage: galleryCleaning,
      title: "Kitchen Deep Clean",
      description: "Move-out cleaning that secured full security deposit return"
    },
    {
      id: "3",
      category: "organizing",
      beforeImage: galleryOrganizing,
      afterImage: galleryOrganizing,
      title: "Master Bedroom Closet",
      description: "Custom organization system maximizes space and accessibility"
    },
    {
      id: "4",
      category: "staging",
      beforeImage: galleryOrganizing,
      afterImage: galleryOrganizing,
      title: "Home Staging Success",
      description: "Professional staging helped this home sell in 7 days"
    },
    {
      id: "5",
      category: "cleaning",
      beforeImage: galleryCleaning,
      afterImage: galleryCleaning,
      title: "Bathroom Restoration",
      description: "Detailed cleaning restored this bathroom to like-new condition"
    },
    {
      id: "6",
      category: "organizing",
      beforeImage: galleryOrganizing,
      afterImage: galleryOrganizing,
      title: "Home Office Setup",
      description: "Productive workspace created from chaotic storage room"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "organizing", label: "Organizing" },
    { id: "cleaning", label: "Cleaning" },
    { id: "staging", label: "Staging" }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-neutral-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Before & After Gallery
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            See the transformations we've created for families throughout the area.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className="mb-2"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-card group-hover:shadow-hero transition-all duration-300">
                <img 
                  src={item.beforeImage}
                  alt={`Before - ${item.title}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded text-xs font-medium capitalize">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-text-primary">
                  {selectedImage.title}
                </h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex gap-2 mb-4">
                <Button
                  variant={viewMode === "before" ? "default" : "outline"}
                  onClick={() => setViewMode("before")}
                  size="sm"
                >
                  Before
                </Button>
                <Button
                  variant={viewMode === "after" ? "default" : "outline"}
                  onClick={() => setViewMode("after")}
                  size="sm"
                >
                  After
                </Button>
              </div>

              <div className="relative">
                <img 
                  src={viewMode === "before" ? selectedImage.beforeImage : selectedImage.afterImage}
                  alt={`${viewMode} - ${selectedImage.title}`}
                  className="w-full max-h-[500px] object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
                  {viewMode === "before" ? "Before" : "After"}
                </div>
              </div>

              <p className="text-text-secondary">{selectedImage.description}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;