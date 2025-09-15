import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do you charge by the hour or by the job?",
      answer: "We offer both options depending on the service. Organizing services are typically charged hourly ($120/hour), while move cleaning and staging services are often flat-rate packages. We'll provide a clear quote upfront so there are no surprises."
    },
    {
      question: "Are you insured and bonded?",
      answer: "Yes, we carry full liability insurance and our staff is background-checked. We're bonded and insured for your peace of mind and protection."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve the greater metropolitan area including downtown, westside, northbrook, east village, riverside, and surrounding neighborhoods within a 25-mile radius. Contact us to confirm service in your specific area."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking 1-2 weeks in advance for organizing services, and 2-3 weeks for move cleaning during busy seasons (summer months and end/beginning of month). However, we often have same-week availability for urgent needs."
    },
    {
      question: "Do I need to be home during the service?",
      answer: "For organizing services, we prefer you to be present to make decisions about your belongings. For cleaning services, you can choose to be home or give us entry permission. We're flexible based on your comfort level and schedule."
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: "We offer a 100% satisfaction guarantee. If you're not happy with our work, we'll return to make it right at no additional charge. If we still can't meet your expectations, we'll provide a full refund."
    },
    {
      question: "Do you work with pets in the home?",
      answer: "Absolutely! We're pet-friendly and work around your furry family members. Just let us know about your pets when booking so we can plan accordingly and ensure everyone's comfort and safety."
    },
    {
      question: "What's included in a move-out cleaning?",
      answer: "Our move-out cleaning includes deep cleaning of all rooms, inside appliances (oven, refrigerator, microwave), inside cabinets and drawers, light fixtures, baseboards, window sills, and all surfaces. We focus on getting your deposit back."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-text-secondary">
              Everything you need to know about our services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-medium text-text-primary pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-text-secondary leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;