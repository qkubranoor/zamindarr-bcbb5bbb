import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, MapPin, Building, Users, Wifi, Sparkles, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const WorkingSpace = () => {
  const coworkingHubs = [
    {
      zone: "Outer Ring Road (ORR)",
      locations: ["Marathahalli", "Bellandur", "Sarjapur Junction"],
      priceRange: "₹8,000 – ₹25,000/seat",
      description: "Premium Grade A spaces catering to tech giants and funded startups",
      occupancy: "92%",
    },
    {
      zone: "CBD – MG Road & Residency Road",
      locations: ["UB City", "Prestige Falcon", "Embassy Golf Links"],
      priceRange: "₹15,000 – ₹45,000/seat",
      description: "Ultra-premium addresses for corporate headquarters and consulting firms",
      occupancy: "88%",
    },
    {
      zone: "Whitefield",
      locations: ["ITPL", "Brookefield", "Hoodi"],
      priceRange: "₹7,000 – ₹20,000/seat",
      description: "Tech park ecosystem with large floor plates for scaling teams",
      occupancy: "94%",
    },
    {
      zone: "Electronic City",
      locations: ["Phase 1", "Phase 2", "Hosur Road"],
      priceRange: "₹5,500 – ₹15,000/seat",
      description: "Value-driven IT corridor with established infrastructure",
      occupancy: "89%",
    },
    {
      zone: "Koramangala – HSR Layout",
      locations: ["5th Block", "Sector 1-6", "27th Main"],
      priceRange: "₹10,000 – ₹28,000/seat",
      description: "Startup and VC ecosystem with vibrant community spaces",
      occupancy: "96%",
    },
  ];

  const spaceTypes = [
    { type: "Hot Desk", ideal: "Freelancers, Remote Workers", avgPrice: "₹6,000 – ₹12,000/mo" },
    { type: "Dedicated Desk", ideal: "Small Teams, Consultants", avgPrice: "₹10,000 – ₹18,000/mo" },
    { type: "Private Cabin", ideal: "Startups, SMEs", avgPrice: "₹35,000 – ₹75,000/mo" },
    { type: "Managed Office", ideal: "Mid-size Companies", avgPrice: "₹800 – ₹1,500/sq.ft" },
    { type: "Built-to-Suit", ideal: "Enterprises", avgPrice: "₹65 – ₹120/sq.ft (lease)" },
  ];

  const amenities = [
    "High-speed Fiber Internet",
    "24/7 Access & Security",
    "Meeting Rooms",
    "Cafeteria & Pantry",
    "Parking",
    "Power Backup",
    "Reception Services",
    "Event Spaces",
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
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center">
                <Building className="w-4 h-4 text-sky-600" />
              </div>
              <h1 className="text-xl font-light text-slate-900 tracking-tight">Working Spaces</h1>
            </div>
            
            <p className="text-slate-600 text-[13px] leading-relaxed">
              Bangalore leads India's flexible workspace revolution with over 15 million sq.ft of co-working inventory. 
              From hot desks to enterprise campuses, find the perfect space for your business.
            </p>
          </div>
        </section>

        {/* Market Stats */}
        <section className="px-5 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center p-3 rounded-xl bg-slate-50">
                <p className="text-lg font-light text-slate-900">15M+</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Sq.ft Flex Space</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-slate-50">
                <p className="text-lg font-light text-slate-900">18%</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Annual Growth</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-slate-50">
                <p className="text-lg font-light text-slate-900">91%</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Avg. Occupancy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coworking Hubs */}
        <section className="px-5 py-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-base font-light text-slate-900 mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-500" />
              Commercial Corridors
            </h2>
            
            <div className="space-y-3">
              {coworkingHubs.map((hub) => (
                <div 
                  key={hub.zone}
                  className="p-4 rounded-xl bg-white border border-slate-100 hover:border-slate-200 transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-sm font-medium text-slate-900">{hub.zone}</h3>
                      <p className="text-sky-600 text-[13px] font-light">{hub.priceRange}</p>
                    </div>
                    <span className="text-[9px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {hub.occupancy} Occupied
                    </span>
                  </div>
                  <p className="text-slate-600 text-[12px] leading-relaxed mb-2">{hub.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {hub.locations.map((loc) => (
                        <span key={loc} className="text-[9px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full">
                          {loc}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={`https://wa.me/919632840858?text=Hi, I'm interested in working space at ${encodeURIComponent(hub.zone)} (${encodeURIComponent(hub.priceRange)}). Please share more details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1 bg-sky-50 hover:bg-sky-100 text-sky-700 text-[10px] font-medium rounded-full transition-colors border border-sky-200/50"
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

        {/* Space Types */}
        <section className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-light text-slate-900 mb-6 flex items-center gap-2">
              <Users className="w-4 h-4 text-sky-500" />
              Space Configurations
            </h2>
            
            <div className="overflow-hidden rounded-2xl border border-slate-100">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left text-xs font-medium text-slate-500 px-4 py-3">Type</th>
                    <th className="text-left text-xs font-medium text-slate-500 px-4 py-3">Ideal For</th>
                    <th className="text-left text-xs font-medium text-slate-500 px-4 py-3">Avg. Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {spaceTypes.map((space) => (
                    <tr key={space.type} className="hover:bg-slate-50/50">
                      <td className="text-sm text-slate-900 px-4 py-3.5">{space.type}</td>
                      <td className="text-sm text-slate-600 px-4 py-3.5">{space.ideal}</td>
                      <td className="text-sm text-sky-600 px-4 py-3.5">{space.avgPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="px-6 py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-light text-slate-900 mb-6 flex items-center gap-2">
              <Wifi className="w-4 h-4 text-sky-500" />
              Standard Amenities
            </h2>
            
            <div className="grid grid-cols-2 gap-3">
              {amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-center">
              <Sparkles className="w-5 h-5 text-sky-400 mx-auto mb-3" />
              <h3 className="text-white text-base font-light mb-2">Commercial Space Verification</h3>
              <p className="text-slate-400 text-sm mb-4">Ensure compliance and clear titles before signing your lease</p>
              <Link 
                to="/due-diligence-form"
                className="inline-block px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium rounded-xl transition-colors"
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

export default WorkingSpace;
