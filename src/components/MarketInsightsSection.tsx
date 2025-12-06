const MarketInsightsSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <p className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-[0.25em] mb-2">
            Market Intelligence
          </p>
          <h2 className="text-xl md:text-2xl font-light text-slate-800 tracking-tight">
            Bangalore Real Estate
          </h2>
        </div>

        {/* Cards - Horizontal scroll on mobile */}
        <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 md:gap-6">
          
          {/* K-RERA Lapsed Projects */}
          <div className="flex-shrink-0 w-[300px] md:w-auto snap-center">
            <div className="h-full bg-gradient-to-b from-amber-50 to-white border border-amber-100 rounded-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-amber-100/60">
                <p className="text-[10px] text-amber-600 font-medium uppercase tracking-wider mb-1">K-RERA Alert</p>
                <h3 className="text-base font-medium text-slate-800">Lapsed Projects</h3>
              </div>
              
              <div className="p-5 space-y-4">
                <div className="text-center py-3">
                  <p className="text-3xl font-light text-amber-600">2,404</p>
                  <p className="text-[11px] text-slate-500 mt-1">Projects with expired registration</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-[11px] text-slate-500">Default Projects</span>
                    <span className="text-[12px] font-medium text-red-500">5</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-[11px] text-slate-500">Under Investigation</span>
                    <span className="text-[12px] font-medium text-amber-600">100+</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-[11px] text-slate-500">% of Total Registered</span>
                    <span className="text-[12px] font-medium text-slate-700">~35%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Developers */}
          <div className="flex-shrink-0 w-[300px] md:w-auto snap-center">
            <div className="h-full bg-white border border-slate-100 rounded-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100">
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mb-1">Karnataka RERA</p>
                <h3 className="text-base font-medium text-slate-800">Top Developers</h3>
              </div>
              
              <div className="p-5">
                <div className="space-y-2.5">
                  {[
                    { name: "Prestige Group", count: "120+" },
                    { name: "Brigade Enterprises", count: "95+" },
                    { name: "Sobha Limited", count: "75+" },
                    { name: "Puravankara", count: "55+" },
                    { name: "Godrej Properties", count: "40+" },
                  ].map((dev, i) => (
                    <div key={i} className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-slate-400 w-4">{i + 1}.</span>
                        <span className="text-[12px] text-slate-700">{dev.name}</span>
                      </div>
                      <span className="text-[11px] text-slate-400">{dev.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Micro-Markets */}
          <div className="flex-shrink-0 w-[300px] md:w-auto snap-center">
            <div className="h-full bg-white border border-slate-100 rounded-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100">
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mb-1">Price Zones</p>
                <h3 className="text-base font-medium text-slate-800">Micro-Markets</h3>
              </div>
              
              <div className="p-5">
                <div className="space-y-2.5">
                  {[
                    { area: "Koramangala", price: "₹14K–22K", tag: "Premium" },
                    { area: "Whitefield", price: "₹8K–16K", tag: "IT Hub" },
                    { area: "Hebbal", price: "₹9K–15K", tag: "North" },
                    { area: "Sarjapur Road", price: "₹6.5K–12K", tag: "Growth" },
                    { area: "Electronic City", price: "₹5.5K–9.5K", tag: "Tech" },
                  ].map((loc, i) => (
                    <div key={i} className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded-lg">
                      <div>
                        <p className="text-[12px] text-slate-700">{loc.area}</p>
                        <p className="text-[9px] text-slate-400">{loc.tag}</p>
                      </div>
                      <span className="text-[11px] font-medium text-slate-600">{loc.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Property Rates Overview */}
          <div className="flex-shrink-0 w-[300px] md:w-auto snap-center">
            <div className="h-full bg-white border border-slate-100 rounded-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100">
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mb-1">Kaveri 2.0</p>
                <h3 className="text-base font-medium text-slate-800">Guidance Values</h3>
              </div>
              
              <div className="p-5 space-y-4">
                <div className="text-center py-3 bg-slate-50 rounded-xl">
                  <p className="text-[11px] text-slate-400 mb-1">Avg. Residential</p>
                  <p className="text-lg font-light text-slate-700">₹5,500 – ₹18,000</p>
                  <p className="text-[10px] text-slate-400">per sq.ft</p>
                </div>
                
                <div className="space-y-2">
                  <div className="py-2 border-b border-slate-100">
                    <p className="text-[10px] text-slate-400 mb-0.5">Premium Zones</p>
                    <p className="text-[12px] text-slate-600">Koramangala, Indiranagar</p>
                  </div>
                  <div className="py-2">
                    <p className="text-[10px] text-slate-400 mb-0.5">Growth Corridors</p>
                    <p className="text-[12px] text-slate-600">Sarjapur, Devanahalli</p>
                  </div>
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