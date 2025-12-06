import { useEffect, useState, useRef } from "react";

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      value: 100,
      suffix: "+",
      label: "Premium Clients Served"
    },
    {
      value: 135,
      suffix: "k+",
      label: "Platform Visitors"
    },
    {
      value: 10000,
      suffix: "+",
      label: "Hours Saved in Property Research"
    },
    {
      value: 70,
      suffix: "%",
      label: "Lower Due Diligence Costs for Buyers & Firms"
    },
    {
      value: 95,
      suffix: "%",
      label: "Accuracy Across Land Records & Reports"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const animateCounters = () => {
        stats.forEach((stat, index) => {
          let currentValue = 0;
          const increment = stat.value / 100;
          const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= stat.value) {
              currentValue = stat.value;
              clearInterval(timer);
            }
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(currentValue);
              return newCounters;
            });
          }, 50);
        });
      };

      animateCounters();
      
      const loopTimer = setInterval(() => {
        setCounters([0, 0, 0, 0, 0]);
        setTimeout(animateCounters, 200);
      }, 8000);

      return () => clearInterval(loopTimer);
    }
  }, [isVisible]);

  const getIcon = (index: number) => {
    switch(index) {
      case 0: // Premium Clients
        return (
          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 1: // Website Visitors
        return (
          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        );
      case 2: // Hours Saved
        return (
          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 3: // Lower Costs
        return (
          <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M7 10h8M7 14h8M13 4v2M13 18v2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 6h4c1.5 0 2 1 2 2s-.5 2-2 2h-4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 10h4c1.5 0 2 1 2 2s-.5 2-2 2H9" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 4: // Accuracy
        return (
          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };
      
  return (
    <section 
      ref={sectionRef}
      className="py-10 px-6 bg-background/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-normal text-foreground leading-tight">
            Save <span className="text-primary font-medium">time</span>. Save <span className="text-primary font-medium">money</span>. Secure your <span className="text-primary font-medium">investment</span>.
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-primary/5 via-background to-background border border-primary/20 rounded-xl p-3 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-primary/40 hover:scale-[1.02] overflow-hidden"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-1">
                  <div className="text-2xl md:text-3xl font-light text-primary tabular-nums tracking-tight">
                    {counters[index]}{stat.suffix}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    {getIcon(index)}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-[10px] md:text-[11px] font-medium leading-snug">
                  {stat.label}
                </p>
              </div>
              
              {/* Bottom gradient accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;