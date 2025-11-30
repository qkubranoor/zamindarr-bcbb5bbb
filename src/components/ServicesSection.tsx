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
      features: ["Sale agreements", "Lease deeds", "Power of attorney"],
      price: "₹2,200",
      icon: FileText
    },
    {
      title: "Due Diligence Report",
      description: "End-to-end property due diligence and management services",
      features: ["Ownership Records for 15+ years", "Compiled Report- EC, KHATA, Sale Deed, etc."],
      originalPrice: "₹42,000",
      discountedPrice: "₹35,000",
      icon: Shield
    },
    {
      title: "Document Verification",
      description: "Comprehensive verification of property documents and title clearance",  
      features: ["Title verification", "Encumbrance check", "Legal Opinion"],
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
                          className={`${getCardStyles()} flex-shrink-0 w-[270px] h-[320px] max-w-[85vw] rounded-[24px] group shadow-2xl ${index === 1 ? 'ring-1 ring-amber-400/40 shadow-[0_0_50px_rgba(251,191,36,0.15)]' : ''}`}
                          style={{ scrollSnapAlign: 'center' }}
                        >
                          {/* Vibrant gradient background */}
                          <div 
                            className="absolute inset-0 rounded-[24px]" 
                            style={{ background: gradients[index] }}
                          ></div>
                          
                          {/* Clean border for Due Diligence, subtle glassmorphism for others */}
                          {index === 1 ? (
                            <div className="absolute inset-0 border border-amber-400/30 rounded-[24px]"></div>
                          ) : (
                            <>
                              {/* Premium glassmorphism for all other cards */}
                              <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[60px] rounded-[24px]"></div>
                              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-white/[0.01] to-transparent rounded-[24px]"></div>
                              <div className="absolute inset-0 border border-sky-200/15 rounded-[24px]"></div>
                            </>
                          )}
                          
                          {/* Content */}
                          <div className="relative z-10 flex flex-col h-full p-5 text-white">
                            {/* Premium Badge - Only for Due Diligence */}
                            {index === 1 && (
                              <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.6)] border-2 border-yellow-300/50 z-20">
                                <Star className="w-5 h-5 text-white fill-white" />
                              </div>
                            )}
                            
                            {/* Header with icon */}
                            <div className="flex justify-start items-start mb-3.5">
                              <div className="relative w-7 h-7 backdrop-blur-[40px] rounded-[10px] flex items-center justify-center border border-white/[0.30] shadow-[0_8px_32px_rgba(0,0,0,0.2),0_0_8px_rgba(56,189,248,0.25),0_0_16px_rgba(56,189,248,0.15)]">
                                <div className="absolute inset-0 bg-white/[0.22] rounded-[10px]"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.25] to-transparent rounded-[10px]"></div>
                                <IconComponent className="relative z-10 w-3 h-3 text-white drop-shadow-[0_0_3px_rgba(56,189,248,0.5)]" strokeWidth={2.5} />
                              </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold mb-1.5 leading-tight tracking-tight">
                              {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[12px] opacity-85 mb-3.5 leading-relaxed font-light">
                              {service.description}
                            </p>
                            
                            {/* Features */}
                            <div className="space-y-2 mb-auto">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start text-[11.5px] font-light">
                                  <div className="relative w-4 h-4 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5 bg-green-500/20 backdrop-blur-[30px] border border-green-400/40">
                                    <Check className="relative z-10 w-2.5 h-2.5 drop-shadow-sm text-green-300" strokeWidth={3.5} />
                                  </div>
                                  <span className="leading-relaxed">{feature}</span>
                                </div>
                              ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-auto">
                              <Button 
                                className={`w-full text-[13px] font-semibold h-10 rounded-[14px] ${getButtonStyles()} tracking-wide`}
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
                              <HoverCard>
                                <HoverCardTrigger asChild>
                                  <span className="cursor-help">{service.title}</span>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-96 p-6 min-h-[400px] bg-gradient-to-br from-[#071224] via-[#0f1f3d] to-[#1a3358] border-amber-400/20 shadow-[0_0_80px_rgba(251,191,36,0.1)] ring-1 ring-amber-300/10" side="top">
                                  <div className="space-y-4">
                                    <div>
                                      <h4 className="text-lg font-semibold text-amber-100 mb-2">Comprehensive Due Diligence Report</h4>
                                      <p className="text-sm text-sky-100/80">
                                        Complete property verification with 15+ years of ownership history, legal clearance verification, and comprehensive documentation analysis.
                                      </p>
                                    </div>
                                    <div className="space-y-2">
                                      <h5 className="font-medium text-amber-100">What's Included:</h5>
                                      <ul className="text-xs text-sky-100/70 space-y-1">
                                        <li>• Title deed verification and chain analysis</li>
                                        <li>• Encumbrance certificate for 15+ years</li>
                                        <li>• KHATA verification and property tax records</li>
                                        <li>• Building plan approvals and occupancy certificates</li>
                                        <li>• Legal opinion and risk assessment</li>
                                        <li>• Compiled comprehensive report with all documents</li>
                                      </ul>
                                    </div>
                                    <div className="pt-2 border-t border-amber-400/20">
                                      <p className="text-xs text-amber-400 font-medium">
                                        Save ₹6,000 with our special pricing
                                      </p>
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
                                <div className="relative w-5 h-5 rounded-full flex items-center justify-center mr-2.5 flex-shrink-0 mt-0.5 bg-green-500/20 backdrop-blur-[30px] border border-green-400/40">
                                  <Check className="relative z-10 w-3 h-3 drop-shadow-sm text-green-300" strokeWidth={3.5} />
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