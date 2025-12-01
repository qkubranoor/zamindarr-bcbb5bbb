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
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-lg p-8">
        
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-xl font-normal text-neutral-900 tracking-tight">Stamp Duty Calculator</h3>
          <p className="text-sm text-neutral-400 mt-1">Karnataka Government Rates</p>
        </div>
        
        {/* Form fields */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="property-value" className="text-xs text-neutral-500 font-normal">Property Value</Label>
              <div className="relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-sm text-neutral-400">₹</span>
                <Input
                  id="property-value"
                  type="text"
                  placeholder="50,00,000"
                  value={propertyValue}
                  onChange={handlePropertyValueChange}
                  className={`h-12 pl-5 text-base bg-transparent text-neutral-900 placeholder:text-neutral-300 rounded-none border-0 border-b transition-colors focus-visible:ring-0 focus-visible:ring-offset-0 ${
                    inputError 
                      ? "border-red-400" 
                      : "border-neutral-200 focus:border-neutral-900"
                  }`}
                />
              </div>
              {inputError && (
                <p className="text-red-400 text-xs">{inputError}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label className="text-xs text-neutral-500 font-normal">Property Type</Label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="h-12 text-base bg-transparent border-0 border-b border-neutral-200 text-neutral-900 rounded-none focus:ring-0 focus:border-neutral-900 transition-colors">
                  <SelectValue placeholder="Select" className="text-neutral-300" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-neutral-100 rounded-lg shadow-lg">
                  <SelectItem value="residential" className="text-neutral-700 focus:bg-neutral-50">Residential</SelectItem>
                  <SelectItem value="commercial" className="text-neutral-700 focus:bg-neutral-50">Commercial</SelectItem>
                  <SelectItem value="agricultural" className="text-neutral-700 focus:bg-neutral-50">Agricultural</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs text-neutral-500 font-normal">Buyer Category</Label>
            <Select value={buyerType} onValueChange={setBuyerType}>
              <SelectTrigger className="h-12 text-base bg-transparent border-0 border-b border-neutral-200 text-neutral-900 rounded-none focus:ring-0 focus:border-neutral-900 transition-colors">
                <SelectValue placeholder="Select buyer category" className="text-neutral-300" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-neutral-100 rounded-lg shadow-lg">
                <SelectItem value="male" className="text-neutral-700 focus:bg-neutral-50">Male — 5%</SelectItem>
                <SelectItem value="female" className="text-neutral-700 focus:bg-neutral-50">Female — 2%</SelectItem>
                <SelectItem value="joint" className="text-neutral-700 focus:bg-neutral-50">Joint — 3%</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <Button 
              onClick={calculateStampDuty} 
              className="flex-1 h-12 text-sm font-normal bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg transition-colors"
            >
              Calculate
            </Button>
            <Button 
              variant="ghost" 
              onClick={reset} 
              className="h-12 px-6 text-sm font-normal text-neutral-500 hover:text-neutral-900 hover:bg-transparent transition-colors"
            >
              Reset
            </Button>
          </div>
        </div>

        {/* Result */}
        {showResult && result !== null && (
          <div className="mt-10 pt-8 border-t border-neutral-100 animate-fade-in">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs text-neutral-400 mb-1">Estimated Stamp Duty</p>
                {result === 0 && (
                  <p className="text-xs text-neutral-400 mt-2">
                    No duty for properties below ₹20,000
                  </p>
                )}
              </div>
              <span className="text-4xl font-light text-neutral-900 tracking-tight">
                ₹{result.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-neutral-50">
          <p className="text-xs text-neutral-300">
            Minimum property value ₹20,000 · Minimum duty ₹100 · Rates subject to change
          </p>
        </div>
      </div>
    </div>
  );
};

export default StampDutyCalculator;
