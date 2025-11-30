import { useState, useEffect } from "react";
import { Search, MapPin, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // Close popover on scroll (mobile)
  useEffect(() => {
    if (!isPopoverOpen) return;
    
    const handleScroll = () => {
      setIsPopoverOpen(false);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPopoverOpen]);
  
  const fullText = "12th cross 2nd block Jayanagar";
  const defaultText = "Enter location";
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;
    let isShowingExample = true;
    
    const typeText = () => {
      if (isShowingExample) {
        // Type the example text character by character
        if (currentIndex < fullText.length) {
          setPlaceholderText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(typeText, 100);
        } else {
          setIsTyping(false);
          timeoutId = setTimeout(() => {
            setPlaceholderText("");
            currentIndex = 0;
            setIsTyping(true);
            isShowingExample = false; // Switch to default text
            typeText();
          }, 2500);
        }
      } else {
        // Just show "Enter location" instantly
        setPlaceholderText(defaultText);
        setIsTyping(false);
        timeoutId = setTimeout(() => {
          setPlaceholderText("");
          currentIndex = 0;
          setIsTyping(true);
          isShowingExample = true; // Switch back to example text
          typeText();
        }, 2500);
      }
    };
    
    // Start typing after a short delay
    timeoutId = setTimeout(typeText, 1000);
    
    return () => clearTimeout(timeoutId);
  }, []);
  
  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Handle guidance value search
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <>
    <section id="hero" className="relative min-h-[70vh] sm:min-h-[60vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Map */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat opacity-30 lg:opacity-30 will-change-transform"
        style={{ 
          backgroundImage: `url('/lovable-uploads/7fe2294e-6001-4b1a-baa8-7d3a9d08cca5.png')`,
          backgroundPosition: '50% 60%',
          imageRendering: 'crisp-edges'
        }}
      >
        <link rel="preload" as="image" href="/lovable-uploads/7fe2294e-6001-4b1a-baa8-7d3a9d08cca5.png" />
        
        
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/40 to-white/50 z-[1]" />
      
      
      {/* Content */}
      <div className="relative z-10 container-responsive py-4 sm:py-8 lg:py-12 text-center">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <h1 className="font-bold tracking-tight text-balance text-2xl sm:text-4xl lg:text-4xl text-foreground mb-2 sm:mb-6 leading-tight mt-8 sm:mt-0">
            Discover <span className="text-[#1e40af] inline-flex items-center gap-1">Guidance Value
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                  <button type="button" className="inline-flex align-middle">
                    <Info className="w-4 h-4 sm:w-5 sm:h-5 text-[#1e40af]/70 hover:text-[#1e40af] cursor-pointer" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-[260px] bg-gradient-to-br from-slate-800 via-slate-800/95 to-slate-900 border border-slate-600/50 text-xs p-3 z-[99999] shadow-xl shadow-black/30 rounded-xl" side="top" align="center" sideOffset={8} collisionPadding={16}>
                  <p className="text-slate-400 leading-relaxed text-[11px]">Minimum property rate set by the government for stamp duty and registration charges. Varies by location, property type, and road width.</p>
                </PopoverContent>
              </Popover>
            </span> of Your Property
          </h1>
          
          {/* Subheading */}
          <p className="text-xs sm:text-responsive text-muted-foreground mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
            Base rates of your property at your finger tips
          </p>
          
          {/* Search Bar */}
          <div className="max-w-[340px] lg:max-w-xl mx-auto mb-6 lg:mb-6 px-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 lg:-inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-lg lg:rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-lg lg:rounded-2xl border border-white/20 shadow-md lg:shadow-xl group-hover:shadow-lg lg:group-hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center p-2 lg:p-3">
                  <div className="flex items-center flex-1 mr-1 lg:mr-3">
                    <MapPin className="w-3 h-3 lg:w-4 lg:h-4 text-[hsl(220_85%_50%)] mr-1 lg:mr-3 flex-shrink-0" />
                    <Input
                      type="text"
                      placeholder={searchQuery ? "Enter location..." : (placeholderText || "Enter location...")}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 border-0 bg-transparent text-gray-900 placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm lg:text-base font-medium placeholder:text-xs lg:placeholder:text-sm h-9 lg:h-auto"
                    />
                  </div>
                  <Button 
                    onClick={handleSearch}
                    size="sm"
                    className="h-9 w-9 lg:h-10 lg:w-10 p-0 bg-gradient-to-r from-[hsl(220_85%_50%)] to-[hsl(220_85%_45%)] hover:from-[hsl(220_85%_55%)] hover:to-[hsl(220_85%_50%)] rounded-md lg:rounded-xl shadow-sm lg:shadow-lg hover:shadow-md lg:hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Search className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Property Suggestions */}
            <div className="mt-4 lg:mt-6">
              <p className="text-xs lg:text-sm text-muted-foreground mb-2 lg:mb-3 text-center font-medium">Popular search areas:</p>
              <div className="flex flex-wrap justify-center gap-1.5 lg:gap-2">
                {/* Mobile areas - without Sadashivnagar */}
                <div className="flex flex-wrap justify-center gap-1.5 lg:hidden">
                  {["Jayanagar", "Koramangala", "Indiranagar"].map((area) => (
                    <button
                      key={area}
                      onClick={() => setSearchQuery(area)}
                      className="px-2 py-1 text-[10px] bg-white/80 hover:bg-white backdrop-blur-sm border border-white/30 hover:border-primary/40 rounded-full transition-all duration-300 hover:scale-105 text-gray-900 hover:text-primary font-medium shadow-sm hover:shadow-md whitespace-nowrap"
                    >
                      {area}
                    </button>
                  ))}
                </div>
                {/* Desktop areas - with Sadashivnagar */}
                <div className="hidden lg:flex flex-wrap justify-center gap-2">
                  {["Jayanagar", "Sadashivnagar", "Koramangala", "Indiranagar"].map((area) => (
                    <button
                      key={area}
                      onClick={() => setSearchQuery(area)}
                      className="px-4 py-2 text-sm bg-white/80 hover:bg-white backdrop-blur-sm border border-white/30 hover:border-primary/40 rounded-full transition-all duration-300 hover:scale-105 text-gray-900 hover:text-primary font-medium shadow-sm hover:shadow-md whitespace-nowrap"
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop: Animated Target Audience Text - absolute positioned */}
        <div className="hidden lg:block absolute bottom-[-5rem] left-1/2 transform -translate-x-1/2 text-center z-20">
          <div className="text-foreground font-medium">
            <div className="mb-1 text-sm">For</div>
            <div className="h-12 overflow-hidden text-2xl text-[#1e40af]">
              <div className="animate-slideUpDesktop">
                <div className="h-12 flex items-center justify-center">Brokers</div>
                <div className="h-12 flex items-center justify-center">Homeowners</div>
                <div className="h-12 flex items-center justify-center">Real estate investors</div>
                <div className="h-12 flex items-center justify-center">Developers</div>
                <div className="h-12 flex items-center justify-center">Lawyers</div>
                <div className="h-12 flex items-center justify-center">Banks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    {/* Mobile: Animated Target Audience Text below hero */}
    <div className="lg:hidden mt-10 text-center z-20">
      <div className="text-foreground font-medium">
        <div className="mb-1 text-xs">For</div>
        <div className="h-8 overflow-hidden text-xl text-[#1e40af]">
          <div className="animate-slideUpMobile">
            <div className="h-8 flex items-center justify-center">Brokers</div>
            <div className="h-8 flex items-center justify-center">Homeowners</div>
            <div className="h-8 flex items-center justify-center">Real estate investors</div>
            <div className="h-8 flex items-center justify-center">Developers</div>
            <div className="h-8 flex items-center justify-center">Lawyers</div>
            <div className="h-8 flex items-center justify-center">Banks</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;