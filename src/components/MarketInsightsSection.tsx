import { Crown, MapPin, TrendingUp } from "lucide-react";

const MarketInsightsSection = () => {
  const topBuilders = [
    { name: "Prestige Group", projects: 85, rating: 4.8, specialty: "Premium Apartments" },
    { name: "Brigade Group", projects: 72, rating: 4.7, specialty: "Integrated Townships" },
    { name: "Sobha Limited", projects: 58, rating: 4.9, specialty: "Luxury Homes" },
    { name: "Godrej Properties", projects: 45, rating: 4.6, specialty: "Sustainable Living" },
    { name: "Birla Estates", projects: 32, rating: 4.7, specialty: "Modern Design" },
  ];

  const priceHeatMap = [
    { area: "Whitefield", price: "15,200", change: 12, tier: "premium" },
    { area: "Sarjapur Road", price: "9,800", change: 18, tier: "growth" },
    { area: "Electronic City", price: "7,500", change: 15, tier: "growth" },
    { area: "Hebbal", price: "12,800", change: 10, tier: "premium" },
    { area: "Devanahalli", price: "6,200", change: 22, tier: "emerging" },
    { area: "Marathahalli", price: "11,500", change: 8, tier: "premium" },
  ];

  const keyStats = [
    { value: "25,259", label: "Q3 2024 Registrations", sublabel: "Housing Units" },
    { value: "₹85L", label: "Avg. Transaction", sublabel: "Per Property" },
    { value: "79%", label: "5-Year Growth", sublabel: "Price Appreciation" },
    { value: "4,200+", label: "RERA Projects", sublabel: "Active Listings" },
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-[#04080f] via-[#08121f] to-[#050a14]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-[10px] md:text-xs tracking-[0.2em] uppercase text-amber-400/80 mb-3 font-light">
            Market Intelligence
          </span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-extralight text-white/95 tracking-wide">
            Bangalore Real Estate Insights
          </h2>
          <p className="text-slate-500 text-xs md:text-sm mt-2 font-light tracking-wide">
            Karnataka Kaveri Portal & RERA Data
          </p>
        </div>

        {/* Key Statistics - Minimal Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-14">
          {keyStats.map((stat, index) => (
            <div 
              key={index}
              className="text-center py-5 md:py-6 px-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
            >
              <div className="text-lg md:text-2xl font-extralight text-white/90 tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs text-amber-400/70 font-light tracking-wide uppercase">
                {stat.label}
              </div>
              <div className="text-[9px] md:text-[10px] text-slate-600 font-light mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          
          {/* Top Builders */}
          <div className="rounded-2xl bg-white/[0.015] border border-white/[0.04] p-5 md:p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Crown className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-500/70" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-light text-white/90">Top Developers</h3>
                <p className="text-[10px] md:text-xs text-slate-600 font-light">RERA Registered</p>
              </div>
            </div>
            
            <div className="space-y-2">
              {topBuilders.map((builder, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between py-3 px-3 rounded-lg bg-white/[0.02] border border-white/[0.03] group hover:border-amber-500/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 md:w-6 md:h-6 rounded-md bg-gradient-to-br from-amber-500/15 to-amber-600/5 flex items-center justify-center text-amber-400/80 text-[10px] md:text-xs font-medium">
                      {index + 1}
                    </span>
                    <div>
                      <div className="text-xs md:text-sm font-light text-white/85 group-hover:text-amber-400/90 transition-colors">
                        {builder.name}
                      </div>
                      <div className="text-[9px] md:text-[10px] text-slate-600 font-light">
                        {builder.specialty}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] md:text-xs text-slate-400 font-light">
                      {builder.projects} Projects
                    </div>
                    <div className="text-[9px] md:text-[10px] text-amber-500/60 font-light">
                      ★ {builder.rating}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price Heat Map */}
          <div className="rounded-2xl bg-white/[0.015] border border-white/[0.04] p-5 md:p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-sky-500/70" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-light text-white/90">Price per Sq.Ft</h3>
                <p className="text-[10px] md:text-xs text-slate-600 font-light">2025 Average Rates</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {priceHeatMap.map((area, index) => (
                <div 
                  key={index}
                  className="py-3 px-3 rounded-lg bg-white/[0.02] border border-white/[0.03] group hover:border-sky-500/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] md:text-xs font-light text-white/80 group-hover:text-sky-400/90 transition-colors">
                      {area.area}
                    </span>
                    <span className={`text-[8px] md:text-[9px] px-1.5 py-0.5 rounded font-light ${
                      area.tier === 'premium' 
                        ? 'bg-amber-500/10 text-amber-400/80' 
                        : area.tier === 'growth'
                        ? 'bg-sky-500/10 text-sky-400/80'
                        : 'bg-emerald-500/10 text-emerald-400/80'
                    }`}>
                      +{area.change}%
                    </span>
                  </div>
                  <div className="text-sm md:text-base font-extralight text-white/75 tracking-tight">
                    ₹{area.price}
                  </div>
                  <div className="text-[8px] md:text-[9px] text-slate-600 font-light">
                    per sq.ft
                  </div>
                </div>
              ))}
            </div>
            
            {/* Minimal Legend */}
            <div className="flex items-center justify-center gap-4 md:gap-6 mt-4 pt-4 border-t border-white/[0.04]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60"></span>
                <span className="text-[9px] md:text-[10px] text-slate-500 font-light">Premium</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400/60"></span>
                <span className="text-[9px] md:text-[10px] text-slate-500 font-light">Growth</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60"></span>
                <span className="text-[9px] md:text-[10px] text-slate-500 font-light">Emerging</span>
              </div>
            </div>
          </div>
        </div>

        {/* Source Attribution */}
        <div className="mt-8 text-center">
          <p className="text-[9px] md:text-[10px] text-slate-600 font-light tracking-wide">
            Data from Karnataka IGR, Kaveri 2.0 & RERA Karnataka · Q1 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketInsightsSection;
