import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-lg p-8">
        
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-xl font-normal text-neutral-900 tracking-tight">Registration Fee Calculator</h3>
          <p className="text-sm text-neutral-400 mt-1">Karnataka Government Rates</p>
        </div>
        
        {/* Form fields */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="reg-property-value" className="text-xs text-neutral-500 font-normal">Property Value</Label>
              <div className="relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-sm text-neutral-400">₹</span>
                <Input
                  id="reg-property-value"
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
                <SelectContent className="bg-white border border-neutral-200 rounded-lg shadow-xl z-50">
                  <SelectItem value="residential" className="text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-900">Residential</SelectItem>
                  <SelectItem value="commercial" className="text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-900">Commercial</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs text-neutral-500 font-normal">Document Type</Label>
            <Select value={documentType} onValueChange={setDocumentType}>
              <SelectTrigger className="h-12 text-base bg-transparent border-0 border-b border-neutral-200 text-neutral-900 rounded-none focus:ring-0 focus:border-neutral-900 transition-colors">
                <SelectValue placeholder="Select document type" className="text-neutral-300" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-neutral-200 rounded-lg shadow-xl z-50">
                <SelectItem value="sale_deed" className="text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-900">Sale Deed — 1%</SelectItem>
                <SelectItem value="lease_deed" className="text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-900">Lease Deed — 0.5-1%</SelectItem>
                <SelectItem value="gift_deed" className="text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-900">Gift Deed — 0.5%</SelectItem>
                <SelectItem value="mortgage_deed" className="text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-900">Mortgage — 0.5%</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <Button 
              onClick={calculateRegistrationFee} 
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
            {result.total === 0 ? (
              <p className="text-sm text-neutral-400 text-center">
                No registration fee for properties below ₹5,000
              </p>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-400">Registration Fee</span>
                  <span className="text-lg text-neutral-700">₹{result.registrationFee.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-400">Processing Fee</span>
                  <span className="text-lg text-neutral-700">₹{result.processingFee.toLocaleString('en-IN')}</span>
                </div>
                <div className="pt-4 border-t border-neutral-100 flex justify-between items-end">
                  <span className="text-sm text-neutral-500">Total</span>
                  <span className="text-2xl font-normal text-neutral-900">₹{result.total.toLocaleString('en-IN')}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-neutral-50">
          <p className="text-xs text-neutral-300">
            Cap: Residential ₹25,000 · Commercial ₹50,000 · Rates subject to change
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFeeCalculator;
