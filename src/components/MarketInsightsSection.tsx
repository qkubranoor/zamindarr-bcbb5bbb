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
          <div className="flex-shrink-0 w-[280px] md:w-auto snap-center group">
            <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/50 to-white border border-amber-100/60 p-5">
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[9px] text-amber-600 uppercase tracking-[0.2em] font-medium">K-RERA Alert</p>
                  <h3 className="text-sm font-medium text-slate-800 mt-0.5">Lapsed Projects</h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600 text-[10px]">⚠</span>
                </div>
              </div>

              {/* Main Stat */}
              <div className="text-center py-3 bg-white/70 rounded-xl border border-amber-100/40 mb-3">
                <p className="text-2xl font-light text-amber-600">2,404</p>
                <p className="text-[9px] text-slate-500">Expired Registration</p>
              </div>

              {/* Secondary Stats */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="text-center py-2 bg-white/60 rounded-lg">
                  <p className="text-sm font-light text-red-500">5</p>
                  <p className="text-[8px] text-slate-400">Default</p>
                </div>
                <div className="text-center py-2 bg-white/60 rounded-lg">
                  <p className="text-sm font-light text-amber-600">100+</p>
                  <p className="text-[8px] text-slate-400">Investigation</p>
                </div>
                <div className="text-center py-2 bg-white/60 rounded-lg">
                  <p className="text-sm font-light text-slate-600">35%</p>
                  <p className="text-[8px] text-slate-400">Of Total</p>
                </div>
              </div>

              {/* Key Violations */}
              <div className="space-y-1.5 mb-3">
                <p className="text-[9px] text-slate-500 uppercase tracking-wider">Common Violations</p>
                <div className="flex items-center gap-2 text-[10px] text-slate-600">
                  <span className="w-1 h-1 rounded-full bg-red-400" />
                  No quarterly progress reports
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-600">
                  <span className="w-1 h-1 rounded-full bg-red-400" />
                  Missed completion deadlines
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-600">
                  <span className="w-1 h-1 rounded-full bg-red-400" />
                  Unregistered advertisements
                </div>
              </div>

              {/* Notable Case */}
              <div className="p-2.5 bg-red-50/50 rounded-lg border border-red-100/50">
                <p className="text-[9px] text-red-600 font-medium mb-0.5">Notable Default</p>
                <p className="text-[10px] text-slate-600">Kempegowda Layout (BDA) – No extension filed since 2021</p>
              </div>
            </div>
          </div>

          {/* Top Developers Card */}
          <div className="flex-shrink-0 w-[280px] md:w-auto snap-center">
            <div className="h-full rounded-2xl bg-white border border-slate-100 p-5">
              
              <div className="mb-4">
                <p className="text-[9px] text-slate-400 uppercase tracking-[0.2em]">Karnataka RERA</p>
                <h3 className="text-sm font-medium text-slate-800 mt-0.5">Top Developers</h3>
              </div>

              <div className="space-y-2">
                {[
                  { name: "Prestige Group", count: "120+", segment: "Luxury" },
                  { name: "Brigade Enterprises", count: "95+", segment: "Premium" },
                  { name: "Sobha Limited", count: "75+", segment: "Ultra-Luxury" },
                  { name: "Puravankara", count: "55+", segment: "Mid-Premium" },
                  { name: "Godrej Properties", count: "40+", segment: "Premium" },
                ].map((dev, i) => (
                  <div key={i} className="flex items-center justify-between py-2 px-2.5 bg-slate-50/80 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] text-slate-400 w-3">{i + 1}</span>
                      <div>
                        <p className="text-[11px] text-slate-700">{dev.name}</p>
                        <p className="text-[8px] text-slate-400">{dev.segment}</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500">{dev.count}</span>
                  </div>
                ))}
              </div>

              <p className="text-[8px] text-slate-400 mt-3 text-center">
                Based on registered projects count
              </p>
            </div>
          </div>

          {/* Micro-Markets Card */}
          <div className="flex-shrink-0 w-[280px] md:w-auto snap-center">
            <div className="h-full rounded-2xl bg-white border border-slate-100 p-5">
              
              <div className="mb-4">
                <p className="text-[9px] text-slate-400 uppercase tracking-[0.2em]">Price Zones</p>
                <h3 className="text-sm font-medium text-slate-800 mt-0.5">Micro-Markets</h3>
              </div>

              <div className="space-y-2">
                {[
                  { area: "Koramangala", price: "₹14–22K", tag: "Premium", growth: "+12%" },
                  { area: "Whitefield", price: "₹8–16K", tag: "IT Hub", growth: "+15%" },
                  { area: "Hebbal", price: "₹9–15K", tag: "North", growth: "+10%" },
                  { area: "Sarjapur Rd", price: "₹6.5–12K", tag: "Growth", growth: "+18%" },
                  { area: "E-City", price: "₹5.5–9.5K", tag: "Tech", growth: "+14%" },
                ].map((loc, i) => (
                  <div key={i} className="flex items-center justify-between py-2 px-2.5 bg-slate-50/80 rounded-lg">
                    <div>
                      <p className="text-[11px] text-slate-700">{loc.area}</p>
                      <p className="text-[8px] text-slate-400">{loc.tag}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-medium text-slate-600">{loc.price}</p>
                      <p className="text-[8px] text-emerald-500">{loc.growth}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[8px] text-slate-400 mt-3 text-center">
                Price per sq.ft · YoY growth
              </p>
            </div>
          </div>

          {/* Guidance Values Card */}
          <div className="flex-shrink-0 w-[280px] md:w-auto snap-center">
            <div className="h-full rounded-2xl bg-white border border-slate-100 p-5">
              
              <div className="mb-4">
                <p className="text-[9px] text-slate-400 uppercase tracking-[0.2em]">Kaveri 2.0</p>
                <h3 className="text-sm font-medium text-slate-800 mt-0.5">Guidance Values</h3>
              </div>

              {/* Main Rate */}
              <div className="text-center py-3 bg-slate-50/80 rounded-xl mb-3">
                <p className="text-[9px] text-slate-400 mb-0.5">Avg. Residential</p>
                <p className="text-lg font-light text-slate-700">₹5.5K – ₹18K</p>
                <p className="text-[8px] text-slate-400">/sq.ft</p>
              </div>

              {/* Zone Breakdown */}
              <div className="space-y-2 mb-3">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-[10px] text-slate-500">Premium Zones</span>
                  <span className="text-[10px] text-slate-700">₹15K–22K</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-[10px] text-slate-500">Mid-Premium</span>
                  <span className="text-[10px] text-slate-700">₹8K–15K</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-[10px] text-slate-500">Affordable</span>
                  <span className="text-[10px] text-slate-700">₹4K–8K</span>
                </div>
              </div>

              {/* Key Areas */}
              <div className="space-y-1.5">
                <p className="text-[9px] text-slate-400">Top Growth Corridors</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Sarjapur", "Devanahalli", "Yelahanka", "Thanisandra"].map((area) => (
                    <span key={area} className="text-[8px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      {area}
                    </span>
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

export default MarketInsightsSection;