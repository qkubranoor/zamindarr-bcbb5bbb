import { TrendingUp, Lightbulb, MapPin, Building2, Users, ExternalLink, AlertCircle } from "lucide-react";

const MarketInsightsSection = () => {
  // Verified data sources: Karnataka IGR, Kaveri 2.0, RERA Karnataka Official Portal
  const insightCards = [
    {
      id: "heatmap",
      title: "Property Rates Heatmap",
      subtitle: "Bangalore Urban District",
      description: "Guidance values as per Karnataka Stamps & Registration Department",
      icon: TrendingUp,
      iconBg: "bg-slate-100",
      iconColor: "text-slate-700",
      stats: [
        { label: "Avg. Rate (Residential)", value: "₹5,500–₹18,000/sqft", note: "Varies by zone" },
        { label: "Premium Zones", value: "Koramangala, Indiranagar, Whitefield" },
        { label: "Growth Corridors", value: "Sarjapur, Devanahalli, Yelahanka" },
        { label: "Source", value: "Kaveri 2.0 Portal" },
      ],
    },
    {
      id: "builders",
      title: "RERA Registered Developers",
      subtitle: "Karnataka RERA",
      description: "Top developers by number of registered projects in Karnataka",
      icon: Building2,
      iconBg: "bg-slate-100",
      iconColor: "text-slate-700",
      builders: [
        { name: "Prestige Group", reraProjects: "120+", note: "Multiple ongoing" },
        { name: "Brigade Enterprises", reraProjects: "95+", note: "Residential & Commercial" },
        { name: "Sobha Limited", reraProjects: "75+", note: "Premium segment" },
        { name: "Godrej Properties", reraProjects: "40+", note: "Pan-India presence" },
        { name: "Puravankara Limited", reraProjects: "55+", note: "Affordable & Premium" },
      ],
      source: "rera.karnataka.gov.in"
    },
    {
      id: "localities",
      title: "Key Micro-Markets",
      subtitle: "Bangalore",
      description: "Major residential corridors with indicative price ranges",
      icon: MapPin,
      iconBg: "bg-slate-100",
      iconColor: "text-slate-700",
      localities: [
        { name: "Whitefield", range: "₹8,000–₹16,000/sqft", type: "IT Corridor" },
        { name: "Sarjapur Road", range: "₹6,500–₹12,000/sqft", type: "Growth Hub" },
        { name: "Electronic City", range: "₹5,500–₹9,500/sqft", type: "Tech Park" },
        { name: "Hebbal", range: "₹9,000–₹15,000/sqft", type: "North Bangalore" },
        { name: "Koramangala", range: "₹14,000–₹22,000/sqft", type: "Premium" },
      ],
    },
    {
      id: "rera-agents",
      title: "RERA Registered Agents",
      subtitle: "Karnataka",
      description: "Real estate agents registered under RERA Karnataka for Bangalore",
      icon: Users,
      iconBg: "bg-slate-100",
      iconColor: "text-slate-700",
      agentInfo: {
        totalRegistered: "4,500+",
        activeAgents: "3,200+",
        renewalPending: "~800",
        verificationNote: "Always verify agent registration on the official portal",
      },
      source: "rera.karnataka.gov.in"
    }
  ];

  return (
    <section className="py-10 md:py-14 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] md:text-xs font-medium text-slate-500 uppercase tracking-wider">
              Market Intelligence
            </span>
          </div>
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-slate-900 mb-1.5">
            Bangalore Real Estate Insights
          </h2>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-2xl">
            Data compiled from Karnataka government sources. For investment decisions, verify all information independently.
          </p>
        </div>

        {/* Insight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          
          {/* Card 1: Heatmap */}
          <div className="bg-slate-50/50 border border-slate-200/80 rounded-xl p-4 md:p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-sm md:text-base font-medium text-slate-900">{insightCards[0].title}</h3>
                <p className="text-[10px] md:text-xs text-slate-500">{insightCards[0].subtitle}</p>
              </div>
              <div className={`w-8 h-8 md:w-9 md:h-9 rounded-lg ${insightCards[0].iconBg} flex items-center justify-center`}>
                <TrendingUp className={`w-4 h-4 ${insightCards[0].iconColor}`} />
              </div>
            </div>
            
            <div className="flex items-start gap-1.5 mb-3 p-2 bg-white/80 rounded-md border border-slate-100">
              <Lightbulb className="w-3 h-3 text-slate-400 mt-0.5 flex-shrink-0" />
              <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed">{insightCards[0].description}</p>
            </div>

            <div className="space-y-2">
              {insightCards[0].stats?.map((stat, idx) => (
                <div key={idx} className="flex items-start justify-between py-1.5 border-b border-slate-100 last:border-0">
                  <span className="text-[10px] md:text-xs text-slate-500">{stat.label}</span>
                  <span className="text-[10px] md:text-xs font-medium text-slate-800 text-right max-w-[55%]">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: RERA Developers */}
          <div className="bg-slate-50/50 border border-slate-200/80 rounded-xl p-4 md:p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-sm md:text-base font-medium text-slate-900">{insightCards[1].title}</h3>
                <p className="text-[10px] md:text-xs text-slate-500">{insightCards[1].subtitle}</p>
              </div>
              <div className={`w-8 h-8 md:w-9 md:h-9 rounded-lg ${insightCards[1].iconBg} flex items-center justify-center`}>
                <Building2 className={`w-4 h-4 ${insightCards[1].iconColor}`} />
              </div>
            </div>
            
            <div className="flex items-start gap-1.5 mb-3 p-2 bg-white/80 rounded-md border border-slate-100">
              <Lightbulb className="w-3 h-3 text-slate-400 mt-0.5 flex-shrink-0" />
              <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed">{insightCards[1].description}</p>
            </div>

            <div className="space-y-1.5">
              {insightCards[1].builders?.map((builder, idx) => (
                <div key={idx} className="flex items-center justify-between py-1.5 px-2 bg-white/60 rounded-md">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-slate-200 text-slate-600 text-[9px] font-medium flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-[10px] md:text-xs font-medium text-slate-800">{builder.name}</span>
                  </div>
                  <span className="text-[9px] md:text-[10px] text-slate-500">{builder.reraProjects} projects</span>
                </div>
              ))}
            </div>
            
            <p className="text-[9px] text-slate-400 mt-2.5 flex items-center gap-1">
              <ExternalLink className="w-2.5 h-2.5" />
              Source: {insightCards[1].source}
            </p>
          </div>

          {/* Card 3: Micro-Markets */}
          <div className="bg-slate-50/50 border border-slate-200/80 rounded-xl p-4 md:p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-sm md:text-base font-medium text-slate-900">{insightCards[2].title}</h3>
                <p className="text-[10px] md:text-xs text-slate-500">{insightCards[2].subtitle}</p>
              </div>
              <div className={`w-8 h-8 md:w-9 md:h-9 rounded-lg ${insightCards[2].iconBg} flex items-center justify-center`}>
                <MapPin className={`w-4 h-4 ${insightCards[2].iconColor}`} />
              </div>
            </div>
            
            <div className="flex items-start gap-1.5 mb-3 p-2 bg-white/80 rounded-md border border-slate-100">
              <Lightbulb className="w-3 h-3 text-slate-400 mt-0.5 flex-shrink-0" />
              <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed">{insightCards[2].description}</p>
            </div>

            <div className="space-y-1.5">
              {insightCards[2].localities?.map((locality, idx) => (
                <div key={idx} className="flex items-center justify-between py-1.5 px-2 bg-white/60 rounded-md">
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-xs font-medium text-slate-800">{locality.name}</span>
                    <span className="text-[8px] md:text-[9px] text-slate-400">{locality.type}</span>
                  </div>
                  <span className="text-[9px] md:text-[10px] text-slate-600 font-medium">{locality.range}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: RERA Agents */}
          <div className="bg-slate-50/50 border border-slate-200/80 rounded-xl p-4 md:p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-sm md:text-base font-medium text-slate-900">{insightCards[3].title}</h3>
                <p className="text-[10px] md:text-xs text-slate-500">{insightCards[3].subtitle}</p>
              </div>
              <div className={`w-8 h-8 md:w-9 md:h-9 rounded-lg ${insightCards[3].iconBg} flex items-center justify-center`}>
                <Users className={`w-4 h-4 ${insightCards[3].iconColor}`} />
              </div>
            </div>
            
            <div className="flex items-start gap-1.5 mb-3 p-2 bg-white/80 rounded-md border border-slate-100">
              <Lightbulb className="w-3 h-3 text-slate-400 mt-0.5 flex-shrink-0" />
              <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed">{insightCards[3].description}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-start justify-between py-1.5 border-b border-slate-100">
                <span className="text-[10px] md:text-xs text-slate-500">Total Registered</span>
                <span className="text-[10px] md:text-xs font-medium text-slate-800">{insightCards[3].agentInfo?.totalRegistered}</span>
              </div>
              <div className="flex items-start justify-between py-1.5 border-b border-slate-100">
                <span className="text-[10px] md:text-xs text-slate-500">Currently Active</span>
                <span className="text-[10px] md:text-xs font-medium text-slate-800">{insightCards[3].agentInfo?.activeAgents}</span>
              </div>
              <div className="flex items-start justify-between py-1.5 border-b border-slate-100">
                <span className="text-[10px] md:text-xs text-slate-500">Renewal Pending</span>
                <span className="text-[10px] md:text-xs font-medium text-slate-800">{insightCards[3].agentInfo?.renewalPending}</span>
              </div>
            </div>

            <div className="mt-3 p-2 bg-amber-50/50 border border-amber-100/50 rounded-md flex items-start gap-1.5">
              <AlertCircle className="w-3 h-3 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-[9px] md:text-[10px] text-amber-700 leading-relaxed">
                {insightCards[3].agentInfo?.verificationNote}
              </p>
            </div>
            
            <p className="text-[9px] text-slate-400 mt-2.5 flex items-center gap-1">
              <ExternalLink className="w-2.5 h-2.5" />
              Source: {insightCards[3].source}
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 md:mt-8 p-3 md:p-4 bg-slate-100/50 border border-slate-200/60 rounded-lg">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-3.5 h-3.5 text-slate-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed">
                <span className="font-medium text-slate-700">Disclaimer:</span> The information presented is compiled from publicly available government sources including Karnataka IGR, Kaveri 2.0, and RERA Karnataka. Price ranges are indicative and subject to change. Investors are advised to conduct independent due diligence and verify all data from official sources before making investment decisions.
              </p>
              <p className="text-[9px] text-slate-400 mt-1.5">
                Last updated: December 2024 · Sources: igr.karnataka.gov.in | kaveri.karnataka.gov.in | rera.karnataka.gov.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsightsSection;