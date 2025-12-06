import { TrendingUp, Building2, MapPin, BarChart3, Crown, ArrowUpRight } from "lucide-react";

const MarketInsightsSection = () => {
  const topBuilders = [
    { name: "Prestige Group", projects: 85, rating: 4.8, specialty: "Premium Apartments" },
    { name: "Brigade Group", projects: 72, rating: 4.7, specialty: "Integrated Townships" },
    { name: "Sobha Limited", projects: 58, rating: 4.9, specialty: "Luxury Homes" },
    { name: "Godrej Properties", projects: 45, rating: 4.6, specialty: "Sustainable Living" },
    { name: "Birla Estates", projects: 32, rating: 4.7, specialty: "Modern Design" },
  ];

  const priceHeatMap = [
    { area: "Whitefield", price: "₹15,200", change: "+12%", tier: "high" },
    { area: "Sarjapur Road", price: "₹9,800", change: "+18%", tier: "medium" },
    { area: "Electronic City", price: "₹7,500", change: "+15%", tier: "medium" },
    { area: "Hebbal", price: "₹12,800", change: "+10%", tier: "high" },
    { area: "Devanahalli", price: "₹6,200", change: "+22%", tier: "growth" },
    { area: "Marathahalli", price: "₹11,500", change: "+8%", tier: "high" },
  ];

  const registrationStats = [
    { label: "Q3 2024 Registrations", value: "25,259", subtext: "Housing Units" },
    { label: "Avg. Transaction Value", value: "₹85L", subtext: "Per Property" },
    { label: "YoY Price Appreciation", value: "79%", subtext: "5-Year Growth" },
    { label: "Active RERA Projects", value: "4,200+", subtext: "Registered" },
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "high": return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "medium": return "bg-sky-500/20 text-sky-400 border-sky-500/30";
      case "growth": return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      default: return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#030712] via-[#0a1628] to-[#071224]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
            <BarChart3 className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-xs font-medium tracking-wider uppercase">Market Intelligence</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white mb-3">
            Bangalore Real Estate <span className="text-amber-400">Insights</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Data sourced from Karnataka Kaveri Portal & RERA registrations
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {registrationStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/30 rounded-xl p-4 text-center backdrop-blur-sm"
            >
              <div className="text-2xl md:text-3xl font-light text-white mb-1">{stat.value}</div>
              <div className="text-amber-400 text-xs font-medium mb-0.5">{stat.label}</div>
              <div className="text-slate-500 text-xs">{stat.subtext}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Top Builders Card */}
          <div className="bg-gradient-to-br from-[#0f1f3d]/80 to-[#071224]/80 border border-slate-700/30 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Crown className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-white font-medium">Top Builders</h3>
                <p className="text-slate-400 text-xs">RERA Registered Developers</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {topBuilders.map((builder, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 border border-slate-700/20 hover:border-amber-500/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center">
                      <span className="text-amber-400 text-sm font-medium">{index + 1}</span>
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium group-hover:text-amber-400 transition-colors">{builder.name}</div>
                      <div className="text-slate-500 text-xs">{builder.specialty}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-300 text-sm">{builder.projects} Projects</div>
                    <div className="text-amber-400 text-xs">★ {builder.rating}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price Heat Map Card */}
          <div className="bg-gradient-to-br from-[#0f1f3d]/80 to-[#071224]/80 border border-slate-700/30 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <h3 className="text-white font-medium">Price per Sq.Ft</h3>
                <p className="text-slate-400 text-xs">Average Rates by Locality (2025)</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {priceHeatMap.map((area, index) => (
                <div 
                  key={index}
                  className="p-3 rounded-lg bg-slate-800/30 border border-slate-700/20 hover:border-sky-500/30 transition-colors group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-white text-sm font-medium group-hover:text-sky-400 transition-colors">{area.area}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded border ${getTierColor(area.tier)}`}>
                      {area.change}
                    </span>
                  </div>
                  <div className="text-lg text-slate-300 font-light">{area.price}</div>
                  <div className="text-slate-500 text-xs">per sq.ft</div>
                </div>
              ))}
            </div>
            
            {/* Legend */}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-700/30">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="text-slate-400 text-xs">Premium</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                <span className="text-slate-400 text-xs">Established</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-slate-400 text-xs">High Growth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Source Attribution */}
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-xs">
            Data sourced from Karnataka IGR, Kaveri 2.0 Portal & RERA Karnataka • Updated Q1 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketInsightsSection;
