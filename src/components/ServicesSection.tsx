import { useState, useRef, useEffect } from "react";
import { Check, ChevronLeft, ChevronRight, FileText, Shield, Search, Sparkles } from "lucide-react";
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
      description: "Professional document preparation and review services",
      features: ["Sale agreements", "Lease deeds", "Power of attorney"],
      price: "₹2,200",
      icon: FileText,
      featured: false
    },
    {
      title: "Due Diligence Report",
      description: "End-to-end property due diligence and management services",
      features: ["Ownership Records for 15+ years", "Compiled Report- EC, KHATA, Sale Deed, etc."],
      originalPrice: "₹42,000",
      discountedPrice: "₹35,000",
      icon: Shield,
      featured: true
    },
    {
      title: "Document Verification",
      description: "Comprehensive verification of property documents and title clearance",  
      features: ["Title verification", "Encumbrance check", "Legal Opinion"],
      price: "₹4,800",
      icon: Search,
      featured: false
    }
  ];

  const handleRequestService = (service: { title: string; price?: string; originalPrice?: string; discountedPrice?: string }) => {
    setSelectedService({
      name: service.title,
      price: service.discountedPrice || service.originalPrice || service.price || "Contact for pricing"
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

  return (
    <>
      <section id="services" className="section-responsive pt-4 sm:pt-4 lg:pt-1 relative">
        <div className="relative z-10">
          <div className="container-responsive">
            <p className="text-[10px] sm:text-xs text-muted-foreground max-w-2xl mx-auto text-balance leading-tight text-center mb-4 lg:mb-6">
              Secure your crores worth of investment with a <span className="font-medium text-foreground">0.2%</span> cost for its complete document history.
            </p>
            
            {/* Mobile View */}
            <div className="lg:hidden relative">
              <div 
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide py-4 px-4"
                style={{ scrollSnapType: 'x mandatory' }}
                onScroll={checkScrollability}
              >
                {paidServices.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div 
                      key={`mobile-${index}`}
                      className={`flex-shrink-0 w-[280px] max-w-[85vw] rounded-2xl relative overflow-hidden
                        ${service.featured 
                          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white' 
                          : 'bg-card border border-border/50'
                        }`}
                      style={{ scrollSnapAlign: 'center' }}
                    >
                      {/* Featured badge */}
                      {service.featured && (
                        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 bg-amber-500/90 rounded-full">
                          <Sparkles className="w-3 h-3 text-white" />
                          <span className="text-[10px] font-medium text-white">Premium</span>
                        </div>
                      )}
                      
                      <div className="p-5">
                        {/* Icon */}
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4
                          ${service.featured 
                            ? 'bg-white/10 border border-white/20' 
                            : 'bg-primary/5 border border-primary/10'
                          }`}
                        >
                          <IconComponent className={`w-5 h-5 ${service.featured ? 'text-white' : 'text-primary'}`} strokeWidth={1.5} />
                        </div>

                        {/* Title */}
                        <h3 className={`text-lg font-semibold mb-2 tracking-tight ${service.featured ? 'text-white' : 'text-foreground'}`}>
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className={`text-[13px] mb-4 leading-relaxed ${service.featured ? 'text-white/70' : 'text-muted-foreground'}`}>
                          {service.description}
                        </p>
                        
                        {/* Features */}
                        <div className="space-y-2.5 mb-5">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2.5">
                              <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                                ${service.featured ? 'bg-emerald-500/20' : 'bg-emerald-50'}`}
                              >
                                <Check className={`w-2.5 h-2.5 ${service.featured ? 'text-emerald-400' : 'text-emerald-600'}`} strokeWidth={3} />
                              </div>
                              <span className={`text-[12px] leading-relaxed ${service.featured ? 'text-white/80' : 'text-muted-foreground'}`}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Price */}
                        <div className="mb-4">
                          {service.discountedPrice ? (
                            <div className="flex items-baseline gap-2">
                              <span className={`text-2xl font-bold ${service.featured ? 'text-white' : 'text-foreground'}`}>
                                {service.discountedPrice}
                              </span>
                              <span className={`text-sm line-through ${service.featured ? 'text-white/40' : 'text-muted-foreground'}`}>
                                {service.originalPrice}
                              </span>
                            </div>
                          ) : (
                            <span className={`text-2xl font-bold ${service.featured ? 'text-white' : 'text-foreground'}`}>
                              {service.price}
                            </span>
                          )}
                        </div>

                        {/* CTA */}
                        <Button 
                          className={`w-full h-11 rounded-xl font-medium text-sm
                            ${service.featured 
                              ? 'bg-white text-slate-900 hover:bg-white/90' 
                              : 'bg-primary text-primary-foreground hover:bg-primary/90'
                            }`}
                          onClick={() => handleRequestService(service)}
                        >
                          Get Quote
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Scroll buttons */}
              <Button
                variant="outline"
                size="icon"
                className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-background/95 backdrop-blur border-border/50 shadow-md ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={scrollLeft}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-background/95 backdrop-blur border-border/50 shadow-md ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={scrollRight}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Desktop View */}
            <div className="hidden lg:flex justify-center gap-6">
              {paidServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={`desktop-${index}`}
                    className={`w-[320px] rounded-2xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1
                      ${service.featured 
                        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl shadow-slate-900/20' 
                        : 'bg-card border border-border/50 hover:border-border hover:shadow-lg'
                      }`}
                  >
                    {/* Featured badge */}
                    {service.featured && (
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/90 rounded-full">
                        <Sparkles className="w-3.5 h-3.5 text-white" />
                        <span className="text-[11px] font-medium text-white">Premium</span>
                      </div>
                    )}
                    
                    <div className="p-6">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5
                        ${service.featured 
                          ? 'bg-white/10 border border-white/20' 
                          : 'bg-primary/5 border border-primary/10'
                        }`}
                      >
                        <IconComponent className={`w-6 h-6 ${service.featured ? 'text-white' : 'text-primary'}`} strokeWidth={1.5} />
                      </div>

                      {/* Title */}
                      <h3 className={`text-xl font-semibold mb-2 tracking-tight ${service.featured ? 'text-white' : 'text-foreground'}`}>
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-sm mb-5 leading-relaxed ${service.featured ? 'text-white/70' : 'text-muted-foreground'}`}>
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                              ${service.featured ? 'bg-emerald-500/20' : 'bg-emerald-50'}`}
                            >
                              <Check className={`w-3 h-3 ${service.featured ? 'text-emerald-400' : 'text-emerald-600'}`} strokeWidth={3} />
                            </div>
                            <span className={`text-[13px] leading-relaxed ${service.featured ? 'text-white/80' : 'text-muted-foreground'}`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Price */}
                      <div className="mb-5">
                        {service.discountedPrice ? (
                          <div className="flex items-baseline gap-2">
                            <span className={`text-3xl font-bold tracking-tight ${service.featured ? 'text-white' : 'text-foreground'}`}>
                              {service.discountedPrice}
                            </span>
                            <span className={`text-sm line-through ${service.featured ? 'text-white/40' : 'text-muted-foreground'}`}>
                              {service.originalPrice}
                            </span>
                          </div>
                        ) : (
                          <span className={`text-3xl font-bold tracking-tight ${service.featured ? 'text-white' : 'text-foreground'}`}>
                            {service.price}
                          </span>
                        )}
                      </div>

                      {/* CTA */}
                      <Button 
                        className={`w-full h-12 rounded-xl font-medium
                          ${service.featured 
                            ? 'bg-white text-slate-900 hover:bg-white/90' 
                            : 'bg-primary text-primary-foreground hover:bg-primary/90'
                          }`}
                        onClick={() => handleRequestService(service)}
                      >
                        Get Quote
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Footer text */}
            <div className="text-center mt-6 lg:mt-8">
              <p className="text-xs sm:text-sm text-muted-foreground">
                Your trusted <span className="text-foreground font-medium">Due diligence</span> and <span className="text-foreground font-medium">Documentation</span> partner.
              </p>
            </div>
            
            {/* Trust indicators */}
            <div className="flex justify-center items-center gap-8 mt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="material-symbols-outlined text-base text-primary">lock</span>
                <span className="text-xs font-medium">Secure</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="material-symbols-outlined text-base text-primary">bolt</span>
                <span className="text-xs font-medium">Instant</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="material-symbols-outlined text-base text-primary">verified</span>
                <span className="text-xs font-medium">Verified</span>
              </div>
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