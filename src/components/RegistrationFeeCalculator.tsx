import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Info } from "lucide-react";

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
    // Remove commas and parse the number
    const cleanValue = propertyValue.replace(/,/g, '');
    const value = parseFloat(cleanValue);
    if (!value || !propertyType || !documentType) return;

    // Minimum value check
    if (value < 5000) {
      setResult({ registrationFee: 0, processingFee: 0, total: 0 });
      setShowResult(true);
      return;
    }

    let registrationRate = 0;
    let processingFee = 0;

    // Karnataka Government Registration Fee Rates (2024)
    if (documentType === "sale_deed") {
      registrationRate = 0.01; // 1%
      processingFee = 100;
    } else if (documentType === "lease_deed") {
      registrationRate = propertyType === "residential" ? 0.005 : 0.01; // 0.5% or 1%
      processingFee = 50;
    } else if (documentType === "gift_deed") {
      registrationRate = 0.005; // 0.5%
      processingFee = 100;
    } else if (documentType === "mortgage_deed") {
      registrationRate = 0.005; // 0.5%
      processingFee = 100;
    }

    const registrationFee = Math.max(value * registrationRate, 100); // Minimum ₹100
    const maxFee = propertyType === "residential" ? 25000 : 50000; // Maximum cap
    
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
    setDocumentType("");
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
            <FileText className="w-4 h-4 text-blue-600" />
          </div>
          <h3 className="font-semibold text-sm text-gray-900">Registration Fee Calculator</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <Label htmlFor="reg-property-value" className="text-xs text-gray-900 font-medium">Property Value (₹)</Label>
            <Input
              id="reg-property-value"
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
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-xs text-gray-900 font-medium">Document Type</Label>
          <Select value={documentType} onValueChange={setDocumentType}>
            <SelectTrigger className="h-8 text-xs bg-gray-50 border-gray-300 text-gray-900 hover:border-gray-400 transition-colors">
              <SelectValue placeholder="Select document" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-200">
              <SelectItem value="sale_deed" className="text-gray-900 hover:bg-gray-100">Sale Deed (1%)</SelectItem>
              <SelectItem value="lease_deed" className="text-gray-900 hover:bg-gray-100">Lease Deed (0.5-1%)</SelectItem>
              <SelectItem value="gift_deed" className="text-gray-900 hover:bg-gray-100">Gift Deed (0.5%)</SelectItem>
              <SelectItem value="mortgage_deed" className="text-gray-900 hover:bg-gray-100">Mortgage (0.5%)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2">
          <Button onClick={calculateRegistrationFee} size="sm" className="flex-1 h-8 text-xs bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 hover:shadow-blue-600/30">
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
              {result.total === 0 ? (
                <div className="text-center animate-fade-in">
                  <span className="text-xs text-blue-600">
                    No registration fee for properties below ₹5,000
                  </span>
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="flex justify-between text-xs animate-fade-in">
                    <span className="text-blue-900">Registration Fee:</span>
                    <span className="text-blue-900">₹{result.registrationFee.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-xs animate-fade-in" style={{ animationDelay: '50ms' }}>
                    <span className="text-blue-900">Processing Fee:</span>
                    <span className="text-blue-900">₹{result.processingFee.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-blue-200 animate-fade-in" style={{ animationDelay: '100ms' }}>
                    <span className="text-xs font-medium text-blue-900">Total:</span>
                    <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">₹{result.total.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="text-xs text-gray-600">
          <div className="mb-1"><strong className="text-gray-900">Minimums:</strong> Property ≥₹5,000, fee ≥₹100</div>
          <div><strong className="text-gray-900">Caps:</strong> Residential ₹25K, Commercial ₹50K</div>
          <div><strong className="text-gray-900">Note:</strong> Approximate Karnataka rates</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RegistrationFeeCalculator;