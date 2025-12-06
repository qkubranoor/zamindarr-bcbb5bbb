import { TrendingUp, Lightbulb, MapPin, Building2, AlertTriangle } from "lucide-react";

const MarketInsightsSection = () => {
  const insightCards = [
    {
      id: "heatmap",
      title: "Property Rates",
      subtitle: "Bangalore Urban",
      description: "Guidance values as per Karnataka Stamps & Registration Department",
      icon: TrendingUp,
      iconBg: "bg-slate-100",
      iconColor: "text-slate-700",
      stats: [
        { label: "Avg. Rate (Residential)", value: "₹5,500–₹18,000/sqft" },
        { label: "Premium Zones", value: "Koramangala, Indiranagar" },
        { label: "Growth Corridors", value: "Sarjapur, Devanahalli" },
      ],
    },
    {
      id: "builders",
      title: "RERA Developers",
      subtitle: "Karnataka",
      description: "Top developers by registered projects in Karnataka RERA",
      icon: Building2,
      iconBg: "bg-slate-100",
      iconColor: "text-slate-700",
      builders: [
        { name: "Prestige Group", reraProjects: "120+" },
        { name: "Brigade Enterprises", reraProjects: "95+" },
        { name: "Sobha Limited", reraProjects: "75+" },
        { name: "Godrej Properties", reraProjects: "40+" },
        { name: "Puravankara Limited", reraProjects: "55+" },
      ],
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
      id: "rera-violators",
      title: "K-RERA Lapsed Projects",
      subtitle: "Under Investigation",
      description: "Projects with expired registration or non-compliance as per K-RERA",
      icon: AlertTriangle,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      violators: [
        { name: "Nadaprabhu Kempegowda Layout", promoter: "BDA", status: "Default", issue: "No extension filed" },
        { name: "Total Lapsed Projects", promoter: "Various", status: "2,404", issue: "Registration expired" },
        { name: "Default Projects", promoter: "Various", status: "5", issue: "No response to notices" },
        { name: "Under Investigation", promoter: "Unregistered", status: "100+", issue: "Operating without RERA" },
      ],
      note: "~35% of 6,990 registered projects are lapsed or in default"
    }
  ];

  return (
    <section className="py-10 md:py-14 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-5 md:mb-6">
          <span className="text-[10px] md:text-xs font-medium text-slate-400 uppercase tracking-wider">
            Market Intelligence
          </span>
          <h2 className="text-base md:text-lg lg:text-xl font-medium text-slate-900 mt-0.5">
            Bangalore Real Estate Insights
          </h2>
        </div>

        {/* Sliding Cards */}
        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
          
          {/* Card 1: Property Rates */}
          <div className="flex-shrink-0 w-[75vw] md:w-auto snap-start bg-slate-50/50 border border-slate-200/80 rounded-xl p-4">
            <div className="flex items-start justify-between mb-2.5">
              <div>
                <h3 className="text-xs md:text-sm font-medium text-slate-900">{insightCards[0].title}</h3>
                <p className="text-[9px] md:text-[10px] text-slate-500">{insightCards[0].subtitle}</p>
              </div>
              <div className={`w-7 h-7 rounded-lg ${insightCards[0].iconBg} flex items-center justify-center`}>
                <TrendingUp className={`w-3.5 h-3.5 ${insightCards[0].iconColor}`} />
              </div>
            </div>
            
            <div className="flex items-start gap-1.5 mb-2.5 p-1.5 bg-white/80 rounded border border-slate-100">
              <Lightbulb className="w-2.5 h-2.5 text-slate-400 mt-0.5 flex-shrink-0" />
              <p className="text-[9px] text-slate-500 leading-relaxed">{insightCards[0].description}</p>
            </div>

            <div className="space-y-1.5">
              {insightCards[0].stats?.map((stat, idx) => (
                <div key={idx} className="flex items-start justify-between py-1 border-b border-slate-100 last:border-0">
                  <span className="text-[9px] text-slate-500">{stat.label}</span>
                  <span className="text-[9px] font-medium text-slate-700 text-right max-w-[50%]">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: RERA Developers */}
          <div className="flex-shrink-0 w-[75vw] md:w-auto snap-start bg-slate-50/50 border border-slate-200/80 rounded-xl p-4">
            <div className="flex items-start justify-between mb-2.5">
              <div>
                <h3 className="text-xs md:text-sm font-medium text-slate-900">{insightCards[1].title}</h3>
                <p className="text-[9px] md:text-[10px] text-slate-500">{insightCards[1].subtitle}</p>
              </div>
              <div className={`w-7 h-7 rounded-lg ${insightCards[1].iconBg} flex items-center justify-center`}>
                <Building2 className={`w-3.5 h-3.5 ${insightCards[1].iconColor}`} />
              </div>
            </div>
            
            <div className="flex items-start gap-1.5 mb-2.5 p-1.5 bg-white/80 rounded border border-slate-100">
              <Lightbulb className="w-2.5 h-2.5 text-slate-400 mt-0.5 flex-shrink-0" />
              <p className="text-[9px] text-slate-500 leading-relaxed">{insightCards[1].description}</p>
            </div>

            <div className="space-y-1">
              {insightCards[1].builders?.map((builder, idx) => (
                <div key={idx} className="flex items-center justify-between py-1 px-1.5 bg-white/60 rounded">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded bg-slate-200 text-slate-600 text-[8px] font-medium flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-[9px] font-medium text-slate-700">{builder.name}</span>
                  </div>
                  <span className="text-[8px] text-slate-500">{builder.reraProjects}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Micro-Markets */}
          <div className="flex-shrink-0 w-[75vw] md:w-auto snap-start bg-slate-50/50 border border-slate-200/80 rounded-xl p-4">
            <div className="flex items-start justify-between mb-2.5">
              <div>
                <h3 className="text-xs md:text-sm font-medium text-slate-900">{insightCards[2].title}</h3>
                <p className="text-[9px] md:text-[10px] text-slate-500">{insightCards[2].subtitle}</p>
              </div>
              <div className={`w-7 h-7 rounded-lg ${insightCards[2].iconBg} flex items-center justify-center`}>
                <MapPin className={`w-3.5 h-3.5 ${insightCards[2].iconColor}`} />
              </div>
            </div>
            
            <div className="flex items-start gap-1.5 mb-2.5 p-1.5 bg-white/80 rounded border border-slate-100">
              <Lightbulb className="w-2.5 h-2.5 text-slate-400 mt-0.5 flex-shrink-0" />
              <p className="text-[9px] text-slate-500 leading-relaxed">{insightCards[2].description}</p>
            </div>

            <div className="space-y-1">
              {insightCards[2].localities?.map((locality, idx) => (
                <div key={idx} className="flex items-center justify-between py-1 px-1.5 bg-white/60 rounded">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-medium text-slate-700">{locality.name}</span>
                    <span className="text-[7px] text-slate-400">{locality.type}</span>
                  </div>
                  <span className="text-[8px] text-slate-600 font-medium">{locality.range}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: RERA Violators / Lapsed Projects */}
          <div className="flex-shrink-0 w-[75vw] md:w-auto snap-start bg-amber-50/30 border border-amber-200/60 rounded-xl p-4">
            <div className="flex items-start justify-between mb-2.5">
              <div>
                <h3 className="text-xs md:text-sm font-medium text-slate-900">{insightCards[3].title}</h3>
                <p className="text-[9px] md:text-[10px] text-amber-600">{insightCards[3].subtitle}</p>
              </div>
              <div className={`w-7 h-7 rounded-lg ${insightCards[3].iconBg} flex items-center justify-center`}>
                <AlertTriangle className={`w-3.5 h-3.5 ${insightCards[3].iconColor}`} />
              </div>
            </div>
            
            <div className="flex items-start gap-1.5 mb-2.5 p-1.5 bg-white/80 rounded border border-amber-100">
              <AlertTriangle className="w-2.5 h-2.5 text-amber-500 mt-0.5 flex-shrink-0" />
              <p className="text-[9px] text-slate-600 leading-relaxed">{insightCards[3].description}</p>
            </div>

            <div className="space-y-1">
              {insightCards[3].violators?.map((violator, idx) => (
                <div key={idx} className="flex items-center justify-between py-1 px-1.5 bg-white/70 rounded border border-amber-100/50">
                  <div className="flex flex-col max-w-[60%]">
                    <span className="text-[9px] font-medium text-slate-700 truncate">{violator.name}</span>
                    <span className="text-[7px] text-slate-400">{violator.promoter}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] font-medium text-amber-700">{violator.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[8px] text-amber-600/80 mt-2 leading-relaxed">
              {insightCards[3].note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsightsSection;