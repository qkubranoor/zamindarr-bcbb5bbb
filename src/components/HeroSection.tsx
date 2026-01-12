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

  // Close popover on scroll
  useEffect(() => {
    if (!isPopoverOpen) return;
    
    const handleScroll = () => setIsPopoverOpen(false);
    
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
    <section id="hero" className="relative min-h-[70vh] sm:min-h-[60vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Map */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat opacity-25 lg:opacity-20 will-change-transform"
        style={{ 
          backgroundImage: `url('/lovable-uploads/7fe2294e-6001-4b1a-baa8-7d3a9d08cca5.png')`,
          backgroundPosition: '50% 60%',
          imageRendering: 'crisp-edges'
        }}
      >
        <link rel="preload" as="image" href="/lovable-uploads/7fe2294e-6001-4b1a-baa8-7d3a9d08cca5.png" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/70 z-[1]" />
      
      {/* Content */}
      <div className="relative z-10 container-responsive py-4 sm:py-8 lg:py-16 text-center">
        <div className="animate-fade-in max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-bold tracking-tight text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-foreground mb-3 sm:mb-6 lg:mb-8 leading-tight mt-8 sm:mt-0">
            <span className="whitespace-nowrap">Discover <span className="text-[#1e40af] inline-flex items-center gap-1">Guidance Value
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                  <button type="button" className="inline-flex align-middle">
                    <Info className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#1e40af]/70 hover:text-[#1e40af] cursor-pointer transition-colors" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-[280px] lg:w-[320px] bg-gradient-to-br from-slate-800 via-slate-800/95 to-slate-900 border border-slate-600/50 text-xs lg:text-sm p-4 z-[99999] shadow-xl shadow-black/30 rounded-xl" side="top" align="center" sideOffset={24} collisionPadding={16}>
                  <p className="text-slate-300 leading-relaxed">Minimum property rate set by the government for stamp duty and registration charges. Varies by location, property type, and road width.</p>
                </PopoverContent>
              </Popover>
            </span></span> <span className="whitespace-nowrap">of your Property</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xs sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
            Base rates of your property at your finger tips
          </p>
          
          {/* Search Bar */}
          <div className="max-w-[340px] md:max-w-lg lg:max-w-2xl mx-auto mb-6 lg:mb-8 px-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 lg:-inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl lg:rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white backdrop-blur-xl rounded-xl lg:rounded-2xl border border-slate-200 shadow-lg lg:shadow-xl group-hover:shadow-xl lg:group-hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center p-2.5 lg:p-4">
                  <div className="flex items-center flex-1 mr-2 lg:mr-4">
                    <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-primary mr-2 lg:mr-3 flex-shrink-0" />
                    <Input
                      type="text"
                      placeholder={searchQuery ? "Enter location..." : (placeholderText || "Enter location...")}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 border-0 bg-transparent text-gray-900 placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm lg:text-base font-medium placeholder:text-sm h-10 lg:h-12"
                    />
                  </div>
                  <Button 
                    onClick={handleSearch}
                    size="sm"
                    className="h-10 w-10 lg:h-12 lg:w-12 p-0 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary rounded-lg lg:rounded-xl shadow-md lg:shadow-lg hover:shadow-lg lg:hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Search className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Property Suggestions */}
            <div className="mt-5 lg:mt-8">
              <p className="text-xs lg:text-sm text-muted-foreground mb-3 lg:mb-4 text-center font-medium">Popular search areas:</p>
              <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
                {/* Mobile areas */}
                <div className="flex flex-wrap justify-center gap-2 lg:hidden">
                  {["Jayanagar", "Koramangala", "Indiranagar"].map((area) => (
                    <button
                      key={area}
                      onClick={() => setSearchQuery(area)}
                      className="px-3 py-1.5 text-xs bg-white hover:bg-slate-50 border border-slate-200 hover:border-primary/40 rounded-full transition-all duration-300 hover:scale-105 text-slate-700 hover:text-primary font-medium shadow-sm hover:shadow-md whitespace-nowrap"
                    >
                      {area}
                    </button>
                  ))}
                </div>
                {/* Desktop areas */}
                <div className="hidden lg:flex flex-wrap justify-center gap-3">
                  {["Jayanagar", "Sadashivnagar", "Koramangala", "Indiranagar", "Whitefield"].map((area) => (
                    <button
                      key={area}
                      onClick={() => setSearchQuery(area)}
                      className="px-5 py-2.5 text-sm bg-white hover:bg-slate-50 border border-slate-200 hover:border-primary/40 rounded-full transition-all duration-300 hover:scale-105 text-slate-700 hover:text-primary font-medium shadow-sm hover:shadow-md whitespace-nowrap"
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;