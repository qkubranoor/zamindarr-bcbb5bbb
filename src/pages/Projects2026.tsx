import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, MapPin, TrendingUp, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Projects2026 = () => {
  const upcomingProjects = [
    {
      corridor: "Sarjapur – Attibele Road",
      developers: ["Prestige", "Sobha", "Brigade"],
      launchWindow: "Q1-Q2 2026",
      priceExpectation: "₹7,500 – ₹11,000/sq.ft",
      description: "Integrated townships along the extended metro corridor with tech park proximity",
      usp: "Metro Extension",
    },
    {
      corridor: "Devanahalli – Airport Road",
      developers: ["Embassy", "Godrej", "Puravankara"],
      launchWindow: "Q2 2026",
      priceExpectation: "₹6,500 – ₹9,500/sq.ft",
      description: "Aerospace SEZ and business park-driven luxury housing projects",
      usp: "BIAL Proximity",
    },
    {
      corridor: "Thanisandra – Yelahanka",
      developers: ["Birla Estates", "Mana Projects", "Assetz"],
      launchWindow: "Q1 2026",
      priceExpectation: "₹8,000 – ₹12,000/sq.ft",
      description: "Premium mid-rise developments catering to north Bangalore's growing IT workforce",
      usp: "ORR North",
    },
    {
      corridor: "Varthur – Gunjur",
      developers: ["Total Environment", "Shriram", "Mantri"],
      launchWindow: "Q3 2026",
      priceExpectation: "₹6,000 – ₹9,000/sq.ft",
      description: "Villa projects and plotted developments in the eastern growth corridor",
      usp: "Villa Communities",
    },
    {
      corridor: "Kanakapura Road",
      developers: ["Prestige", "Salarpuria", "Century"],
      launchWindow: "Q2-Q3 2026",
      priceExpectation: "₹5,500 – ₹8,500/sq.ft",
      description: "Affordable luxury segment targeting young professionals and first-time buyers",
      usp: "Metro Green Line",
    },
    {
      corridor: "Hebbal – Bellary Road",
      developers: ["Brigade", "RMZ", "Phoenix"],
      launchWindow: "Q4 2026",
      priceExpectation: "₹10,000 – ₹15,000/sq.ft",
      description: "Ultra-premium high-rises with lake and golf course views",
      usp: "Lake Views",
    },
  ];

  const marketInsights = [
    { metric: "Expected Launches", value: "120+", subtext: "New Projects" },
    { metric: "Total Supply", value: "45,000+", subtext: "Units" },
    { metric: "Pre-launch Discount", value: "8-15%", subtext: "Below Launch" },
  ];

  const investmentTips = [
    "Pre-launch bookings offer 8-15% discount over launch prices",
    "RERA registration verification is mandatory before booking",
    "Check developer's delivery track record for past 5 projects",
    "Evaluate infrastructure timelines (metro, roads) vs possession",
    "Consider resale liquidity based on location maturity",
    "Review payment plan structure – avoid heavy front-loading",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20 pb-32">
        {/* Hero Section */}
        <section className="px-6 py-10 bg-gradient-to-b from-emerald-50/30 to-white">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 mb-6 text-sm">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-emerald-600" />
              </div>
              <h1 className="text-2xl font-light text-slate-900 tracking-tight">Projects 2026</h1>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
              Early insights into Bangalore's upcoming residential launches. Pre-launch opportunities 
              from established developers across emerging and established micro-markets.
            </p>
          </div>
        </section>

        {/* Market Overview */}
        <section className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 mb-10">
              {marketInsights.map((insight) => (
                <div key={insight.metric} className="text-center p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
                  <p className="text-xl font-light text-slate-900">{insight.value}</p>
                  <p className="text-[11px] text-emerald-700 mt-1">{insight.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Corridors */}
        <section className="px-6 py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-light text-slate-900 mb-6 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-600" />
              Growth Corridors
            </h2>
            
            <div className="space-y-4">
              {upcomingProjects.map((project) => (
                <div 
                  key={project.corridor}
                  className="p-5 rounded-2xl bg-white border border-emerald-100/50 hover:border-emerald-200 hover:shadow-sm transition-all"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-base font-medium text-slate-900">{project.corridor}</h3>
                      <p className="text-emerald-600 text-sm font-light mt-0.5">{project.priceExpectation}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span className="text-[10px] text-slate-500">{project.launchWindow}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.developers.slice(0, 3).map((dev) => (
                        <span key={dev} className="text-[10px] text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full">
                          {dev}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
                      {project.usp}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Tips */}
        <section className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-light text-slate-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              Pre-Launch Investment Guide
            </h2>
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <ul className="space-y-3">
                {investmentTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-medium flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-800 text-center">
              <Sparkles className="w-5 h-5 text-emerald-300 mx-auto mb-3" />
              <h3 className="text-white text-base font-light mb-2">Pre-Launch Advisory</h3>
              <p className="text-emerald-200/70 text-sm mb-4">Get early access and developer verification before booking</p>
              <Link 
                to="/due-diligence-form"
                className="inline-block px-6 py-2.5 bg-white hover:bg-emerald-50 text-emerald-900 text-sm font-medium rounded-xl transition-colors"
              >
                Request Due Diligence
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects2026;
