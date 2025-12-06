import { useState, useRef, useEffect } from "react";
import { Check, ChevronLeft, ChevronRight, FileText, Shield, Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import DocumentVerificationForm from "./DocumentVerificationForm";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<{
    name: string;
    price: string;
  } | null>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isManualScrolling, setIsManualScrolling] = useState(false);

  // Ultra-premium gradients - luxurious deep navy & sapphire (consistent premium look)
  const gradients = [
    'linear-gradient(145deg, #071224 0%, #0f1f3d 50%, #1a3358 100%)', // Deep sapphire
    'linear-gradient(145deg, #071224 0%, #0f1f3d 50%, #1a3358 100%)', // Deep sapphire (featured)
    'linear-gradient(145deg, #071224 0%, #0f1f3d 50%, #1a3358 100%)'  // Deep sapphire
  ];

  // Ensure scroll starts at Document Drafting (first item)
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
      features: ["Sale agreements", "Lease deeds", "Power of attorney", "Gift deeds", "Partition deeds", "MOU & contracts"],
      price: "₹2,200",
      icon: FileText
    },
    {
      title: "Due Diligence Report",
      description: "End-to-end property due diligence and management services",
      features: ["Ownership records (15+ years)", "EC, KHATA & Sale Deed", "RERA compliance check", "Encumbrance verification", "Legal risk assessment"],
      originalPrice: "₹42,000",
      discountedPrice: "₹35,000",
      icon: Shield
    },
    {
      title: "Document Verification",
      description: "Comprehensive verification of property documents and title clearance",  
      features: ["Title verification", "Encumbrance check", "Legal opinion", "Mutation records", "Tax clearance", "Lien verification"],
      price: "₹4,800",
      icon: Search
    }
  ];

  const handleRequestService = (service: { title: string; price?: string; originalPrice?: string; discountedPrice?: string }) => {
    console.log('Button clicked for service:', service.title);
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
      setIsManualScrolling(true);
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
      setTimeout(() => setIsManualScrolling(false), 1000);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      setIsManualScrolling(true);
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
      setTimeout(() => setIsManualScrolling(false), 1000);
    }
  };

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const getCardStyles = () => {
    return "relative";
  };

  const getButtonStyles = () => {
    return "bg-white/95 backdrop-blur-md text-gray-900 font-semibold hover:bg-white transition-all duration-300 border-0 shadow-lg";
  };

  return (
    <>
      <section id="services" className="section-responsive pt-4 sm:pt-4 lg:pt-1 relative overflow-visible">
        <div className="relative z-10">
          <div className="container-responsive">
            <div>
              <p className="text-[10px] sm:text-xs text-black max-w-2xl mx-auto text-balance leading-tight text-center mb-0 lg:mb-1">
                Secure your crores worth of investment with a <span className="font-bold">0.2%</span> cost for its complete document history.
              </p>
              
              <div className="relative overflow-visible -mt-2 lg:-mt-3">
                <div className="lg:hidden relative">
                  <div 
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide py-5 px-4"
                    style={{ scrollSnapType: 'x mandatory' }}
                    onScroll={checkScrollability}
                  >
                    {paidServices.map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <div 
                          key={`manual-${index}`}
                          className={`${getCardStyles()} flex-shrink-0 w-[280px] h-[340px] max-w-[85vw] rounded-[20px] group shadow-2xl ${index === 1 ? 'ring-1 ring-amber-400/40 shadow-[0_0_50px_rgba(251,191,36,0.15)]' : ''}`}
                          style={{ scrollSnapAlign: 'center' }}
                        >
                          {/* Vibrant gradient background */}
                          <div 
                            className="absolute inset-0 rounded-[20px]" 
                            style={{ background: gradients[index] }}
                          ></div>
                          
                          {/* Clean border for Due Diligence, subtle glassmorphism for others */}
                          {index === 1 ? (
                            <div className="absolute inset-0 border border-amber-400/30 rounded-[20px]"></div>
                          ) : (
                            <>
                              {/* Premium glassmorphism for all other cards */}
                              <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[60px] rounded-[20px]"></div>
                              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-white/[0.01] to-transparent rounded-[20px]"></div>
                              <div className="absolute inset-0 border border-sky-200/15 rounded-[20px]"></div>
                            </>
                          )}
                          
                          {/* Content */}
                          <div className="relative z-10 flex flex-col h-full p-4 pl-5 text-white">
                            {/* Premium Badge - Only for Due Diligence */}
                            {index === 1 && (
                              <div className="absolute -top-1.5 -right-1.5 w-8 h-8 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-[0_0_16px_rgba(251,191,36,0.6)] border-2 border-yellow-300/50 z-20">
                                <Star className="w-4 h-4 text-white fill-white" />
                              </div>
                            )}
                            
                            {/* Header with icon */}
                            <div className="flex justify-start items-start mb-2.5">
                              <div className="relative w-6 h-6 backdrop-blur-[40px] rounded-[8px] flex items-center justify-center border border-white/[0.30] shadow-[0_8px_32px_rgba(0,0,0,0.2),0_0_8px_rgba(56,189,248,0.25),0_0_16px_rgba(56,189,248,0.15)]">
                                <div className="absolute inset-0 bg-white/[0.22] rounded-[8px]"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.25] to-transparent rounded-[8px]"></div>
                                <IconComponent className="relative z-10 w-2.5 h-2.5 text-white drop-shadow-[0_0_3px_rgba(56,189,248,0.5)]" strokeWidth={2.5} />
                              </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-base font-semibold mb-1 leading-tight tracking-tight">
                              {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[11px] opacity-85 mb-2.5 leading-relaxed font-light">
                              {service.description}
                            </p>
                            
                            {/* Features */}
                            <div className="space-y-1.5 mb-auto">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start text-[10.5px] font-light">
                                  <div className="relative w-3.5 h-3.5 rounded-full flex items-center justify-center mr-1.5 flex-shrink-0 mt-0.5 bg-green-500/20 backdrop-blur-[30px] border border-green-400/40 shadow-[0_0_4px_rgba(74,222,128,0.2)]">
                                    <Check className="relative z-10 w-2 h-2 drop-shadow-[0_0_2px_rgba(74,222,128,0.4)] text-green-300" strokeWidth={3.5} />
                                  </div>
                                  <span className="leading-relaxed">{feature}</span>
                                </div>
                              ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-auto">
                              <Button 
                                className={`w-full text-[12px] font-semibold h-9 rounded-[12px] ${getButtonStyles()} tracking-wide`}
                                onClick={() => handleRequestService(service)}
                              >
                                Get Quote
                              </Button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border-border/40 shadow-lg ${canScrollLeft ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}
                    onClick={scrollLeft}
                    disabled={!canScrollLeft}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border-border/40 shadow-lg ${canScrollRight ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}
                    onClick={scrollRight}
                    disabled={!canScrollRight}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>

                <div className="hidden lg:flex justify-center gap-8">
                  {paidServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div 
                        key={`desktop-${index}`}
                        className={`${getCardStyles()} w-[320px] h-[380px] rounded-[28px] group shadow-2xl hover:shadow-[0_25px_60px_-12px_rgba(10,30,60,0.6)] transition-all duration-700 ${index === 1 ? 'ring-1 ring-amber-400/40 shadow-[0_0_50px_rgba(251,191,36,0.15)]' : ''}`}
                      >
                        {/* Vibrant gradient background */}
                        <div 
                          className="absolute inset-0 rounded-[28px]" 
                          style={{ background: gradients[index] }}
                        ></div>
                        
                        {/* Clean border for Due Diligence, subtle glassmorphism for others */}
                        {index === 1 ? (
                          <div className="absolute inset-0 border border-amber-400/30 rounded-[28px]"></div>
                        ) : (
                          <>
                            {/* Premium glassmorphism for all other cards */}
                            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[60px] rounded-[28px]"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-white/[0.01] to-transparent rounded-[28px]"></div>
                            <div className="absolute inset-0 border border-sky-200/15 rounded-[28px]"></div>
                          </>
                        )}
                        
                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full p-6 text-white">
                          {/* Premium Badge - Only for Due Diligence */}
                          {index === 1 && (
                            <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(251,191,36,0.7)] border-2 border-yellow-300/50 z-20">
                              <Star className="w-6 h-6 text-white fill-white" />
                            </div>
                          )}
                          
                          {/* Header with icon */}
                          <div className="flex justify-start items-start mb-4">
                            <div className="relative w-8 h-8 backdrop-blur-[40px] rounded-[12px] flex items-center justify-center border border-white/[0.30] shadow-[0_8px_32px_rgba(0,0,0,0.2),0_0_8px_rgba(56,189,248,0.25),0_0_16px_rgba(56,189,248,0.15)]">
                              <div className="absolute inset-0 bg-white/[0.22] rounded-[12px]"></div>
                              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.25] to-transparent rounded-[12px]"></div>
                              <IconComponent className="relative z-10 w-3.5 h-3.5 text-white drop-shadow-[0_0_3px_rgba(56,189,248,0.5)]" strokeWidth={2.5} />
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-semibold mb-2 leading-tight tracking-tight">
                            {service.title === 'Due Diligence Report' ? (
                              <HoverCard openDelay={200} closeDelay={100}>
                                <HoverCardTrigger asChild>
                                  <span className="cursor-help border-b border-dashed border-amber-400/50 hover:border-amber-400 transition-colors">{service.title}</span>
                                </HoverCardTrigger>
                                <HoverCardContent 
                                  variant="premium"
                                  side="top" 
                                  sideOffset={16}
                                  className="w-80"
                                >
                                  {/* Elegant gold accent line */}
                                  <div className="h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400" />
                                  
                                  <div className="p-6">
                                    {/* Header */}
                                    <div className="mb-5">
                                      <p className="text-[10px] uppercase tracking-[0.2em] text-amber-600 font-medium mb-1.5">Premium Service</p>
                                      <h4 className="text-lg font-semibold text-neutral-900 tracking-tight">Due Diligence Report</h4>
                                    </div>
                                    
                                    {/* Divider */}
                                    <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent mb-5" />
                                    
                                    {/* Features */}
                                    <div className="space-y-3 mb-5">
                                      {['Title deed verification', 'Encumbrance certificate (15+ years)', 'KHATA & property tax records', 'Building plan approvals', 'Legal opinion & risk assessment'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                          <div className="w-1 h-1 rounded-full bg-amber-500" />
                                          <span className="text-[13px] text-neutral-600 font-light">{item}</span>
                                        </div>
                                      ))}
                                    </div>
                                    
                                    {/* Pricing */}
                                    <div className="flex items-baseline gap-3 pt-4 border-t border-neutral-100">
                                      <span className="text-2xl font-semibold text-neutral-900">₹35,000</span>
                                      <span className="text-sm text-neutral-400 line-through">₹42,000</span>
                                      <span className="ml-auto text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Save ₹7,000</span>
                                    </div>
                                  </div>
                                </HoverCardContent>
                              </HoverCard>
                            ) : (
                              service.title
                            )}
                          </h3>

                          {/* Description */}
                          <p className="text-[13px] opacity-85 mb-4 leading-relaxed font-light">
                            {service.description}
                          </p>
                          
                          {/* Features */}
                          <div className="space-y-2.5 mb-auto">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start text-[13px] font-light">
                                <div className="relative w-5 h-5 rounded-full flex items-center justify-center mr-2.5 flex-shrink-0 mt-0.5 bg-green-500/20 backdrop-blur-[30px] border border-green-400/40 shadow-[0_0_5px_rgba(74,222,128,0.2)]">
                                  <Check className="relative z-10 w-3 h-3 drop-shadow-[0_0_2px_rgba(74,222,128,0.4)] text-green-300" strokeWidth={3.5} />
                                </div>
                                <span className="leading-relaxed">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* CTA */}
                          <div className="mt-auto">
                            <Button 
                              className={`w-full text-[14px] font-semibold h-11 rounded-[16px] ${getButtonStyles()} tracking-wide`}
                              onClick={() => handleRequestService(service)}
                            >
                              Get Quote
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div className="text-center mb-3 lg:mb-4 mt-4 lg:mt-6">
              <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto leading-tight whitespace-nowrap">
                Your trusted <span className="text-black">Due diligence</span> and <span className="text-black">Documentation</span> partner.
              </p>
            </div>
            
            <div className="relative grid grid-cols-3 gap-4 max-w-md mx-auto px-4 mt-1">
              <div className="relative rounded-2xl p-2 text-center">
                <div className="absolute inset-0 rounded-2xl">
                </div>
                <div className="relative z-10">
                  <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg text-primary">lock</span>
                  </div>
                  <h3 className="font-bold text-foreground text-sm">Secure</h3>
                </div>
              </div>
              
              <div className="relative rounded-2xl p-2 text-center">
                <div className="absolute inset-0 rounded-2xl">
                </div>
                <div className="relative z-10">
                  <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg text-primary">bolt</span>
                  </div>
                  <h3 className="font-bold text-foreground text-sm">Instant</h3>
                </div>
              </div>
              
              <div className="relative rounded-2xl p-2 text-center">
                <div className="absolute inset-0 rounded-2xl">
                </div>
                <div className="relative z-10">
                  <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg text-primary">verified</span>
                  </div>
                  <h3 className="font-bold text-foreground text-sm">Verified</h3>
                </div>
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