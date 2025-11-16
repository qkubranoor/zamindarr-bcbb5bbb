import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building, FileCheck, Send, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";


const BuilderOutreachSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    reraNumber: "",
    projectName: "",
    location: "",
    message: "",
    documentType: "brochure"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const pdfFiles = files.filter(file => file.type === 'application/pdf');
    
    if (pdfFiles.length !== files.length) {
      toast({
        title: "Invalid File Type",
        description: "Please upload only PDF files.",
        variant: "destructive"
      });
      return;
    }
    
    setUploadedFiles(prev => [...prev, ...pdfFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("form-name", "builder-outreach");
      
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      
      uploadedFiles.forEach((file, index) => {
        formDataToSend.append(`document-${index}`, file);
      });

      const response = await fetch("/", {
        method: "POST",
        body: formDataToSend
      });

      if (response.ok) {
        toast({
          title: "Submission Successful!",
          description: "We'll review your request and get back to you within 24 hours.",
        });
        setFormData({
          companyName: "",
          contactPerson: "",
          email: "",
          phone: "",
          reraNumber: "",
          projectName: "",
          location: "",
          message: "",
          documentType: "brochure"
        });
        setUploadedFiles([]);
        setIsExpanded(false);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Netlify Form Detection */}
      <form name="builder-outreach" method="POST" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="builder-outreach" />
        <input name="companyName" />
        <input name="contactPerson" />
        <input name="email" />
        <input name="phone" />
        <input name="reraNumber" />
        <input name="projectName" />
        <input name="location" />
        <textarea name="message"></textarea>
        <select name="documentType">
          <option value="brochure">Brochure Verification</option>
          <option value="approval">Document Approval</option>
          <option value="consultation">Consultation</option>
        </select>
        <input type="file" name="documents" multiple />
        <input name="bot-field" />
      </form>

      <section className="section-responsive py-4 sm:py-6 relative">
        <div className="container-responsive relative z-10">
          <div className="flex justify-center">
            {!isExpanded ? (
              // Compact animated box with video
              <div 
                onClick={() => setIsExpanded(true)}
                className="group relative bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 w-80 max-w-[90vw] cursor-pointer transition-all duration-700 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:shadow-primary/20 hover:scale-[1.02] hover:border-primary/40 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:via-transparent before:to-accent/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
              >
                {/* Video Background */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-40"
                  src="/assets/builder-portal.mp4"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/70"></div>
                {/* Tech grid pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                {/* Gliding particles */}
                <div className="absolute -top-3 -right-3 w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-bounce delay-300 shadow-lg shadow-primary/50"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full animate-bounce delay-700 shadow-lg shadow-accent/50"></div>
                <div className="absolute top-1/2 right-8 w-1 h-1 bg-primary rounded-full animate-pulse delay-500"></div>
                
                {/* Scanning line effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
                  </div>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:via-primary/20 group-hover:to-accent/30 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-lg shadow-primary/10">
                    <Building className="w-7 h-7 text-primary drop-shadow-sm" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-primary transition-colors duration-300 tracking-tight">
                    Builder Portal
                  </h3>
                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    Submit projects for instant verification
                  </p>
                  <div className="inline-flex items-center text-xs text-primary font-medium bg-primary/10 px-4 py-2 rounded-full border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <span className="mr-2">Launch Form</span>
                    <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ) : (
              // Expanded form
              <div className="w-full max-w-4xl bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] shadow-primary/10 animate-scale-in relative overflow-hidden">
                {/* Tech background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(45deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%), linear-gradient(-45deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/30 to-accent/20 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                      <Building className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-white text-base tracking-tight">Project Verification Portal</h3>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(false)}
                    className="text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-300"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="companyName" className="text-xs font-medium text-slate-300">
                        Company Name *
                      </Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="h-9 bg-slate-800/50 border-slate-600/50 text-white text-xs placeholder:text-slate-500 focus:border-primary/60 focus:bg-slate-800/70 transition-all duration-300 rounded-lg"
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="contactPerson" className="text-xs font-medium text-slate-300">
                        Contact Person *
                      </Label>
                      <Input
                        id="contactPerson"
                        name="contactPerson"
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        className="h-9 bg-slate-800/50 border-slate-600/50 text-white text-xs placeholder:text-slate-500 focus:border-primary/60 focus:bg-slate-800/70 transition-all duration-300 rounded-lg"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="email" className="text-xs font-medium text-slate-300">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="h-9 bg-slate-800/50 border-slate-600/50 text-white text-xs placeholder:text-slate-500 focus:border-primary/60 focus:bg-slate-800/70 transition-all duration-300 rounded-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="phone" className="text-xs font-medium text-slate-300">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-9 bg-slate-800/50 border-slate-600/50 text-white text-xs placeholder:text-slate-500 focus:border-primary/60 focus:bg-slate-800/70 transition-all duration-300 rounded-lg"
                        placeholder="+91 9876543210"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="reraNumber" className="text-xs font-medium text-slate-300">
                        RERA Registration *
                      </Label>
                      <Input
                        id="reraNumber"
                        name="reraNumber"
                        type="text"
                        required
                        value={formData.reraNumber}
                        onChange={handleInputChange}
                        className="h-9 bg-slate-800/50 border-slate-600/50 text-white text-xs placeholder:text-slate-500 focus:border-primary/60 focus:bg-slate-800/70 transition-all duration-300 rounded-lg"
                        placeholder="RERA/PRM/123/2024"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="documentType" className="text-xs font-medium text-slate-300">
                        Service Type *
                      </Label>
                      <select
                        id="documentType"
                        name="documentType"
                        required
                        value={formData.documentType}
                        onChange={handleInputChange}
                        className="flex h-9 w-full rounded-lg border border-slate-600/50 bg-slate-800/50 px-3 py-2 text-xs text-white ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus:border-primary/60 focus:bg-slate-800/70 transition-all duration-300"
                      >
                        <option value="brochure">Brochure Verification</option>
                        <option value="approval">Document Approval</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="projectName" className="text-xs font-medium text-slate-300">
                        Project Name *
                      </Label>
                      <Input
                        id="projectName"
                        name="projectName"
                        type="text"
                        required
                        value={formData.projectName}
                        onChange={handleInputChange}
                        className="h-9 bg-slate-800/50 border-slate-600/50 text-white text-xs placeholder:text-slate-500 focus:border-primary/60 focus:bg-slate-800/70 transition-all duration-300 rounded-lg"
                        placeholder="Project name"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="location" className="text-xs font-medium text-slate-300">
                        Location *
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                        className="h-9 bg-slate-800/50 border-slate-600/50 text-white text-xs placeholder:text-slate-500 focus:border-primary/60 focus:bg-slate-800/70 transition-all duration-300 rounded-lg"
                        placeholder="City, State"
                      />
                    </div>
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-slate-300">
                      Upload Documents (PDF only)
                    </Label>
                    <div className="border border-dashed border-slate-600/50 rounded-lg p-4 text-center hover:border-primary/50 hover:bg-slate-800/30 transition-all duration-300 bg-slate-800/20">
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept=".pdf"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => fileInputRef.current?.click()}
                        className="mb-2 h-8 text-xs bg-slate-700/50 border-slate-600/50 text-slate-300 hover:bg-slate-700/80 hover:text-white"
                      >
                        <Upload className="w-3 h-3 mr-2" />
                        Choose PDF Files
                      </Button>
                      <p className="text-xs text-slate-400">
                        Brochures, RERA certificates, approvals
                      </p>
                    </div>
                    
                    {/* Uploaded Files List */}
                    {uploadedFiles.length > 0 && (
                      <div className="space-y-1 mt-2">
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-slate-800/50 rounded-lg p-2 border border-slate-700/50">
                            <div className="flex items-center gap-2">
                              <FileCheck className="w-3 h-3 text-primary" />
                              <span className="text-xs text-slate-300 truncate">{file.name}</span>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                              className="h-6 w-6 p-0 text-slate-400 hover:text-red-400"
                            >
                              <X className="w-3 h-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="message" className="text-xs font-medium text-slate-300">
                      Additional Details
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-slate-800/50 border-slate-600/50 text-white text-xs placeholder:text-slate-500 focus:border-primary/60 focus:bg-slate-800/70 min-h-[80px] resize-none rounded-lg"
                      placeholder="Project timeline, specific requirements, etc..."
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsExpanded(false)}
                      className="flex-1 h-9 text-xs bg-slate-800/50 border-slate-600/50 text-slate-300 hover:bg-slate-700/50 hover:text-white rounded-lg"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 h-9 bg-gradient-to-r from-primary via-primary to-accent text-white font-medium text-xs rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin"></div>
                          Processing...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-3 h-3" />
                          Submit for Review
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BuilderOutreachSection;