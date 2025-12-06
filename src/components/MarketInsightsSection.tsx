import { useState } from "react";
import { TrendingUp, Lightbulb, MapPin, Building2, ArrowRight } from "lucide-react";

const MarketInsightsSection = () => {
  const [activeCity, setActiveCity] = useState("Bangalore");
  
  const cities = ["Mumbai", "Bangalore", "Gurgaon", "Pune"];

  const insightCards = [
    {
      title: "Property Rates Heatmap",
      subtitle: `in ${activeCity}`,
      description: "An Interactive Map to help you understand the City's Real Estate",
      icon: TrendingUp,
      iconBg: "bg-teal-50",
      iconColor: "text-teal-600",
      stats: [
        { label: "Sales Transactions", value: "250" },
        { label: "Current Rate/Sq.ft", value: "₹7,533" },
        { label: "Gross Sales Value", value: "₹192 Cr." },
        { label: "Changes", value: "+₹440", isPositive: true },
      ],
      cta: "Explore Now"
    },
    {
      title: "Top Builders",
      subtitle: `in ${activeCity}`,
      description: "RERA registered developers with verified track records",
      icon: Building2,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      builders: [
        { name: "Prestige Group", projects: 85, rating: 4.8 },
        { name: "Brigade Group", projects: 72, rating: 4.7 },
        { name: "Sobha Limited", projects: 58, rating: 4.9 },
        { name: "Godrej Properties", projects: 45, rating: 4.6 },
      ],
      cta: "View All"
    },
    {
      title: "Price Trends",
      subtitle: `in ${activeCity}`,
      description: "Track locality-wise price movements and growth patterns",
      icon: MapPin,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      localities: [
        { name: "Whitefield", price: "₹15,200/sqft", change: "+12%" },
        { name: "Sarjapur Road", price: "₹9,800/sqft", change: "+18%" },
        { name: "Electronic City", price: "₹7,500/sqft", change: "+15%" },
        { name: "Hebbal", price: "₹12,800/sqft", change: "+10%" },
      ],
      cta: "See Analysis"
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">
            Property Price Insights in India
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Get accurate property price insights with city-wise trends, median rates, and micro-market comparisons.{" "}
            <span className="font-medium text-gray-900 cursor-pointer hover:underline">Read More</span>
          </p>
        </div>

        {/* City Tabs */}
        <div className="flex gap-2 md:gap-3 mb-6 md:mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium whitespace-nowrap transition-all ${
                activeCity === city
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Insight Cards - Horizontal Scroll on Mobile */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          
          {/* Card 1: Heatmap */}
          <div className="flex-shrink-0 w-[85vw] md:w-auto snap-start bg-white border border-gray-200 rounded-2xl p-5 md:p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900">{insightCards[0].title}</h3>
                <p className="text-xs md:text-sm text-gray-500">{insightCards[0].subtitle}</p>
              </div>
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${insightCards[0].iconBg} flex items-center justify-center`}>
                <TrendingUp className={`w-5 h-5 md:w-6 md:h-6 ${insightCards[0].iconColor}`} />
              </div>
            </div>
            
            <div className="flex items-start gap-2 mb-4 p-3 bg-teal-50/50 rounded-lg">
              <Lightbulb className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{insightCards[0].description}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {insightCards[0].stats?.map((stat, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-2.5 md:p-3">
                  <p className="text-[10px] md:text-xs text-gray-500 mb-0.5">{stat.label}</p>
                  <p className={`text-sm md:text-base font-semibold ${stat.isPositive ? 'text-green-600' : 'text-gray-900'}`}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <button className="w-full py-2.5 md:py-3 text-sm md:text-base font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors flex items-center justify-center gap-2">
              {insightCards[0].cta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Top Builders */}
          <div className="flex-shrink-0 w-[85vw] md:w-auto snap-start bg-white border border-gray-200 rounded-2xl p-5 md:p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900">{insightCards[1].title}</h3>
                <p className="text-xs md:text-sm text-gray-500">{insightCards[1].subtitle}</p>
              </div>
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${insightCards[1].iconBg} flex items-center justify-center`}>
                <Building2 className={`w-5 h-5 md:w-6 md:h-6 ${insightCards[1].iconColor}`} />
              </div>
            </div>
            
            <div className="flex items-start gap-2 mb-4 p-3 bg-amber-50/50 rounded-lg">
              <Lightbulb className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{insightCards[1].description}</p>
            </div>

            {/* Builders List */}
            <div className="space-y-2 mb-5">
              {insightCards[1].builders?.map((builder, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-amber-100 text-amber-700 text-[10px] md:text-xs font-medium flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-xs md:text-sm font-medium text-gray-900">{builder.name}</span>
                  </div>
                  <span className="text-[10px] md:text-xs text-gray-500">{builder.projects} projects</span>
                </div>
              ))}
            </div>

            <button className="w-full py-2.5 md:py-3 text-sm md:text-base font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors flex items-center justify-center gap-2">
              {insightCards[1].cta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Price Trends */}
          <div className="flex-shrink-0 w-[85vw] md:w-auto snap-start bg-white border border-gray-200 rounded-2xl p-5 md:p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900">{insightCards[2].title}</h3>
                <p className="text-xs md:text-sm text-gray-500">{insightCards[2].subtitle}</p>
              </div>
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${insightCards[2].iconBg} flex items-center justify-center`}>
                <MapPin className={`w-5 h-5 md:w-6 md:h-6 ${insightCards[2].iconColor}`} />
              </div>
            </div>
            
            <div className="flex items-start gap-2 mb-4 p-3 bg-blue-50/50 rounded-lg">
              <Lightbulb className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{insightCards[2].description}</p>
            </div>

            {/* Localities List */}
            <div className="space-y-2 mb-5">
              {insightCards[2].localities?.map((locality, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                  <span className="text-xs md:text-sm font-medium text-gray-900">{locality.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] md:text-xs text-gray-600">{locality.price}</span>
                    <span className="text-[10px] md:text-xs font-medium text-green-600">{locality.change}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-2.5 md:py-3 text-sm md:text-base font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors flex items-center justify-center gap-2">
              {insightCards[2].cta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Source */}
        <p className="text-center text-[10px] md:text-xs text-gray-400 mt-6 md:mt-8">
          Data from Karnataka IGR, Kaveri 2.0 & RERA Karnataka · Updated Q1 2025
        </p>
      </div>
    </section>
  );
};

export default MarketInsightsSection;
