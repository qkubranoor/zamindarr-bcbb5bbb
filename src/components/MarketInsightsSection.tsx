import { TrendingUp, Lightbulb, MapPin, Building2, AlertTriangle } from "lucide-react";

const MarketInsightsSection = () => {
  return (
    <section className="py-10 md:py-14 px-4 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <span className="text-[10px] md:text-xs font-light text-slate-400 uppercase tracking-[0.2em]">
            Market Intelligence
          </span>
          <h2 className="text-lg md:text-xl lg:text-2xl font-light text-slate-800 mt-1 tracking-tight">
            Bangalore Real Estate Insights
          </h2>
        </div>

        {/* Sliding Cards */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
          
          {/* Card 1: K-RERA Lapsed Projects (First) */}
          <div className="flex-shrink-0 w-[280px] md:w-auto snap-start bg-gradient-to-br from-amber-50/80 to-orange-50/40 border border-amber-200/40 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-amber-100/80 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-800">K-RERA Lapsed Projects</h3>
                <p className="text-[10px] text-amber-600 font-medium">Under Investigation</p>
              </div>
            </div>
            
            <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
              Projects with expired registration or non-compliance as per Karnataka RERA
            </p>

            <div className="space-y-2.5">
              <div className="bg-white/70 rounded-xl p-3 border border-amber-100/60">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[11px] font-medium text-slate-700">Total Lapsed</p>
                    <p className="text-[9px] text-slate-400 mt-0.5">Registration expired</p>
                  </div>
                  <span className="text-base font-semibold text-amber-600">2,404</span>
                </div>
              </div>
              
              <div className="bg-white/70 rounded-xl p-3 border border-amber-100/60">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[11px] font-medium text-slate-700">Default Projects</p>
                    <p className="text-[9px] text-slate-400 mt-0.5">No response to notices</p>
                  </div>
                  <span className="text-base font-semibold text-red-500">5</span>
                </div>
              </div>
              
              <div className="bg-white/70 rounded-xl p-3 border border-amber-100/60">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[11px] font-medium text-slate-700">Under Investigation</p>
                    <p className="text-[9px] text-slate-400 mt-0.5">Operating without RERA</p>
                  </div>
                  <span className="text-base font-semibold text-amber-600">100+</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-amber-200/40">
              <p className="text-[10px] text-amber-700/70 leading-relaxed">
                ~35% of 6,990 registered projects are lapsed or in default
              </p>
            </div>
          </div>

          {/* Card 2: RERA Developers */}
          <div className="flex-shrink-0 w-[280px] md:w-auto snap-start bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-slate-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-800">RERA Developers</h3>
                <p className="text-[10px] text-slate-400">Karnataka</p>
              </div>
            </div>
            
            <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
              Top developers by registered projects in Karnataka RERA
            </p>

            <div className="space-y-2">
              {[
                { name: "Prestige Group", projects: "120+" },
                { name: "Brigade Enterprises", projects: "95+" },
                { name: "Sobha Limited", projects: "75+" },
                { name: "Puravankara", projects: "55+" },
                { name: "Godrej Properties", projects: "40+" },
              ].map((builder, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 px-3 bg-slate-50/80 rounded-lg">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-slate-200/80 text-slate-500 text-[10px] font-medium flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-[11px] font-medium text-slate-700">{builder.name}</span>
                  </div>
                  <span className="text-[10px] text-slate-400">{builder.projects}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Micro-Markets */}
          <div className="flex-shrink-0 w-[280px] md:w-auto snap-start bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-slate-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-800">Key Micro-Markets</h3>
                <p className="text-[10px] text-slate-400">Bangalore</p>
              </div>
            </div>
            
            <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
              Major residential corridors with indicative price ranges
            </p>

            <div className="space-y-2">
              {[
                { name: "Koramangala", range: "₹14,000–22,000", type: "Premium" },
                { name: "Whitefield", range: "₹8,000–16,000", type: "IT Corridor" },
                { name: "Hebbal", range: "₹9,000–15,000", type: "North BLR" },
                { name: "Sarjapur Road", range: "₹6,500–12,000", type: "Growth" },
                { name: "Electronic City", range: "₹5,500–9,500", type: "Tech Park" },
              ].map((locality, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 px-3 bg-slate-50/80 rounded-lg">
                  <div>
                    <p className="text-[11px] font-medium text-slate-700">{locality.name}</p>
                    <p className="text-[9px] text-slate-400">{locality.type}</p>
                  </div>
                  <span className="text-[10px] font-medium text-slate-600">{locality.range}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Property Rates */}
          <div className="flex-shrink-0 w-[280px] md:w-auto snap-start bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-slate-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-800">Property Rates</h3>
                <p className="text-[10px] text-slate-400">Bangalore Urban</p>
              </div>
            </div>
            
            <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
              Guidance values as per Karnataka Stamps & Registration Department
            </p>

            <div className="space-y-3">
              <div className="bg-slate-50/80 rounded-xl p-3">
                <p className="text-[10px] text-slate-400 mb-1">Avg. Residential Rate</p>
                <p className="text-sm font-medium text-slate-700">₹5,500 – ₹18,000<span className="text-[10px] font-normal text-slate-400">/sqft</span></p>
              </div>
              
              <div className="bg-slate-50/80 rounded-xl p-3">
                <p className="text-[10px] text-slate-400 mb-1">Premium Zones</p>
                <p className="text-[11px] font-medium text-slate-600">Koramangala, Indiranagar, Jayanagar</p>
              </div>
              
              <div className="bg-slate-50/80 rounded-xl p-3">
                <p className="text-[10px] text-slate-400 mb-1">Growth Corridors</p>
                <p className="text-[11px] font-medium text-slate-600">Sarjapur, Devanahalli, Yelahanka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsightsSection;