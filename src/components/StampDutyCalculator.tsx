import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
    <div className="w-full max-w-sm mx-auto px-4 py-3">
      {/* Header */}
      <div className="mb-5">
        <p className="text-xs text-neutral-400">Karnataka Government Rates</p>
      </div>
      
      {/* Form fields */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="property-value" className="text-[11px] text-neutral-500 font-normal">Property Value</Label>
            <div className="relative">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 text-sm text-neutral-400">₹</span>
              <Input
                id="property-value"
                type="text"
                placeholder="50,00,000"
                value={propertyValue}
                onChange={handlePropertyValueChange}
                className={`h-10 pl-5 text-sm bg-transparent text-neutral-900 placeholder:text-neutral-300 rounded-none border-0 border-b transition-colors focus-visible:ring-0 focus-visible:ring-offset-0 ${
                  inputError 
                    ? "border-red-400" 
                    : "border-neutral-200 focus:border-neutral-900"
                }`}
              />
            </div>
            {inputError && (
              <p className="text-red-400 text-[10px]">{inputError}</p>
            )}
          </div>
          
          <div className="space-y-1.5">
            <Label className="text-[11px] text-neutral-500 font-normal">Property Type</Label>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger className="h-10 text-sm bg-transparent border-0 border-b border-neutral-200 text-neutral-900 rounded-none focus:ring-0 focus:border-neutral-900 transition-colors">
                <SelectValue placeholder="Select" className="text-neutral-300" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-neutral-200 rounded-lg shadow-xl z-50">
                <SelectItem value="residential" className="text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-900">Residential</SelectItem>
                <SelectItem value="commercial" className="text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-900">Commercial</SelectItem>
                <SelectItem value="agricultural" className="text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-900">Agricultural</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-1.5">
          <Label className="text-[11px] text-neutral-500 font-normal">Buyer Category</Label>
          <Select value={buyerType} onValueChange={setBuyerType}>
            <SelectTrigger className="h-10 text-sm bg-transparent border-0 border-b border-neutral-200 text-neutral-900 rounded-none focus:ring-0 focus:border-neutral-900 transition-colors">
              <SelectValue placeholder="Select buyer category" className="text-neutral-300" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-neutral-200 rounded-lg shadow-xl z-50">
              <SelectItem value="male" className="text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-900">Male — 5%</SelectItem>
              <SelectItem value="female" className="text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-900">Female — 2%</SelectItem>
              <SelectItem value="joint" className="text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-900">Joint — 3%</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <Button 
            onClick={calculateStampDuty} 
            className="flex-1 h-10 text-sm font-normal bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg transition-colors"
          >
            Calculate
          </Button>
          <Button 
            variant="ghost" 
            onClick={reset} 
            className="h-10 px-4 text-sm font-normal text-neutral-500 hover:text-neutral-900 hover:bg-transparent transition-colors"
          >
            Reset
          </Button>
        </div>
      </div>

      {/* Result */}
      {showResult && result !== null && (
        <div className="mt-5 pt-4 border-t border-neutral-100 animate-fade-in">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] text-neutral-400 mb-0.5">Estimated Stamp Duty</p>
              {result === 0 && (
                <p className="text-[10px] text-neutral-400">
                  No duty for properties below ₹20,000
                </p>
              )}
            </div>
            <span className="text-xl font-medium text-neutral-900">
              ₹{result.toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-neutral-50">
        <p className="text-[10px] text-neutral-300 leading-relaxed">
          Min. property ₹20,000 · Min. duty ₹100 · Rates subject to change
        </p>
      </div>
    </div>
  );
};

export default StampDutyCalculator;
