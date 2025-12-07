import { useState } from "react";
import { X, MapPin, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { PaymentButton } from "@/components/PaymentButton";
import { useAuth } from "@/contexts/AuthContext";

interface PropertyDetailsFormProps {
  onClose: () => void;
  serviceName: string;
  servicePrice: string;
}

const PropertyDetailsForm = ({ onClose, serviceName, servicePrice }: PropertyDetailsFormProps) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    propertyAddress: "",
    propertyType: "",
    propertySize: "",
    surveyNumber: "",
    district: "",
    pincode: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.propertyAddress || !formData.propertyType || !formData.district || !formData.pincode) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    // Form is ready for payment - no need to submit separately
    setIsSubmitting(false);
  };

  const handlePaymentSuccess = (verificationData: any) => {
    toast({
      title: "Payment Successful!",
      description: "Your service request has been confirmed. We'll contact you within 24 hours.",
    });
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const handlePaymentError = (error: string) => {
    toast({
      title: "Payment Failed",
      description: error,
      variant: "destructive"
    });
  };

  // Extract numeric price
  const priceAmount = parseFloat(servicePrice.replace(/[^\d.]/g, '')) || 0;

  return (
    <div className="fixed inset-0 z-[9999] flex items-start sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm overflow-y-auto" onClick={onClose}>
      <div 
        className="bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl md:backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-4 sm:p-6 max-w-sm sm:max-w-md lg:max-w-[448px] w-full mx-4 my-4 sm:my-0 sm:max-h-[90vh] overflow-y-auto animate-scale-in shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] shadow-primary/10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div>
            <h2 className="text-base tracking-tight text-white">
              {serviceName}
            </h2>
            <p className="text-xs text-slate-300">
              {user?.displayName || user?.email || 'User'}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300 pl-1">
              Property Type *
            </label>
            <Select value={formData.propertyType} onValueChange={(value) => handleInputChange('propertyType', value)}>
              <SelectTrigger className="h-10 bg-slate-800/50 border-slate-600/50 text-white text-xs focus:border-primary/60 focus:bg-slate-800/70 rounded-lg [&>span]:text-white">
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700 z-[99999]">
                <SelectItem value="residential" className="text-white/90 text-xs hover:bg-slate-700">Residential</SelectItem>
                <SelectItem value="commercial" className="text-white/90 text-xs hover:bg-slate-700">Commercial</SelectItem>
                <SelectItem value="agricultural" className="text-white/90 text-xs hover:bg-slate-700">Agricultural</SelectItem>
                <SelectItem value="industrial" className="text-white/90 text-xs hover:bg-slate-700">Industrial</SelectItem>
                <SelectItem value="plot" className="text-white text-xs hover:bg-slate-700">Plot/Land</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {serviceName === "Due Diligence Report" && (
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300 pl-1">
                Property Size *
              </label>
              <Select value={formData.propertySize} onValueChange={(value) => handleInputChange('propertySize', value)}>
                <SelectTrigger className="h-10 bg-slate-800/50 border-slate-600/50 text-white text-xs focus:border-primary/60 focus:bg-slate-800/70 rounded-lg [&>span]:text-white">
                  <SelectValue placeholder="Select property size" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 z-[99999]">
                  <SelectItem value="30x40" className="text-white text-xs hover:bg-slate-700">30x40 sqft</SelectItem>
                  <SelectItem value="40x60" className="text-white text-xs hover:bg-slate-700">40x60 sqft</SelectItem>
                  <SelectItem value="up-to-5000" className="text-white text-xs hover:bg-slate-700">Up to 5000 sqft</SelectItem>
                  <SelectItem value="more-than-5000" className="text-white text-xs hover:bg-slate-700">More than 5000 sqft</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300 pl-1">
              Property Address *
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 text-slate-500" />
              <Input
                type="text"
                value={formData.propertyAddress}
                onChange={(e) => handleInputChange('propertyAddress', e.target.value)}
                className="h-9 pl-9 bg-slate-800/50 border-slate-600/50 text-white text-xs placeholder:text-slate-500 focus:border-primary/60 focus:bg-slate-800/70 transition-all duration-300 rounded-lg"
                placeholder="Enter complete property address"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300 pl-1">
              Survey Number
            </label>
            <Input
              type="text"
              value={formData.surveyNumber}
              onChange={(e) => handleInputChange('surveyNumber', e.target.value)}
              className="h-9 bg-slate-800/50 border-slate-600/50 text-white text-xs placeholder:text-slate-500 focus:border-primary/60 focus:bg-slate-800/70 transition-all duration-300 rounded-lg"
              placeholder="e.g., 123/4A"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300 pl-1">
              District *
            </label>
            <Select value={formData.district} onValueChange={(value) => handleInputChange('district', value)}>
              <SelectTrigger className="h-10 bg-slate-800/50 border-slate-600/50 text-white text-xs focus:border-primary/60 focus:bg-slate-800/70 rounded-lg [&>span]:text-white">
                <SelectValue placeholder="Select district" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700 z-[99999]">
                <SelectItem value="bengaluru-urban" className="text-white text-xs hover:bg-slate-700">Bengaluru Urban</SelectItem>
                <SelectItem value="bengaluru-rural" className="text-white text-xs hover:bg-slate-700">Bengaluru Rural</SelectItem>
                <SelectItem value="mysuru" className="text-white text-xs hover:bg-slate-700">Mysuru</SelectItem>
                <SelectItem value="mangaluru" className="text-white text-xs hover:bg-slate-700">Mangaluru</SelectItem>
                <SelectItem value="hubli-dharwad" className="text-white text-xs hover:bg-slate-700">Hubli-Dharwad</SelectItem>
                <SelectItem value="other" className="text-white text-xs hover:bg-slate-700">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300 pl-1">
              Pincode *
            </label>
            <Input
              type="text"
              value={formData.pincode}
              onChange={(e) => handleInputChange('pincode', e.target.value.replace(/\D/g, ''))}
              className="h-9 bg-slate-800/50 border-slate-600/50 text-white text-xs placeholder:text-slate-500 focus:border-primary/60 focus:bg-slate-800/70 transition-all duration-300 rounded-lg"
              placeholder="e.g., 560001"
              maxLength={6}
              pattern="[0-9]{6}"
              required
            />
          </div>

          {/* Payment Section */}
          <div className="pt-4 space-y-3">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-300">{serviceName}</span>
                <span className="text-lg font-semibold text-white">{servicePrice}</span>
              </div>
            </div>

            <PaymentButton
              amount={priceAmount}
              customerDetails={{
                customer_name: user?.displayName || 'User',
                customer_email: user?.email || '',
                customer_phone: user?.phoneNumber || '',
              }}
              serviceName={serviceName}
              onPaymentSuccess={handlePaymentSuccess}
              onPaymentError={handlePaymentError}
              className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              Proceed to Payment
            </PaymentButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyDetailsForm;

