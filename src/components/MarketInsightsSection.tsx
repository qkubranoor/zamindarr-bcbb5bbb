const MarketInsightsSection = () => {
  return (
    <section className="py-8 md:py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Minimal Header */}
        <div className="mb-6 md:mb-8">
          <p className="text-[9px] md:text-[10px] text-slate-400 uppercase tracking-[0.3em] mb-1">
            Intelligence
          </p>
          <h2 className="text-base md:text-lg font-light text-slate-800">
            Bangalore Market Overview
          </h2>
        </div>

        {/* Premium Horizontal Scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 md:overflow-visible md:pb-0 md:gap-5">
          
          {/* K-RERA Alert Card */}
          <div className="flex-shrink-0 w-[260px] md:w-auto snap-center group">
            <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/50 to-white border border-amber-100/60 p-5 md:p-6">
              
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[9px] text-amber-600 uppercase tracking-[0.2em] font-medium">K-RERA</p>
                  <h3 className="text-sm md:text-base font-medium text-slate-800 mt-0.5">Lapsed Projects</h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600 text-xs">⚠</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-center py-4 bg-white/60 rounded-xl border border-amber-100/40">
                  <p className="text-2xl md:text-3xl font-light text-amber-600">2,404</p>
                  <p className="text-[10px] text-slate-500 mt-1">Expired Registration</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="text-center py-2.5 bg-white/60 rounded-lg">
                    <p className="text-base font-light text-red-500">5</p>
                    <p className="text-[9px] text-slate-400">Default</p>
                  </div>
                  <div className="text-center py-2.5 bg-white/60 rounded-lg">
                    <p className="text-base font-light text-amber-600">100+</p>
                    <p className="text-[9px] text-slate-400">Investigation</p>
                  </div>
                </div>
              </div>

              <p className="text-[9px] text-amber-600/70 mt-4 text-center">
                ~35% of registered projects
              </p>
            </div>
          </div>

          {/* Top Developers Card */}
          <div className="flex-shrink-0 w-[260px] md:w-auto snap-center">
            <div className="h-full rounded-2xl bg-white border border-slate-100 p-5 md:p-6">
              
              <div className="mb-5">
                <p className="text-[9px] text-slate-400 uppercase tracking-[0.2em]">Karnataka RERA</p>
                <h3 className="text-sm md:text-base font-medium text-slate-800 mt-0.5">Top Developers</h3>
              </div>

              <div className="space-y-2.5">
                {[
                  { name: "Prestige Group", count: "120+" },
                  { name: "Brigade Enterprises", count: "95+" },
                  { name: "Sobha Limited", count: "75+" },
                  { name: "Puravankara", count: "55+" },
                  { name: "Godrej Properties", count: "40+" },
                ].map((dev, i) => (
                  <div key={i} className="flex items-center justify-between py-2 px-3 bg-slate-50/80 rounded-lg">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[9px] text-slate-400 w-3">{i + 1}</span>
                      <span className="text-[11px] text-slate-700">{dev.name}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">{dev.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Micro-Markets Card */}
          <div className="flex-shrink-0 w-[260px] md:w-auto snap-center">
            <div className="h-full rounded-2xl bg-white border border-slate-100 p-5 md:p-6">
              
              <div className="mb-5">
                <p className="text-[9px] text-slate-400 uppercase tracking-[0.2em]">Price Zones</p>
                <h3 className="text-sm md:text-base font-medium text-slate-800 mt-0.5">Micro-Markets</h3>
              </div>

              <div className="space-y-2.5">
                {[
                  { area: "Koramangala", price: "₹14–22K", tag: "Premium" },
                  { area: "Whitefield", price: "₹8–16K", tag: "IT Hub" },
                  { area: "Hebbal", price: "₹9–15K", tag: "North" },
                  { area: "Sarjapur Rd", price: "₹6.5–12K", tag: "Growth" },
                  { area: "E-City", price: "₹5.5–9.5K", tag: "Tech" },
                ].map((loc, i) => (
                  <div key={i} className="flex items-center justify-between py-2 px-3 bg-slate-50/80 rounded-lg">
                    <div>
                      <p className="text-[11px] text-slate-700">{loc.area}</p>
                      <p className="text-[8px] text-slate-400">{loc.tag}</p>
                    </div>
                    <span className="text-[10px] font-medium text-slate-600">{loc.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Guidance Values Card */}
          <div className="flex-shrink-0 w-[260px] md:w-auto snap-center">
            <div className="h-full rounded-2xl bg-white border border-slate-100 p-5 md:p-6">
              
              <div className="mb-5">
                <p className="text-[9px] text-slate-400 uppercase tracking-[0.2em]">Kaveri 2.0</p>
                <h3 className="text-sm md:text-base font-medium text-slate-800 mt-0.5">Guidance Values</h3>
              </div>

              <div className="space-y-3">
                <div className="text-center py-4 bg-slate-50/80 rounded-xl">
                  <p className="text-[10px] text-slate-400 mb-1">Avg. Residential</p>
                  <p className="text-lg font-light text-slate-700">₹5.5K – ₹18K</p>
                  <p className="text-[9px] text-slate-400">/sq.ft</p>
                </div>

                <div className="py-3 border-t border-slate-100">
                  <p className="text-[9px] text-slate-400 mb-1">Premium Zones</p>
                  <p className="text-[11px] text-slate-600">Koramangala, Indiranagar</p>
                </div>

                <div className="py-3 border-t border-slate-100">
                  <p className="text-[9px] text-slate-400 mb-1">Growth Corridors</p>
                  <p className="text-[11px] text-slate-600">Sarjapur, Devanahalli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsightsSection;