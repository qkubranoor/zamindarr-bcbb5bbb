import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import DocumentVerificationForm from "./DocumentVerificationForm";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<{
    name: string;
    price: string;
  } | null>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
      checkScrollability();
    }
  }, []);

  const paidServices = [
    {
      title: "Document Drafting",
      subtitle: "Professional Preparation",
      description: "Expert document preparation and legal review services for all your property transactions.",
      features: ["Sale agreements", "Lease deeds", "Power of attorney"],
      price: "₹2,200",
      tag: "Starting at"
    },
    {
      title: "Due Diligence",
      subtitle: "Complete Property Audit",
      description: "Comprehensive 15+ year ownership verification with compiled legal documentation.",
      features: ["Ownership records", "EC, KHATA, Sale Deed", "Legal risk assessment"],
      originalPrice: "₹42,000",
      price: "₹35,000",
      tag: "Most Popular",
      featured: true
    },
    {
      title: "Document Verification",
      subtitle: "Title Clearance",
      description: "Thorough verification of property documents ensuring clear and marketable title.",
      features: ["Title verification", "Encumbrance check", "Legal opinion"],
      price: "₹4,800",
      tag: "Starting at"
    }
  ];

  const handleRequestService = (service: typeof paidServices[0]) => {
    setSelectedService({
      name: service.title,
      price: service.price
    });
  };

  const handleCloseForm = () => {
    setSelectedService(null);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const ServiceCard = ({ service, isMobile = false }: { service: typeof paidServices[0], isMobile?: boolean }) => (
    <div 
      className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500
        ${isMobile ? 'flex-shrink-0 w-[300px] max-w-[85vw]' : 'w-full'}
        ${service.featured 
          ? 'ring-1 ring-amber-200 shadow-[0_4px_40px_-12px_rgba(180,130,50,0.15)]' 
          : 'ring-1 ring-slate-100 hover:ring-slate-200 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_50px_-12px_rgba(0,0,0,0.12)]'
        }`}
      style={{ scrollSnapAlign: isMobile ? 'center' : undefined }}
    >
      {/* Subtle top accent for featured */}
      {service.featured && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300" />
      )}
      
      <div className={`p-6 ${isMobile ? '' : 'p-8'}`}>
        {/* Tag */}
        <div className="mb-4">
          <span className={`text-[10px] uppercase tracking-[0.15em] font-medium
            ${service.featured ? 'text-amber-600' : 'text-slate-400'}`}>
            {service.tag}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-1">
            {service.title}
          </h3>
          <p className="text-sm text-slate-500">{service.subtitle}</p>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-5">
          <span className="text-3xl font-bold text-slate-900 tracking-tight">
            {service.price}
          </span>
          {service.originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              {service.originalPrice}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-100 mb-5" />

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2.5 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-slate-600">
              <span className={`w-1 h-1 rounded-full flex-shrink-0
                ${service.featured ? 'bg-amber-400' : 'bg-slate-300'}`} 
              />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button 
          onClick={() => handleRequestService(service)}
          className={`w-full h-12 rounded-xl font-medium text-sm transition-all duration-300 group/btn
            ${service.featured 
              ? 'bg-slate-900 text-white hover:bg-slate-800' 
              : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'
            }`}
        >
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <section id="services" className="py-12 lg:py-16 relative bg-slate-50/50">
        <div className="container-responsive">
          {/* Header */}
          <div className="text-center mb-10 lg:mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Services</p>
            <h2 className="text-2xl lg:text-3xl font-semibold text-slate-900 tracking-tight mb-3">
              Property Documentation
            </h2>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Secure your investment with comprehensive documentation and verification services.
            </p>
          </div>
          
          {/* Mobile View */}
          <div className="lg:hidden relative">
            <div 
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide py-2 px-4 -mx-4"
              style={{ scrollSnapType: 'x mandatory' }}
              onScroll={checkScrollability}
            >
              {paidServices.map((service, index) => (
                <ServiceCard key={`mobile-${index}`} service={service} isMobile />
              ))}
            </div>
            
            {/* Scroll indicators */}
            <div className="flex justify-center gap-2 mt-4">
              <Button
                variant="ghost"
                size="icon"
                className={`w-8 h-8 rounded-full ${canScrollLeft ? 'text-slate-600' : 'text-slate-300'}`}
                onClick={scrollRight}
                disabled={!canScrollLeft}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`w-8 h-8 rounded-full ${canScrollRight ? 'text-slate-600' : 'text-slate-300'}`}
                onClick={scrollLeft}
                disabled={!canScrollRight}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {paidServices.map((service, index) => (
              <ServiceCard key={`desktop-${index}`} service={service} />
            ))}
          </div>
          
          {/* Trust line */}
          <div className="flex justify-center items-center gap-6 mt-10 lg:mt-12">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs text-slate-500">Secure</span>
            </div>
            <div className="w-px h-4 bg-slate-200" />
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
              </div>
              <span className="text-xs text-slate-500">Verified</span>
            </div>
            <div className="w-px h-4 bg-slate-200" />
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
              </div>
              <span className="text-xs text-slate-500">Trusted</span>
            </div>
          </div>
        </div>
      </section>

      {selectedService && (
        <DocumentVerificationForm
          onClose={handleCloseForm}
          serviceName={selectedService.name}
          servicePrice={selectedService.price}
        />
      )}
    </>
  );
};

export default ServicesSection;