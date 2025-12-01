import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText } from "lucide-react";

const RegistrationFeeCalculator = () => {
  const [propertyValue, setPropertyValue] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [result, setResult] = useState<{
    registrationFee: number;
    processingFee: number;
    total: number;
  } | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [inputError, setInputError] = useState("");

  const calculateRegistrationFee = () => {
    const cleanValue = propertyValue.replace(/,/g, '');
    const value = parseFloat(cleanValue);
    if (!value || !propertyType || !documentType) return;

    if (value < 5000) {
      setResult({ registrationFee: 0, processingFee: 0, total: 0 });
      setShowResult(true);
      return;
    }

    let registrationRate = 0;
    let processingFee = 0;

    if (documentType === "sale_deed") {
      registrationRate = 0.01;
      processingFee = 100;
    } else if (documentType === "lease_deed") {
      registrationRate = propertyType === "residential" ? 0.005 : 0.01;
      processingFee = 50;
    } else if (documentType === "gift_deed") {
      registrationRate = 0.005;
      processingFee = 100;
    } else if (documentType === "mortgage_deed") {
      registrationRate = 0.005;
      processingFee = 100;
    }

    const registrationFee = Math.max(value * registrationRate, 100);
    const maxFee = propertyType === "residential" ? 25000 : 50000;
    
    const finalRegistrationFee = Math.min(registrationFee, maxFee);
    const total = finalRegistrationFee + processingFee;

    setResult({
      registrationFee: finalRegistrationFee,
      processingFee,
      total
    });
    setShowResult(true);
  };

  const handlePropertyValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const validPattern = /^[0-9,]*$/;
    
    if (validPattern.test(value) || value === "") {
      setPropertyValue(value);
      setInputError("");
    } else {
      setInputError("Numbers only");
    }
  };

  const reset = () => {
    setPropertyValue("");
    setPropertyType("");
    setDocumentType("");
    setResult(null);
    setShowResult(false);
    setInputError("");
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="relative group">
        {/* Elegant outer glow */}
        <div className="absolute -inset-1 bg-gradient-to-br from-emerald-200/40 via-emerald-100/20 to-teal-200/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Main card */}
        <div className="relative bg-gradient-to-br from-stone-50 via-white to-emerald-50/20 rounded-2xl border border-stone-200/80 p-5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm">
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-5 pb-4 border-b border-stone-200/60">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/80 border border-emerald-200/50 shadow-sm">
              <FileText className="w-4 h-4 text-emerald-700" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-stone-800 tracking-tight">Registration Fee Calculator</h3>
              <p className="text-[10px] text-stone-500 mt-0.5">Karnataka Government Rates</p>
            </div>
          </div>
          
          {/* Form fields */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="reg-property-value" className="text-[11px] text-stone-600 font-medium uppercase tracking-wider">Property Value</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 font-medium">₹</span>
                  <Input
                    id="reg-property-value"
                    type="text"
                    placeholder="50,00,000"
                    value={propertyValue}
                    onChange={handlePropertyValueChange}
                    className={`h-9 pl-7 text-xs bg-white/80 text-stone-800 placeholder:text-stone-300 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-emerald-200/50 ${
                      inputError 
                        ? "border-red-300 focus:border-red-400" 
                        : "border-stone-200 focus:border-emerald-300 hover:border-stone-300"
                    }`}
                  />
                </div>
                {inputError && (
                  <p className="text-red-400 text-[10px]">{inputError}</p>
                )}
              </div>
              
              <div className="space-y-1.5">
                <Label className="text-[11px] text-stone-600 font-medium uppercase tracking-wider">Property Type</Label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="h-9 text-xs bg-white/80 border-stone-200 text-stone-800 hover:border-stone-300 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-emerald-200/50">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-sm border-stone-200 rounded-lg shadow-xl">
                    <SelectItem value="residential" className="text-stone-700 hover:bg-emerald-50 focus:bg-emerald-50 rounded">Residential</SelectItem>
                    <SelectItem value="commercial" className="text-stone-700 hover:bg-emerald-50 focus:bg-emerald-50 rounded">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-[11px] text-stone-600 font-medium uppercase tracking-wider">Document Type</Label>
              <Select value={documentType} onValueChange={setDocumentType}>
                <SelectTrigger className="h-9 text-xs bg-white/80 border-stone-200 text-stone-800 hover:border-stone-300 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-emerald-200/50">
                  <SelectValue placeholder="Select document type" />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-sm border-stone-200 rounded-lg shadow-xl">
                  <SelectItem value="sale_deed" className="text-stone-700 hover:bg-emerald-50 focus:bg-emerald-50 rounded">Sale Deed — 1%</SelectItem>
                  <SelectItem value="lease_deed" className="text-stone-700 hover:bg-emerald-50 focus:bg-emerald-50 rounded">Lease Deed — 0.5-1%</SelectItem>
                  <SelectItem value="gift_deed" className="text-stone-700 hover:bg-emerald-50 focus:bg-emerald-50 rounded">Gift Deed — 0.5%</SelectItem>
                  <SelectItem value="mortgage_deed" className="text-stone-700 hover:bg-emerald-50 focus:bg-emerald-50 rounded">Mortgage — 0.5%</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 pt-2">
              <Button 
                onClick={calculateRegistrationFee} 
                size="sm" 
                className="flex-1 h-9 text-xs font-medium bg-gradient-to-r from-stone-800 to-stone-900 hover:from-stone-700 hover:to-stone-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Calculate
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={reset} 
                className="h-9 px-4 text-xs font-medium border-stone-200 text-stone-600 hover:bg-stone-50 hover:border-stone-300 rounded-lg transition-all duration-300"
              >
                Reset
              </Button>
            </div>
          </div>

          {/* Result */}
          {showResult && result !== null && (
            <div className="mt-5 pt-4 border-t border-stone-200/60 animate-fade-in">
              {result.total === 0 ? (
                <div className="bg-gradient-to-br from-emerald-50/80 via-white to-stone-50 rounded-xl p-4 border border-emerald-200/40 text-center">
                  <span className="text-xs text-emerald-600">
                    No registration fee for properties below ₹5,000
                  </span>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-emerald-50/80 via-white to-stone-50 rounded-xl p-4 border border-emerald-200/40 space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] text-stone-500 uppercase tracking-wider">Registration Fee</span>
                      <span className="text-sm font-medium text-stone-700">₹{result.registrationFee.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] text-stone-500 uppercase tracking-wider">Processing Fee</span>
                      <span className="text-sm font-medium text-stone-700">₹{result.processingFee.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-emerald-200/40 flex justify-between items-center">
                    <span className="text-[11px] text-stone-600 uppercase tracking-wider font-medium">Total Amount</span>
                    <span className="text-2xl font-semibold text-stone-800 tracking-tight">₹{result.total.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Footer notes */}
          <div className="mt-4 pt-3 border-t border-stone-100">
            <div className="flex items-start gap-2 text-[10px] text-stone-400">
              <div className="space-y-0.5">
                <p>Min. property: ₹5,000 · Cap: Residential ₹25K, Commercial ₹50K</p>
                <p className="text-stone-300">Rates are approximate and subject to change</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFeeCalculator;
