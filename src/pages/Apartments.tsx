import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, MapPin, Home, Building2, Sparkles, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Apartments = () => {
  const neighborhoods = [
    {
      name: "Whitefield",
      priceRange: "₹1.2 Cr – ₹4.5 Cr",
      description: "Tech corridor with premium gated communities, excellent connectivity to IT parks",
      highlights: ["ITPL Proximity", "Metro Connected", "International Schools"],
    },
    {
      name: "Koramangala",
      priceRange: "₹1.8 Cr – ₹6 Cr",
      description: "Vibrant urban lifestyle, startup hub with premium high-rises and boutique residences",
      highlights: ["F&B District", "Startup Hub", "Premium Retail"],
    },
    {
      name: "Indiranagar",
      priceRange: "₹2.2 Cr – ₹8 Cr",
      description: "Elite address with tree-lined avenues, heritage charm meets modern luxury",
      highlights: ["100 Feet Road", "Metro Access", "Cultural Hub"],
    },
    {
      name: "Hebbal",
      priceRange: "₹1.5 Cr – ₹5 Cr",
      description: "Lake-facing residences with airport proximity, emerging luxury destination",
      highlights: ["Lake Views", "Airport 20 min", "ORR Access"],
    },
    {
      name: "Sarjapur Road",
      priceRange: "₹90 L – ₹3.5 Cr",
      description: "Rapidly developing corridor with new-age integrated townships",
      highlights: ["Tech Parks", "New Developments", "Value Appreciation"],
    },
    {
      name: "JP Nagar",
      priceRange: "₹1.2 Cr – ₹4 Cr",
      description: "Established residential enclave with excellent social infrastructure",
      highlights: ["Metro Line", "Hospitals", "Educational Institutes"],
    },
  ];

  const propertyTypes = [
    { type: "2 BHK", avgSize: "1,100 – 1,400 sq.ft", avgPrice: "₹80 L – ₹1.8 Cr" },
    { type: "3 BHK", avgSize: "1,600 – 2,200 sq.ft", avgPrice: "₹1.4 Cr – ₹3.5 Cr" },
    { type: "4 BHK", avgSize: "2,400 – 3,500 sq.ft", avgPrice: "₹2.8 Cr – ₹6 Cr" },
    { type: "Penthouse", avgSize: "4,000 – 8,000 sq.ft", avgPrice: "₹5 Cr – ₹15 Cr" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16 pb-24">
        {/* Hero Section */}
        <section className="px-5 py-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 mb-4 text-sm">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-amber-600" />
              </div>
              <h1 className="text-xl font-light text-slate-900 tracking-tight">Premium Apartments</h1>
            </div>
            
            <p className="text-slate-600 text-[13px] leading-relaxed">
              Bangalore's apartment market offers diverse options across established and emerging localities. 
              From tech corridors to heritage neighborhoods, discover residences that match your lifestyle.
            </p>
          </div>
        </section>

        {/* Market Overview */}
        <section className="px-5 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center p-3 rounded-xl bg-slate-50">
                <p className="text-lg font-light text-slate-900">₹6,800</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Avg. Price/sq.ft</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-slate-50">
                <p className="text-lg font-light text-slate-900">8.2%</p>
                <p className="text-[10px] text-slate-500 mt-0.5">YoY Appreciation</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-slate-50">
                <p className="text-lg font-light text-slate-900">2.8%</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Rental Yield</p>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="px-5 py-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-base font-light text-slate-900 mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-500" />
              Prime Localities
            </h2>
            
            <div className="space-y-3">
              {neighborhoods.map((area, index) => (
                <div 
                  key={area.name}
                  className="p-4 rounded-xl bg-white border border-slate-100 hover:border-slate-200 transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-sm font-medium text-slate-900">{area.name}</h3>
                      <p className="text-amber-600 text-[13px] font-light">{area.priceRange}</p>
                    </div>
                    <span className="text-[9px] text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">
                      #{index + 1} Demand
                    </span>
                  </div>
                  <p className="text-slate-600 text-[12px] leading-relaxed mb-2">{area.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {area.highlights.map((tag) => (
                        <span key={tag} className="text-[9px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={`https://wa.me/919632840858?text=Hi, I'm interested in apartments in ${encodeURIComponent(area.name)} (${encodeURIComponent(area.priceRange)}). Please share more details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-700 text-[10px] font-medium rounded-full transition-colors border border-amber-200/50"
                    >
                      <Phone className="w-2.5 h-2.5" />
                      Enquire
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Property Types */}
        <section className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-light text-slate-900 mb-6 flex items-center gap-2">
              <Home className="w-4 h-4 text-amber-500" />
              Configuration Guide
            </h2>
            
            <div className="overflow-hidden rounded-2xl border border-slate-100">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left text-xs font-medium text-slate-500 px-4 py-3">Type</th>
                    <th className="text-left text-xs font-medium text-slate-500 px-4 py-3">Avg. Size</th>
                    <th className="text-left text-xs font-medium text-slate-500 px-4 py-3">Price Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {propertyTypes.map((prop) => (
                    <tr key={prop.type} className="hover:bg-slate-50/50">
                      <td className="text-sm text-slate-900 px-4 py-3.5">{prop.type}</td>
                      <td className="text-sm text-slate-600 px-4 py-3.5">{prop.avgSize}</td>
                      <td className="text-sm text-amber-600 px-4 py-3.5">{prop.avgPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-center">
              <Sparkles className="w-5 h-5 text-amber-400 mx-auto mb-3" />
              <h3 className="text-white text-base font-light mb-2">Need Assistance?</h3>
              <p className="text-slate-400 text-sm mb-4">Get expert guidance on property verification and due diligence</p>
              <Link 
                to="/due-diligence-form"
                className="inline-block px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-medium rounded-xl transition-colors"
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

export default Apartments;
