import { useState, useMemo, useCallback, useEffect } from "react";
import { X, FileText, User, Mail, Phone, MapPin, Building, Calendar, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { PaymentButton } from "@/components/PaymentButton";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface DocumentVerificationFormProps {
  onClose: () => void;
  serviceName: string;
  servicePrice: string;
}

const DocumentVerificationForm = ({ onClose, serviceName, servicePrice }: DocumentVerificationFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    propertyAddress: "",
    propertyType: "",
    propertySize: "",
    surveyNumber: "",
    district: "",
    pincode: "",
    documentType: "",
    statutoryType: "",
    stampPaperDenomination: "",
    agreementValue: "",
    deliveryMethod: "",
    pageCount: "",
    urgency: "normal",
    additionalDetails: "",
    preferredContact: "email"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const { toast } = useToast();

  // Calculate dynamic price based on page count, stamp paper, and delivery
  const priceBreakdown = useMemo(() => {
    if (serviceName === "Document Drafting" && formData.pageCount) {
      const basePrice = formData.pageCount === "up-to-10" ? 2200 : 5600;
      const stampPaperPrice = formData.statutoryType === "karnataka-estamp" && formData.stampPaperDenomination 
        ? parseInt(formData.stampPaperDenomination) 
        : 0;
      const deliveryPrice = formData.deliveryMethod === "physical" ? 100 : 0;
      const total = basePrice + stampPaperPrice + deliveryPrice;
      
      return {
        basePrice,
        stampPaperPrice,
        deliveryPrice,
        total,
        marketPrice: 12000
      };
    }
    return null;
  }, [serviceName, formData.pageCount, formData.statutoryType, formData.stampPaperDenomination, formData.deliveryMethod]);

  const calculatedPrice = useMemo(() => {
    if (priceBreakdown) {
      return `₹${priceBreakdown.total.toLocaleString('en-IN')}`;
    }
    return servicePrice;
  }, [priceBreakdown, servicePrice]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  const documentTypeOptions = useMemo(() => {
    if (serviceName === "Document Drafting") {
      return [
        { value: "sale-agreement", label: "Sale Agreement" },
        { value: "lease-deed", label: "Lease Deed" },
        { value: "power-of-attorney", label: "Power of Attorney" },
        { value: "gift-deed", label: "Gift Deed" },
        { value: "partition-deed", label: "Partition Deed" },
        { value: "rental-agreement", label: "Rental Agreement" },
        { value: "mortgage-deed", label: "Mortgage Deed" }
      ];
    }
    return [
      { value: "rtc", label: "RTC (Record of Rights)" },
      { value: "mutation", label: "Mutation Register (Form-12)" },
      { value: "survey-sketch", label: "Survey Sketch & Boundaries" },
      { value: "encumbrance", label: "Encumbrance Certificate" },
      { value: "khata", label: "Khata Document" },
      { value: "sale-deed", label: "Sale Deed" },
      { value: "title-deed", label: "Title Deed" },
      { value: "patta", label: "Patta Document" },
      { value: "conversion", label: "Conversion Order" },
      { value: "other", label: "Other Document" }
    ];
  }, [serviceName]);

  const formQuestions = useMemo(() => {
    if (serviceName === "Document Drafting") {
      return {
        documentTypeLabel: "Document Type Required",
        documentTypePlaceholder: "Select the type of document to be drafted",
        additionalDetailsLabel: "Drafting Requirements",
        additionalDetailsPlaceholder: "Please provide specific details about the document to be drafted, parties involved, terms and conditions, or any special clauses required..."
      };
    }
    return {
      documentTypeLabel: "Document Type for Verification",
      documentTypePlaceholder: "Select the document to be verified",
      additionalDetailsLabel: "Additional Details",
      additionalDetailsPlaceholder: "Please provide any specific requirements, concerns, or additional information about your property or documents..."
    };
  }, [serviceName]);

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      // Reset stamp paper denomination if statutory type changes away from karnataka-estamp
      if (field === 'statutoryType' && value !== 'karnataka-estamp') {
        newData.stampPaperDenomination = '';
      }
      return newData;
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation - only check fields that are required for all services
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Additional validation for non-Document Drafting services
    if (serviceName !== "Document Drafting" && !formData.propertyAddress) {
      toast({
        title: "Missing Information",
        description: "Please enter the property address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission - in production, this would send to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "Request Submitted Successfully!",
        description: "Please complete the payment to confirm your service request.",
      });
    } catch (error) {
      console.error('Form submission error:', error);
      const message = error instanceof Error ? error.message : 'Form submission failed';
      toast({
        title: "Submission Failed",
        description: message,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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


  return (
    <div className="fixed inset-0 z-[9999] flex items-start sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm overflow-y-auto" onClick={onClose}>
      <div 
        className="bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl md:backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-4 sm:p-6 max-w-sm sm:max-w-md lg:max-w-[448px] w-full mx-4 my-4 sm:my-0 sm:max-h-[90vh] overflow-y-auto animate-scale-in shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] shadow-primary/10 relative modal-content-smooth gpu-layer"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tech background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%), linear-gradient(-45deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary/30 to-accent/20 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-base tracking-tight text-white">
                {serviceName}
              </h2>
              <p className="text-xs text-slate-300">
                {serviceName === "Document Drafting"
                  ? "From ₹2,200 onwards"
                  : serviceName === "Due Diligence Report"
                  ? "₹35,000 - ₹1,68,000"
                  : servicePrice}
              </p>
            </div>
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
        <form onSubmit={handleSubmit} name="document-verification" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          {/* Netlify form fields */}
          <input type="hidden" name="form-name" value="document-verification" />
          <input type="hidden" name="service-type" value={serviceName} />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <div className="space-y-2 relative z-10">
            {/* Personal Information */}
            <div className="grid grid-cols-1 gap-2">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300 pl-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 text-slate-500" />
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="h-9 pl-9 bg-slate-800/50 border-slate-600/50 text-white text-xs placeholder:text-slate-500 focus:border-primary/60 focus:bg-slate-800/70 transition-all duration-300 rounded-lg"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300 pl-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 text-slate-500" />
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="h-9 pl-9 bg-slate-800/50 border-slate-600/50 text-white text-xs placeholder:text-slate-500 focus:border-primary/60 focus:bg-slate-800/70 transition-all duration-300 rounded-lg"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300 pl-1">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 text-slate-500" />
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="h-9 pl-9 bg-slate-800/50 border-slate-600/50 text-white text-xs placeholder:text-slate-500 focus:border-primary/60 focus:bg-slate-800/70 transition-all duration-300 rounded-lg"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            {/* Page Count - Only for Document Drafting */}
            {serviceName === "Document Drafting" && (
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300 pl-1">
                  Number of Pages *
                </label>
                <Select value={formData.pageCount} onValueChange={(value) => handleInputChange('pageCount', value)}>
                  <SelectTrigger className="h-10 bg-slate-800/50 border-slate-600/50 text-white text-xs focus:border-primary/60 focus:bg-slate-800/70 rounded-lg [&>span]:text-white tap-friendly">
                    <SelectValue placeholder="Select page count" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700 z-[99999] gpu-layer">
                    <SelectItem value="up-to-10" className="text-white text-xs hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">Up to 10 pages</SelectItem>
                    <SelectItem value="more-than-10" className="text-white text-xs hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">More than 10 pages</SelectItem>
                  </SelectContent>
                </Select>
                <input type="hidden" name="pageCount" value={formData.pageCount} />
              </div>
            )}

            {/* Property Information - Only show for non-Document Drafting services */}
            {serviceName !== "Document Drafting" && (
              <>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300 pl-1">
                    Property Type *
                  </label>
                  <Select value={formData.propertyType} onValueChange={(value) => handleInputChange('propertyType', value)}>
                    <SelectTrigger className="h-10 bg-slate-800/50 border-slate-600/50 text-white text-xs focus:border-primary/60 focus:bg-slate-800/70 rounded-lg [&>span]:text-white tap-friendly">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                     <SelectContent className="bg-slate-800 border-slate-700 z-[99999] gpu-layer">
                       <SelectItem value="residential" className="text-white/90 text-xs hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white cursor-pointer">Residential</SelectItem>
                       <SelectItem value="commercial" className="text-white/90 text-xs hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white cursor-pointer">Commercial</SelectItem>
                       <SelectItem value="agricultural" className="text-white/90 text-xs hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white cursor-pointer">Agricultural</SelectItem>
                       <SelectItem value="industrial" className="text-white/90 text-xs hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white cursor-pointer">Industrial</SelectItem>
                      <SelectItem value="plot" className="text-white text-xs hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">Plot/Land</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="propertyType" value={formData.propertyType} />
                </div>

                {serviceName === "Due Diligence Report" && (
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300 pl-1">
                      Property Size *
                    </label>
                    <Select value={formData.propertySize} onValueChange={(value) => handleInputChange('propertySize', value)}>
                      <SelectTrigger className="h-10 bg-slate-800/50 border-slate-600/50 text-white text-xs focus:border-primary/60 focus:bg-slate-800/70 rounded-lg [&>span]:text-white tap-friendly">
                        <SelectValue placeholder="Select property size" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700 z-[99999] gpu-layer">
                        <SelectItem value="30x40" className="text-white text-xs hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">30x40 sqft</SelectItem>
                        <SelectItem value="40x60" className="text-white text-xs hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">40x60 sqft</SelectItem>
                        <SelectItem value="up-to-5000" className="text-white text-xs hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">Up to 5000 sqft</SelectItem>
                        <SelectItem value="more-than-5000" className="text-white text-xs hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">More than 5000 sqft</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="propertySize" value={formData.propertySize} />
                  </div>
                )}


                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300 pl-1">
                    Property Address *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 text-slate-500" />
                    <Input
                      type="text"
                      name="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={(e) => handleInputChange('propertyAddress', e.target.value)}
                      className="h-9 pl-9 bg-slate-800/50 border-slate-600/50 text-white text-xs placeholder:text-slate-500 focus:border-primary/60 focus:bg-slate-800/70 transition-all duration-300 rounded-lg"
                      placeholder="Enter complete property address"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300 pl-1">
                    Survey Number
                  </label>
                  <Input
                    type="text"
                    name="surveyNumber"
                    value={formData.surveyNumber}
                    onChange={(e) => handleInputChange('surveyNumber', e.target.value)}
                    className="h-9 bg-slate-800/50 border-slate-600/50 text-white text-xs placeholder:text-slate-500 focus:border-primary/60 focus:bg-slate-800/70 transition-all duration-300 rounded-lg"
                    placeholder="e.g., 123/4A"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300 pl-1">
                    District *
                  </label>
                  <Select value={formData.district} onValueChange={(value) => handleInputChange('district', value)}>
                    <SelectTrigger className="h-10 bg-slate-800/50 border-slate-600/50 text-white text-xs focus:border-primary/60 focus:bg-slate-800/70 rounded-lg [&>span]:text-white tap-friendly">
                      <SelectValue placeholder="Select district" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700 z-[99999] gpu-layer">
                      <SelectItem value="bengaluru-urban" className="text-white text-xs hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">Bengaluru Urban</SelectItem>
                      <SelectItem value="bengaluru-rural" className="text-white text-xs hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">Bengaluru Rural</SelectItem>
                      <SelectItem value="mysuru" className="text-white text-xs hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">Mysuru</SelectItem>
                      <SelectItem value="mangaluru" className="text-white text-xs hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">Mangaluru</SelectItem>
                      <SelectItem value="hubli-dharwad" className="text-white text-xs hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">Hubli-Dharwad</SelectItem>
                      <SelectItem value="other" className="text-white text-xs hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="district" value={formData.district} />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300 pl-1">
                    Pincode *
                  </label>
                  <Input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value)}
                    className="h-9 bg-slate-800/50 border-slate-600/50 text-white text-xs placeholder:text-slate-500 focus:border-primary/60 focus:bg-slate-800/70 transition-all duration-300 rounded-lg"
                    placeholder="e.g., 560001"
                    maxLength={6}
                    pattern="[0-9]{6}"
                    required
                  />
                </div>
              </>
            )}

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300 pl-1">
                {formQuestions.documentTypeLabel} {serviceName === "Due Diligence Report" ? "*" : ""}
              </label>
              {serviceName === "Due Diligence Report" ? (
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3">
                  <p className="text-xs text-slate-300 font-medium mb-2">All documents included:</p>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li>• RTC (Record of Rights)</li>
                    <li>• Mutation Register (Form-12)</li>
                    <li>• Survey Sketch & Boundaries</li>
                    <li>• Encumbrance Certificate</li>
                    <li>• Khata Document</li>
                    <li>• Sale Deed</li>
                    <li>• Title Deed</li>
                    <li>• All other relevant documents</li>
                  </ul>
                </div>
              ) : (
                <>
                  <Select value={formData.documentType} onValueChange={(value) => handleInputChange('documentType', value)}>
                    <SelectTrigger className="h-10 bg-slate-800/50 border-slate-600/50 text-white text-xs focus:border-primary/60 focus:bg-slate-800/70 rounded-lg [&>span]:text-white tap-friendly">
                      <SelectValue placeholder={formQuestions.documentTypePlaceholder} />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700 z-[99999] gpu-layer">
                       {documentTypeOptions.map((option) => (
                         <SelectItem 
                           key={option.value} 
                           value={option.value} 
                           className="text-white/90 text-xs hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white cursor-pointer"
                         >
                           {option.label}
                         </SelectItem>
                       ))}
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="documentType" value={formData.documentType} />
                </>
              )}
            </div>

            {/* Statutory Document Type - Only for Document Drafting */}
            {serviceName === "Document Drafting" && (
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300 pl-1 flex items-center gap-1">
                  Statutory Document Type
                  <Popover>
                    <PopoverTrigger asChild>
                      <button type="button" className="inline-flex">
                        <Info className="w-3.5 h-3.5 text-slate-400 hover:text-slate-300 cursor-pointer" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="max-w-xs bg-slate-800 border-slate-700 text-slate-200 text-xs p-3 z-[99999]" side="top" align="start">
                      <p>This stamp paper is only used to print your agreement.</p>
                      <p className="mt-2">The actual stamp duty, which varies by document type (Sale, Lease, POA, Gift, Partition, Mortgage, etc.), must be paid electronically through Kaveri Online Services or at the Sub-Registrar Office.</p>
                      <p className="mt-2">Once paid, an e-Stamp certificate is issued which is what legally validates your document.</p>
                    </PopoverContent>
                  </Popover>
                </label>
                <Select value={formData.statutoryType} onValueChange={(value) => handleInputChange('statutoryType', value)}>
                  <SelectTrigger className="h-10 bg-slate-800/50 border-slate-600/50 text-white text-xs focus:border-primary/60 focus:bg-slate-800/70 rounded-lg [&>span]:text-white tap-friendly">
                    <SelectValue placeholder="Select statutory type" />
                  </SelectTrigger>
                   <SelectContent className="bg-slate-800 border-slate-700 z-[99999] gpu-layer">
                     <SelectItem value="karnataka-estamp" className="text-white/90 text-xs hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white cursor-pointer">
                       Karnataka E-Stamp/ Non-judicial stamp paper
                     </SelectItem>
                     <SelectItem value="plain-paper" className="text-white/90 text-xs hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white cursor-pointer">
                       Plain paper
                     </SelectItem>
                   </SelectContent>
                 </Select>
                 <input type="hidden" name="statutoryType" value={formData.statutoryType} />
                 
                 {/* Stamp Paper Denomination - Only when Karnataka E-Stamp is selected */}
                 {formData.statutoryType === "karnataka-estamp" && (
                   <div className="mt-3">
                     <label className="text-xs font-medium text-slate-300 pl-1">
                       Stamp Paper Denomination *
                     </label>
                     <Select value={formData.stampPaperDenomination} onValueChange={(value) => handleInputChange('stampPaperDenomination', value)}>
                       <SelectTrigger className="h-10 mt-1 bg-slate-800/50 border-slate-600/50 text-white text-xs focus:border-primary/60 focus:bg-slate-800/70 rounded-lg [&>span]:text-white tap-friendly">
                         <SelectValue placeholder="Select stamp paper value" />
                       </SelectTrigger>
                       <SelectContent className="bg-slate-800 border-slate-700 z-[99999] gpu-layer">
                         <SelectItem value="100" className="text-white/90 text-xs hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white cursor-pointer">
                           ₹100
                         </SelectItem>
                         <SelectItem value="200" className="text-white/90 text-xs hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white cursor-pointer">
                           ₹200
                         </SelectItem>
                         <SelectItem value="500" className="text-white/90 text-xs hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white cursor-pointer">
                           ₹500
                         </SelectItem>
                         <SelectItem value="1000" className="text-white/90 text-xs hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white cursor-pointer">
                           ₹1,000
                         </SelectItem>
                       </SelectContent>
                     </Select>
                     <input type="hidden" name="stampPaperDenomination" value={formData.stampPaperDenomination} />
                   </div>
                 )}
                 
               </div>
             )}

             {/* Agreement Value - Only for Document Drafting with Karnataka E-Stamp */}
             {serviceName === "Document Drafting" && formData.statutoryType === "karnataka-estamp" && (
               <div className="space-y-1">
                 <label className="text-xs font-medium text-slate-300 pl-1">
                   Agreement Value (₹) *
                 </label>
                 <Input
                   type="number"
                   name="agreementValue"
                   value={formData.agreementValue}
                   onChange={(e) => handleInputChange('agreementValue', e.target.value)}
                   className="h-9 bg-slate-800/50 border-slate-600/50 text-white text-xs placeholder:text-slate-500 focus:border-primary/60 focus:bg-slate-800/70 transition-all duration-300 rounded-lg"
                   placeholder="Enter agreement value"
                   min="0"
                   step="1"
                 />
                 <p className="text-xs text-slate-400 mt-1">
                   This amount will be added to the service fee
                 </p>
                 <input type="hidden" name="agreementValue" value={formData.agreementValue} />
               </div>
             )}

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300 pl-1">
                {formQuestions.additionalDetailsLabel}
              </label>
              <Textarea
                name="additionalDetails"
                value={formData.additionalDetails}
                onChange={(e) => handleInputChange('additionalDetails', e.target.value)}
                className="bg-slate-800/50 border-slate-600/50 text-white text-xs placeholder:text-slate-500 focus:border-primary/60 focus:bg-slate-800/70 min-h-[80px] resize-none rounded-lg"
                placeholder={formQuestions.additionalDetailsPlaceholder}
                rows={3}
              />
            </div>

            {/* Delivery Method - Only for Document Drafting */}
            {serviceName === "Document Drafting" && (
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300 pl-1">
                  Delivery Method *
                </label>
                <Select value={formData.deliveryMethod} onValueChange={(value) => handleInputChange('deliveryMethod', value)}>
                  <SelectTrigger className="h-10 bg-slate-800/50 border-slate-600/50 text-white text-xs focus:border-primary/60 focus:bg-slate-800/70 rounded-lg [&>span]:text-white tap-friendly">
                    <SelectValue placeholder="Select delivery method" />
                  </SelectTrigger>
                   <SelectContent className="bg-slate-800 border-slate-700 z-[99999] gpu-layer">
                     <SelectItem value="online" className="text-white/90 text-xs hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white cursor-pointer">
                       Online (Email/Digital delivery)
                     </SelectItem>
                     <SelectItem value="physical" className="text-white/90 text-xs hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white cursor-pointer">
                       Courier/Postal delivery
                     </SelectItem>
                   </SelectContent>
                </Select>
                <input type="hidden" name="deliveryMethod" value={formData.deliveryMethod} />
              </div>
            )}

            {serviceName !== "Due Diligence Report" && serviceName !== "Document Drafting" && (
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300 pl-1">
                  Preferred Contact Method
                </label>
                <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange('preferredContact', value)}>
                  <SelectTrigger className="h-9 bg-slate-800/50 border-slate-600/50 text-white text-xs focus:border-primary/60 focus:bg-slate-800/70 rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="email" className="text-white text-xs hover:bg-slate-700">Email</SelectItem>
                    <SelectItem value="phone" className="text-white text-xs hover:bg-slate-700">Phone</SelectItem>
                    <SelectItem value="whatsapp" className="text-white text-xs hover:bg-slate-700">WhatsApp</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Submit and Payment Section */}
            <div className="space-y-3 pt-2">
              {/* Submit Request Button */}
              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full h-9 bg-gradient-to-r from-primary via-primary to-accent text-white font-medium text-xs rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : isSubmitted ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3" />
                    Request Submitted
                  </div>
                ) : (
                  "Submit Request"
                )}
              </Button>

              {/* Pricing and Payment Section - Shows after submission */}
              {isSubmitted && (
                <div className="animate-fade-in space-y-3 p-4 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-primary/30 rounded-xl backdrop-blur-sm">
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-white text-center">Your Bill</h3>
                    
                    {/* Detailed Bill Breakdown */}
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3 space-y-2">
                      {/* Service Name */}
                      <p className="text-xs text-slate-400 border-b border-slate-700/50 pb-2 mb-2">{serviceName}</p>
                      
                      {/* Bill Items */}
                      {priceBreakdown ? (
                        <>
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-300">Document Drafting ({formData.pageCount === "up-to-10" ? "Up to 10 pages" : "More than 10 pages"})</span>
                            <span className="text-white">₹{priceBreakdown.basePrice.toLocaleString('en-IN')}</span>
                          </div>
                          
                          {priceBreakdown.stampPaperPrice > 0 && (
                            <div className="flex justify-between text-xs">
                              <span className="text-slate-300">Stamp Paper (₹{formData.stampPaperDenomination})</span>
                              <span className="text-white">₹{priceBreakdown.stampPaperPrice.toLocaleString('en-IN')}</span>
                            </div>
                          )}
                          
                          {priceBreakdown.deliveryPrice > 0 && (
                            <div className="flex justify-between text-xs">
                              <span className="text-slate-300">Postal/Courier Delivery</span>
                              <span className="text-white">₹{priceBreakdown.deliveryPrice.toLocaleString('en-IN')}</span>
                            </div>
                          )}
                          
                          {/* Divider */}
                          <div className="border-t border-slate-600/50 my-2"></div>
                          
                          {/* Total */}
                          <div className="flex justify-between text-sm font-semibold">
                            <span className="text-white">Total</span>
                            <span className="text-primary">₹{priceBreakdown.total.toLocaleString('en-IN')}</span>
                          </div>
                          
                          {/* Savings Comparison */}
                          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-2 mt-3">
                            <div className="flex justify-between text-xs">
                              <span className="text-green-300">Market Price</span>
                              <span className="text-green-300 line-through">₹{priceBreakdown.marketPrice.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex justify-between text-xs mt-1">
                              <span className="text-green-400 font-medium">You Save</span>
                              <span className="text-green-400 font-medium">₹{(priceBreakdown.marketPrice - priceBreakdown.total).toLocaleString('en-IN')}</span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="text-center">
                          <p className="text-2xl font-bold text-white">{calculatedPrice}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <PaymentButton
                    amount={parseFloat(calculatedPrice.replace(/[^\d.]/g, ''))}
                    customerDetails={{
                      customer_name: formData.name,
                      customer_email: formData.email,
                      customer_phone: formData.phone
                    }}
                    serviceName={serviceName}
                    onPaymentSuccess={handlePaymentSuccess}
                    onPaymentError={handlePaymentError}
                    className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  >
                    Proceed to Payment
                  </PaymentButton>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentVerificationForm;
