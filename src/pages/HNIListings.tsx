import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Crown, MapPin, Diamond, Shield, Sparkles, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const HNIListings = () => {
  const luxuryEnclaves = [
    {
      name: "Sadashivanagar",
      segment: "Ultra Luxury",
      priceRange: "₹15 Cr – ₹80 Cr",
      description: "Old-money enclave with palatial bungalows, tree-lined avenues, and diplomatic quarter proximity",
      highlights: ["Heritage Properties", "Large Plots", "Exclusive Address"],
    },
    {
      name: "Koramangala – 1st Block",
      segment: "Premium",
      priceRange: "₹8 Cr – ₹25 Cr",
      description: "Independent villas in the heart of the city's most sought-after startup neighborhood",
      highlights: ["Central Location", "Investment Grade", "High Liquidity"],
    },
    {
      name: "Whitefield – Prestige Lakeside",
      segment: "Luxury Villas",
      priceRange: "₹6 Cr – ₹18 Cr",
      description: "Lake-facing luxury villas with world-class amenities and gated security",
      highlights: ["Lake Views", "Golf Course", "Gated Community"],
    },
    {
      name: "Dollars Colony",
      segment: "Ultra Premium",
      priceRange: "₹12 Cr – ₹45 Cr",
      description: "Exclusive NRI-preferred locality with contemporary mansions and premium infrastructure",
      highlights: ["NRI Favorite", "Modern Villas", "Premium Schools"],
    },
    {
      name: "RMV Extension",
      segment: "Heritage Luxury",
      priceRange: "₹10 Cr – ₹35 Cr",
      description: "Prestigious address with vintage charm, mature gardens, and aristocratic residences",
      highlights: ["Sankey Tank", "Green Cover", "Established Area"],
    },
    {
      name: "Ulsoor – Richmond Town",
      segment: "CBD Luxury",
      priceRange: "₹8 Cr – ₹30 Cr",
      description: "Prime CBD location with heritage bungalows and ultra-modern penthouses",
      highlights: ["Ulsoor Lake", "MG Road", "Premium Offices"],
    },
  ];

  const propertyCategories = [
    { type: "Independent Villa", sizeRange: "4,000 – 12,000 sq.ft", priceStart: "₹6 Cr onwards" },
    { type: "Heritage Bungalow", sizeRange: "8,000 – 25,000 sq.ft", priceStart: "₹15 Cr onwards" },
    { type: "Sky Villa / Penthouse", sizeRange: "5,000 – 15,000 sq.ft", priceStart: "₹8 Cr onwards" },
    { type: "Farm House", sizeRange: "1 – 5 Acres", priceStart: "₹4 Cr onwards" },
    { type: "Land Parcels", sizeRange: "5,000 sq.ft – 2 Acres", priceStart: "₹3 Cr onwards" },
  ];

  const exclusiveServices = [
    "Confidential Off-market Listings",
    "Dedicated Relationship Manager",
    "Legal & Title Verification",
    "Architectural Assessment",
    "Vastu Consultation",
    "Estate Planning Advisory",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20 pb-32">
        {/* Hero Section */}
        <section className="px-6 py-10 bg-gradient-to-b from-amber-50/30 to-white">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 mb-6 text-sm">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center">
                <Crown className="w-5 h-5 text-amber-700" />
              </div>
              <h1 className="text-2xl font-light text-slate-900 tracking-tight">HNI Listings</h1>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
              Curated portfolio of Bangalore's most exclusive addresses. Ultra-luxury villas, heritage estates, 
              and trophy properties available through our private network for discerning investors.
            </p>
          </div>
        </section>

        {/* Investment Metrics */}
        <section className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100">
                <p className="text-xl font-light text-slate-900">₹25 Cr+</p>
                <p className="text-[11px] text-amber-700 mt-1">Avg. Transaction</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100">
                <p className="text-xl font-light text-slate-900">12%</p>
                <p className="text-[11px] text-amber-700 mt-1">Capital Growth</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100">
                <p className="text-xl font-light text-slate-900">45+</p>
                <p className="text-[11px] text-amber-700 mt-1">Active Listings</p>
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Enclaves */}
        <section className="px-6 py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-light text-slate-900 mb-6 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-600" />
              Premier Localities
            </h2>
            
            <div className="space-y-4">
              {luxuryEnclaves.map((enclave) => (
                <div 
                  key={enclave.name}
                  className="p-5 rounded-2xl bg-white border border-amber-100/50 hover:border-amber-200 hover:shadow-sm transition-all"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-base font-medium text-slate-900">{enclave.name}</h3>
                      <p className="text-amber-700 text-sm font-light mt-0.5">{enclave.priceRange}</p>
                    </div>
                    <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-1 rounded-full border border-amber-100">
                      {enclave.segment}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">{enclave.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex flex-wrap gap-2">
                      {enclave.highlights.map((tag) => (
                        <span key={tag} className="text-[10px] text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={`https://wa.me/919845012345?text=Hi, I'm interested in ${encodeURIComponent(enclave.segment)} property in ${encodeURIComponent(enclave.name)} (${encodeURIComponent(enclave.priceRange)}). Please arrange a private consultation.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-700 text-[11px] font-medium rounded-full transition-colors border border-amber-200/50"
                    >
                      <Phone className="w-3 h-3" />
                      Enquire
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Property Categories */}
        <section className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-light text-slate-900 mb-6 flex items-center gap-2">
              <Diamond className="w-4 h-4 text-amber-600" />
              Asset Categories
            </h2>
            
            <div className="overflow-hidden rounded-2xl border border-amber-100">
              <table className="w-full">
                <thead className="bg-amber-50/50">
                  <tr>
                    <th className="text-left text-xs font-medium text-amber-800 px-4 py-3">Category</th>
                    <th className="text-left text-xs font-medium text-amber-800 px-4 py-3">Size Range</th>
                    <th className="text-left text-xs font-medium text-amber-800 px-4 py-3">Starting</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-50">
                  {propertyCategories.map((prop) => (
                    <tr key={prop.type} className="hover:bg-amber-50/30">
                      <td className="text-sm text-slate-900 px-4 py-3.5">{prop.type}</td>
                      <td className="text-sm text-slate-600 px-4 py-3.5">{prop.sizeRange}</td>
                      <td className="text-sm text-amber-700 px-4 py-3.5">{prop.priceStart}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Exclusive Services */}
        <section className="px-6 py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-light text-slate-900 mb-6 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-600" />
              White-Glove Services
            </h2>
            
            <div className="grid grid-cols-2 gap-3">
              {exclusiveServices.map((service) => (
                <div key={service} className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-900 to-amber-800 text-center">
              <Sparkles className="w-5 h-5 text-amber-300 mx-auto mb-3" />
              <h3 className="text-white text-base font-light mb-2">Private Consultation</h3>
              <p className="text-amber-200/70 text-sm mb-4">Discuss your requirements with our HNI advisory team</p>
              <Link 
                to="/due-diligence-form"
                className="inline-block px-6 py-2.5 bg-white hover:bg-amber-50 text-amber-900 text-sm font-medium rounded-xl transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HNIListings;
