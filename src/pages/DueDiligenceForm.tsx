import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowLeft, Send, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const DueDiligenceForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    propertySize: '',
    propertyAddress: '',
    surveyNumber: '',
    district: '',
    pincode: '',
    documentsNeeded: '',
    additionalRequirements: ''
  });

  // Calculate price based on property size
  const calculatedPrice = () => {
    if (!formData.propertySize) return "Starting from ₹15,000";
    
    switch (formData.propertySize) {
      case "30x40":
        return "₹15,000";
      case "40x60":
        return "₹25,000";
      case "up-to-5000":
        return "₹45,000";
      case "more-than-5000":
        return "₹1,20,000";
      default:
        return "Starting from ₹15,000";
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      submitData.append("form-name", "due-diligence-report");
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value);
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(submitData as any).toString(),
      });

      if (response.ok) {
        toast({
          title: "Request Submitted Successfully",
          description: "We'll contact you within 24 hours with your due diligence report quote.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          propertyType: '',
          propertySize: '',
          propertyAddress: '',
          surveyNumber: '',
          district: '',
          pincode: '',
          documentsNeeded: '',
          additionalRequirements: ''
        });
        navigate('/');
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="fixed inset-0 z-[9999] flex items-start sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm overflow-y-auto pt-16">
        <div 
          className="bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl md:backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-6 max-w-sm sm:max-w-md lg:max-w-[448px] w-full my-4 sm:my-0 sm:max-h-[90vh] overflow-y-auto animate-scale-in shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] shadow-primary/10 relative modal-content-smooth gpu-layer"
        >
          {/* Tech background pattern */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-40 h-40 bg-primary/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/30 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 right-4 p-2 hover:bg-slate-800/50 rounded-full transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Header */}
          <div className="text-center mb-6 relative z-10">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-lg font-bold text-white mb-1">
              Due Diligence Report
            </h2>
            <p className="text-xs text-slate-300">
              ₹35,000 - ₹1,68,000
            </p>
          </div>

          {/* Form */}
          <form 
            name="due-diligence-report" 
            method="POST" 
            data-netlify="true" 
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-4 relative z-10"
          >
            <input type="hidden" name="form-name" value="due-diligence-report" />
            <input type="hidden" name="bot-field" />

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-medium pl-1">
                Full Name *
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required 
                placeholder="Enter your full name"
                className="w-full h-9 bg-slate-800/50 border border-slate-600/50 text-white text-xs rounded-lg px-3 focus:border-primary/60 focus:bg-slate-800/70 focus:outline-none transition-all placeholder:text-slate-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-medium pl-1">
                Email Address *
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required 
                placeholder="your.email@example.com"
                className="w-full h-9 bg-slate-800/50 border border-slate-600/50 text-white text-xs rounded-lg px-3 focus:border-primary/60 focus:bg-slate-800/70 focus:outline-none transition-all placeholder:text-slate-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-medium pl-1">
                Phone Number *
              </label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required 
                placeholder="+91 98765 43210"
                className="w-full h-9 bg-slate-800/50 border border-slate-600/50 text-white text-xs rounded-lg px-3 focus:border-primary/60 focus:bg-slate-800/70 focus:outline-none transition-all placeholder:text-slate-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-medium pl-1">
                Property Size *
              </label>
              <select
                name="propertySize"
                value={formData.propertySize}
                onChange={(e) => handleInputChange('propertySize', e.target.value)}
                required
                className="w-full h-10 bg-slate-800/50 border border-slate-600/50 text-white text-xs rounded-lg px-3 focus:border-primary/60 focus:bg-slate-800/70 focus:outline-none transition-all appearance-none cursor-pointer"
                style={{
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.75rem center',
                  backgroundSize: '12px',
                  paddingRight: '2.5rem'
                }}
              >
                <option value="">Select property size</option>
                <option value="30x40">30x40 sqft</option>
                <option value="40x60">40x60 sqft</option>
                <option value="up-to-5000">Up to 5000 sqft</option>
                <option value="more-than-5000">More than 5000 sqft</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-medium pl-1">
                Property Type *
              </label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={(e) => handleInputChange('propertyType', e.target.value)}
                required
                className="w-full h-10 bg-slate-800/50 border border-slate-600/50 text-white text-xs rounded-lg px-3 focus:border-primary/60 focus:bg-slate-800/70 focus:outline-none transition-all tap-friendly"
              >
                <option value="" className="bg-slate-800">Select property type</option>
                <option value="residential" className="bg-slate-800">Residential</option>
                <option value="commercial" className="bg-slate-800">Commercial</option>
                <option value="agricultural" className="bg-slate-800">Agricultural</option>
                <option value="industrial" className="bg-slate-800">Industrial</option>
                <option value="plot" className="bg-slate-800">Plot/Land</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-medium pl-1">
                Property Address *
              </label>
              <textarea 
                name="propertyAddress"
                value={formData.propertyAddress}
                onChange={(e) => handleInputChange('propertyAddress', e.target.value)}
                required 
                placeholder="Complete property address"
                className="w-full min-h-[60px] bg-slate-800/50 border border-slate-600/50 text-white text-xs rounded-lg px-3 py-2 focus:border-primary/60 focus:bg-slate-800/70 focus:outline-none transition-all placeholder:text-slate-500 resize-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-medium pl-1">
                Survey Number
              </label>
              <input 
                type="text" 
                name="surveyNumber"
                value={formData.surveyNumber}
                onChange={(e) => handleInputChange('surveyNumber', e.target.value)}
                placeholder="e.g., 123/4A"
                className="w-full h-9 bg-slate-800/50 border border-slate-600/50 text-white text-xs rounded-lg px-3 focus:border-primary/60 focus:bg-slate-800/70 focus:outline-none transition-all placeholder:text-slate-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-medium pl-1">
                District *
              </label>
              <select
                name="district"
                value={formData.district}
                onChange={(e) => handleInputChange('district', e.target.value)}
                required
                className="w-full h-10 bg-slate-800/50 border border-slate-600/50 text-white text-xs rounded-lg px-3 focus:border-primary/60 focus:bg-slate-800/70 focus:outline-none transition-all tap-friendly"
              >
                <option value="" className="bg-slate-800">Select district</option>
                <option value="bengaluru-urban" className="bg-slate-800">Bengaluru Urban</option>
                <option value="bengaluru-rural" className="bg-slate-800">Bengaluru Rural</option>
                <option value="mysuru" className="bg-slate-800">Mysuru</option>
                <option value="mangaluru" className="bg-slate-800">Mangaluru</option>
                <option value="hubli-dharwad" className="bg-slate-800">Hubli-Dharwad</option>
                <option value="other" className="bg-slate-800">Other</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-medium pl-1">
                Pincode *
              </label>
              <input 
                type="text" 
                name="pincode"
                value={formData.pincode}
                onChange={(e) => handleInputChange('pincode', e.target.value)}
                required
                placeholder="e.g., 560001"
                maxLength={6}
                pattern="[0-9]{6}"
                className="w-full h-9 bg-slate-800/50 border border-slate-600/50 text-white text-xs rounded-lg px-3 focus:border-primary/60 focus:bg-slate-800/70 focus:outline-none transition-all placeholder:text-slate-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-medium pl-1">
                Documents Required
              </label>
              <textarea 
                name="documentsNeeded"
                value={formData.documentsNeeded}
                onChange={(e) => handleInputChange('documentsNeeded', e.target.value)}
                placeholder="Specify documents or select Complete Package"
                className="w-full min-h-[60px] bg-slate-800/50 border border-slate-600/50 text-white text-xs rounded-lg px-3 py-2 focus:border-primary/60 focus:bg-slate-800/70 focus:outline-none transition-all placeholder:text-slate-500 resize-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-medium pl-1">
                Additional Requirements
              </label>
              <textarea 
                name="additionalRequirements"
                value={formData.additionalRequirements}
                onChange={(e) => handleInputChange('additionalRequirements', e.target.value)}
                placeholder="Any specific requirements..."
                className="w-full min-h-[60px] bg-slate-800/50 border border-slate-600/50 text-white text-xs rounded-lg px-3 py-2 focus:border-primary/60 focus:bg-slate-800/70 focus:outline-none transition-all placeholder:text-slate-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-10 bg-gradient-to-r from-[hsl(220_85%_50%)] to-[hsl(220_85%_45%)] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                'Processing...'
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Request
                </>
              )}
            </button>

            {/* Show pricing after submission */}
            {!isSubmitting && formData.propertySize && (
              <div className="p-3 bg-primary/10 border border-primary/30 rounded-lg animate-fade-in">
                <p className="text-xs text-slate-300 text-center">
                  Estimated Price: <span className="text-white font-bold">{calculatedPrice()}</span>
                </p>
              </div>
            )}

            <p className="text-[10px] text-slate-400 text-center">
              Response within 24 hours • <a href="tel:+919632840858" className="text-primary hover:underline">+91 9632840858</a>
            </p>
          </form>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default DueDiligenceForm;