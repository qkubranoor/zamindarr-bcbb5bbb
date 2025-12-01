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
      <div className="relative group">
        {/* Elegant outer glow */}
        <div className="absolute -inset-1 bg-gradient-to-br from-amber-200/40 via-amber-100/20 to-amber-300/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Main card */}
        <div className="relative bg-gradient-to-br from-stone-50 via-white to-amber-50/30 rounded-2xl border border-stone-200/80 p-5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm">
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-5 pb-4 border-b border-stone-200/60">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/80 border border-amber-200/50 shadow-sm">
              <Stamp className="w-4 h-4 text-amber-700" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-stone-800 tracking-tight">Stamp Duty Calculator</h3>
              <p className="text-[10px] text-stone-500 mt-0.5">Karnataka Government Rates</p>
            </div>
          </div>
          
          {/* Form fields */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="property-value" className="text-[11px] text-stone-600 font-medium uppercase tracking-wider">Property Value</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 font-medium">₹</span>
                  <Input
                    id="property-value"
                    type="text"
                    placeholder="50,00,000"
                    value={propertyValue}
                    onChange={handlePropertyValueChange}
                    className={`h-9 pl-7 text-xs bg-white/80 text-stone-800 placeholder:text-stone-300 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-amber-200/50 ${
                      inputError 
                        ? "border-red-300 focus:border-red-400" 
                        : "border-stone-200 focus:border-amber-300 hover:border-stone-300"
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
                  <SelectTrigger className="h-9 text-xs bg-white/80 border-stone-200 text-stone-800 hover:border-stone-300 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-amber-200/50">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-sm border-stone-200 rounded-lg shadow-xl">
                    <SelectItem value="residential" className="text-stone-700 hover:bg-amber-50 focus:bg-amber-50 rounded">Residential</SelectItem>
                    <SelectItem value="commercial" className="text-stone-700 hover:bg-amber-50 focus:bg-amber-50 rounded">Commercial</SelectItem>
                    <SelectItem value="agricultural" className="text-stone-700 hover:bg-amber-50 focus:bg-amber-50 rounded">Agricultural</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-[11px] text-stone-600 font-medium uppercase tracking-wider">Buyer Category</Label>
              <Select value={buyerType} onValueChange={setBuyerType}>
                <SelectTrigger className="h-9 text-xs bg-white/80 border-stone-200 text-stone-800 hover:border-stone-300 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-amber-200/50">
                  <SelectValue placeholder="Select buyer type" />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-sm border-stone-200 rounded-lg shadow-xl">
                  <SelectItem value="male" className="text-stone-700 hover:bg-amber-50 focus:bg-amber-50 rounded">Male — 5%</SelectItem>
                  <SelectItem value="female" className="text-stone-700 hover:bg-amber-50 focus:bg-amber-50 rounded">Female — 2%</SelectItem>
                  <SelectItem value="joint" className="text-stone-700 hover:bg-amber-50 focus:bg-amber-50 rounded">Joint — 3%</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 pt-2">
              <Button 
                onClick={calculateStampDuty} 
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
              <div className="bg-gradient-to-br from-amber-50/80 via-white to-stone-50 rounded-xl p-4 border border-amber-200/40">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider font-medium">Estimated Stamp Duty</span>
                    {result === 0 && (
                      <p className="text-[10px] text-amber-600 mt-1">
                        No duty for properties below ₹20,000
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-semibold text-stone-800 tracking-tight">
                      ₹{result.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer notes */}
          <div className="mt-4 pt-3 border-t border-stone-100">
            <div className="flex items-start gap-2 text-[10px] text-stone-400">
              <div className="space-y-0.5">
                <p>Min. property: ₹20,000 · Min. duty: ₹100</p>
                <p className="text-stone-300">Rates are approximate and subject to change</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StampDutyCalculator;
