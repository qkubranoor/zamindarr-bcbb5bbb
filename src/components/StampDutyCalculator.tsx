import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Info } from "lucide-react";

const StampDutyCalculator = () => {
  const [propertyValue, setPropertyValue] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [buyerType, setBuyerType] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [inputError, setInputError] = useState("");

  const calculateStampDuty = () => {
    // Remove commas and parse the number
    const cleanValue = propertyValue.replace(/,/g, '');
    const value = parseFloat(cleanValue);
    if (!value || !propertyType || !buyerType) return;

    // Minimum value check for stamp duty
    if (value < 20000) {
      setResult(0);
      setShowResult(true);
      return;
    }

    let stampDutyRate = 0;

    // Karnataka Government Stamp Duty Rates (2024)
    if (propertyType === "residential") {
      if (buyerType === "male") {
        stampDutyRate = 0.05; // 5%
      } else if (buyerType === "female") {
        stampDutyRate = 0.02; // 2%
      } else if (buyerType === "joint") {
        stampDutyRate = 0.03; // 3%
      }
    } else if (propertyType === "commercial") {
      stampDutyRate = 0.05; // 5%
    } else if (propertyType === "agricultural") {
      stampDutyRate = 0.03; // 3%
    }

    const stampDuty = Math.max(value * stampDutyRate, 100); // Minimum ₹100
    setResult(stampDuty);
    setShowResult(true);
  };

  const handlePropertyValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and commas
    const validPattern = /^[0-9,]*$/;
    
    if (validPattern.test(value) || value === "") {
      setPropertyValue(value);
      setInputError("");
    } else {
      setInputError("Please enter only numbers and commas");
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
      <div className="relative animate-fade-in">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 rounded-xl blur-sm opacity-40 animate-pulse"></div>
        <div className="relative bg-white rounded-xl border border-gray-200 p-4 space-y-3 shadow-2xl shadow-blue-200/30 hover:shadow-blue-300/40 hover:border-blue-200 transition-all duration-300">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1 rounded-lg bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-colors duration-200">
            <Calculator className="w-4 h-4 text-blue-600" />
          </div>
          <h3 className="font-semibold text-sm text-gray-900">Stamp Duty Calculator</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <Label htmlFor="property-value" className="text-xs text-gray-900 font-medium">Property Value (₹)</Label>
            <Input
              id="property-value"
              type="text"
              placeholder="50,00,000"
              value={propertyValue}
              onChange={handlePropertyValueChange}
              className={`h-8 text-xs bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:ring-gray-300 transition-all duration-200 ${
                inputError 
                  ? "border-red-500 focus:border-red-500" 
                  : "border-gray-300 focus:border-gray-400 hover:border-gray-400"
              }`}
            />
            {inputError && (
              <p className="text-red-500 text-xs mt-1 animate-pulse">{inputError}</p>
            )}
          </div>
          
          <div className="space-y-1">
            <Label className="text-xs text-gray-900 font-medium">Property Type</Label>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger className="h-8 text-xs bg-gray-50 border-gray-300 text-gray-900 hover:border-gray-400 transition-colors">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200">
                <SelectItem value="residential" className="text-gray-900 hover:bg-gray-100">Residential</SelectItem>
                <SelectItem value="commercial" className="text-gray-900 hover:bg-gray-100">Commercial</SelectItem>
                <SelectItem value="agricultural" className="text-gray-900 hover:bg-gray-100">Agricultural</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-xs text-gray-900 font-medium">Buyer Type</Label>
          <Select value={buyerType} onValueChange={setBuyerType}>
            <SelectTrigger className="h-8 text-xs bg-gray-50 border-gray-300 text-gray-900 hover:border-gray-400 transition-colors">
              <SelectValue placeholder="Select buyer type" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-200">
              <SelectItem value="male" className="text-gray-900 hover:bg-gray-100">Male (5%)</SelectItem>
              <SelectItem value="female" className="text-gray-900 hover:bg-gray-100">Female (2%)</SelectItem>
              <SelectItem value="joint" className="text-gray-900 hover:bg-gray-100">Joint (3%)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2">
          <Button onClick={calculateStampDuty} size="sm" className="flex-1 h-8 text-xs bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 hover:shadow-blue-600/30">
            Calculate
          </Button>
          <Button variant="outline" size="sm" onClick={reset} className="h-8 text-xs border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200">
            Reset
          </Button>
        </div>

        {showResult && result !== null && (
          <div className="relative animate-fade-in">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 rounded-lg blur-sm opacity-40 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-lg p-3 border border-blue-200 shadow-lg animate-scale-in">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-blue-900">Stamp Duty</span>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent animate-fade-in">
                  ₹{result.toLocaleString('en-IN')}
                </span>
              </div>
              {result === 0 && (
                <p className="text-xs text-blue-600 mt-1 animate-fade-in">
                  No stamp duty for properties below ₹20,000
                </p>
              )}
            </div>
          </div>
        )}

        <div className="text-xs text-gray-600">
          <div className="mb-1"><strong className="text-gray-900">Minimums:</strong> Property value ≥₹20,000, duty ≥₹100</div>
          <div><strong className="text-gray-900">Note:</strong> Approximate calculation based on Karnataka rates</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default StampDutyCalculator;