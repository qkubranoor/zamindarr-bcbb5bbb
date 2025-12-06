import { useEffect, useState, useRef } from "react";

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
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
          const increment = stat.value / 100; // More steps = smoother, slower
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
          }, 50); // 50ms * 100 steps = 5 seconds total
        });
      };

      animateCounters();
      
      // Loop: pause for 3 seconds after completion, then reset and restart
      const loopTimer = setInterval(() => {
        setCounters([0, 0, 0]);
        setTimeout(animateCounters, 200);
      }, 8000); // 5s animation + 3s pause

      return () => clearInterval(loopTimer);
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-10 px-6 bg-background/50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-normal text-foreground leading-tight">
            Save <span className="text-primary font-medium">time</span>. Save <span className="text-primary font-medium">money</span>. Secure your <span className="text-primary font-medium">investment</span>.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-primary/5 via-background to-background border border-primary/20 rounded-xl p-4 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-primary/40 hover:scale-[1.02] overflow-hidden"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <div className="text-3xl md:text-4xl font-light text-primary tabular-nums tracking-tight">
                    {counters[index]}{stat.suffix}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    {index === 0 && (
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M7 10h8M7 14h8M13 4v2M13 18v2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11 6h4c1.5 0 2 1 2 2s-.5 2-2 2h-4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 10h4c1.5 0 2 1 2 2s-.5 2-2 2H9" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-[11px] font-medium leading-snug">
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