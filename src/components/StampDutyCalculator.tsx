import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Stamp } from "lucide-react";

const StampDutyCalculator = () => {
  const [propertyValue, setPropertyValue] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [buyerType, setBuyerType] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [inputError, setInputError] = useState("");

  const calculateStampDuty = () => {
    const cleanValue = propertyValue.replace(/,/g, '');
    const value = parseFloat(cleanValue);
    if (!value || !propertyType || !buyerType) return;

    if (value < 20000) {
      setResult(0);
      setShowResult(true);
      return;
    }

    let stampDutyRate = 0;

    if (propertyType === "residential") {
      if (buyerType === "male") {
        stampDutyRate = 0.05;
      } else if (buyerType === "female") {
        stampDutyRate = 0.02;
      } else if (buyerType === "joint") {
        stampDutyRate = 0.03;
      }
    } else if (propertyType === "commercial") {
      stampDutyRate = 0.05;
    } else if (propertyType === "agricultural") {
      stampDutyRate = 0.03;
    }

    const stampDuty = Math.max(value * stampDutyRate, 100);
    setResult(stampDuty);
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
    setBuyerType("");
    setResult(null);
    setShowResult(false);
    setInputError("");
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Main card - Ultra premium dark theme */}
      <div className="relative bg-gradient-to-b from-[#1a1a1f] via-[#141417] to-[#0d0d0f] rounded-2xl border border-[#2a2a30] p-6 shadow-2xl">
        
        {/* Subtle gold accent line at top */}
        <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#c9a962] to-transparent"></div>
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 pb-5 border-b border-[#2a2a30]">
          <div className="p-3 rounded-xl bg-gradient-to-br from-[#c9a962]/20 to-[#8b7355]/10 border border-[#c9a962]/30">
            <Stamp className="w-5 h-5 text-[#c9a962]" />
          </div>
          <div>
            <h3 className="font-medium text-[15px] text-white tracking-wide">Stamp Duty Calculator</h3>
            <p className="text-[11px] text-[#6b6b75] mt-1 tracking-wide">Karnataka Government Rates</p>
          </div>
        </div>
        
        {/* Form fields */}
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="property-value" className="text-[10px] text-[#8b8b95] font-medium uppercase tracking-[0.15em]">Property Value</Label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-[#6b6b75] font-light">₹</span>
                <Input
                  id="property-value"
                  type="text"
                  placeholder="50,00,000"
                  value={propertyValue}
                  onChange={handlePropertyValueChange}
                  className={`h-11 pl-8 text-sm bg-[#0d0d0f] text-white placeholder:text-[#4a4a55] rounded-xl border transition-all duration-300 focus:ring-1 focus:ring-[#c9a962]/30 ${
                    inputError 
                      ? "border-red-500/50 focus:border-red-500/50" 
                      : "border-[#2a2a30] focus:border-[#c9a962]/50 hover:border-[#3a3a40]"
                  }`}
                />
              </div>
              {inputError && (
                <p className="text-red-400/80 text-[10px]">{inputError}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label className="text-[10px] text-[#8b8b95] font-medium uppercase tracking-[0.15em]">Property Type</Label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="h-11 text-sm bg-[#0d0d0f] border-[#2a2a30] text-white hover:border-[#3a3a40] rounded-xl transition-all duration-300 focus:ring-1 focus:ring-[#c9a962]/30 focus:border-[#c9a962]/50">
                  <SelectValue placeholder="Select" className="text-[#4a4a55]" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1f] border-[#2a2a30] rounded-xl shadow-2xl">
                  <SelectItem value="residential" className="text-[#e0e0e5] hover:bg-[#2a2a30] focus:bg-[#2a2a30] rounded-lg">Residential</SelectItem>
                  <SelectItem value="commercial" className="text-[#e0e0e5] hover:bg-[#2a2a30] focus:bg-[#2a2a30] rounded-lg">Commercial</SelectItem>
                  <SelectItem value="agricultural" className="text-[#e0e0e5] hover:bg-[#2a2a30] focus:bg-[#2a2a30] rounded-lg">Agricultural</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-[10px] text-[#8b8b95] font-medium uppercase tracking-[0.15em]">Buyer Category</Label>
            <Select value={buyerType} onValueChange={setBuyerType}>
              <SelectTrigger className="h-11 text-sm bg-[#0d0d0f] border-[#2a2a30] text-white hover:border-[#3a3a40] rounded-xl transition-all duration-300 focus:ring-1 focus:ring-[#c9a962]/30 focus:border-[#c9a962]/50">
                <SelectValue placeholder="Select buyer category" className="text-[#4a4a55]" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1f] border-[#2a2a30] rounded-xl shadow-2xl">
                <SelectItem value="male" className="text-[#e0e0e5] hover:bg-[#2a2a30] focus:bg-[#2a2a30] rounded-lg">Male — 5%</SelectItem>
                <SelectItem value="female" className="text-[#e0e0e5] hover:bg-[#2a2a30] focus:bg-[#2a2a30] rounded-lg">Female — 2%</SelectItem>
                <SelectItem value="joint" className="text-[#e0e0e5] hover:bg-[#2a2a30] focus:bg-[#2a2a30] rounded-lg">Joint — 3%</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-3">
            <Button 
              onClick={calculateStampDuty} 
              size="sm" 
              className="flex-1 h-11 text-sm font-medium bg-gradient-to-r from-[#c9a962] to-[#a8884d] hover:from-[#d4b46d] hover:to-[#b39458] text-[#0d0d0f] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Calculate
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={reset} 
              className="h-11 px-5 text-sm font-medium border-[#2a2a30] bg-transparent text-[#8b8b95] hover:bg-[#1a1a1f] hover:text-white hover:border-[#3a3a40] rounded-xl transition-all duration-300"
            >
              Reset
            </Button>
          </div>
        </div>

        {/* Result */}
        {showResult && result !== null && (
          <div className="mt-6 pt-5 border-t border-[#2a2a30] animate-fade-in">
            <div className="bg-gradient-to-br from-[#1a1a1f] to-[#0d0d0f] rounded-xl p-5 border border-[#c9a962]/20">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#6b6b75] uppercase tracking-[0.15em] font-medium">Estimated Stamp Duty</span>
                  {result === 0 && (
                    <p className="text-[11px] text-[#c9a962]/80 mt-2">
                      No duty applicable for properties below ₹20,000
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-3xl font-light text-white tracking-tight">
                    ₹{result.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer notes */}
        <div className="mt-5 pt-4 border-t border-[#1a1a1f]">
          <p className="text-[10px] text-[#4a4a55] tracking-wide">
            Minimum property value: ₹20,000 · Minimum duty: ₹100
          </p>
          <p className="text-[9px] text-[#3a3a40] mt-1 tracking-wide">
            Rates are approximate and subject to government revision
          </p>
        </div>
      </div>
    </div>
  );
};

export default StampDutyCalculator;
