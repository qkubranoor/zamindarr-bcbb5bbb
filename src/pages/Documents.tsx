
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FileText, Eye, Download, ArrowLeft, X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Documents = () => {
  const [selectedDocument, setSelectedDocument] = useState<any>(null);
  const navigate = useNavigate();
  
  const documents = [
    {
      name: "RTC",
      fullName: "Record of Rights in Tenancy and Crops",
      description: "Land ownership & cultivation record maintained by village revenue department",
      icon: FileText,
      sampleImage: "/lovable-uploads/4e08f18b-00a6-4bd0-a23a-71d5fea8a968.png",
      format: "Kannada",
      isEssential: true
    },
    {
      name: "Mutation Register",
      fullName: "Form-12 Mutation Register",
      description: "Records all ownership changes, transfers, and subdivisions chronologically",
      icon: FileText,
      sampleImage: "/lovable-uploads/f2ff1a19-ee43-47b6-9d1b-8168d4ad1718.png",
      format: "English/Kannada",
      isEssential: true
    },
    {
      name: "Survey Sketch",
      fullName: "Survey Sketch & Boundaries",
      description: "Official land map with exact measurements, boundaries & adjacent plot details",
      icon: FileText,
      sampleImage: "/lovable-uploads/57fdc5e0-0c2d-4bc6-b22e-8a1d0042aae8.png",
      format: "Digital Map",
      isEssential: true
    },
    {
      name: "Encumbrance Certificate",
      fullName: "Encumbrance Certificate (EC)",
      description: "Complete transaction history showing all registered property dealings",
      icon: FileText,
      sampleImage: "/lovable-uploads/13bab8e7-bc1b-4a5f-8a5f-e7429b60cb46.png",
      format: "English/Kannada",
      isEssential: true
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="py-6 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4">
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
              <span className="text-xs sm:text-sm">Back to Home</span>
            </Link>
            
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">
                Property Documents
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
                Essential Karnataka property documents
              </p>
            </div>
          </div>

          {/* Documents Grid - Mobile First */}
          <div className="grid grid-cols-2 gap-2 sm:gap-2.5 mb-4 sm:mb-6 max-w-md mx-auto">
            {documents.map((doc, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 border border-slate-700/50 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none"></div>
                
                {/* Document Image with Black Glassmorphism */}
                <div 
                  className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedDocument(doc)}
                >
                  <img 
                    src={doc.sampleImage} 
                    alt={doc.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-90"
                  />
                  {/* Black glassmorphism overlay - no blur */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  
                  {/* Essential Badge */}
                  {doc.isEssential && (
                    <div className="absolute top-1.5 right-1.5 flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-emerald-500/90 border border-emerald-400/50 text-white text-[9px] font-medium">
                      <CheckCircle className="w-2 h-2" />
                      Essential
                    </div>
                  )}
                  
                  {/* Format Badge */}
                  <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-full bg-black/60 border border-white/10 text-white text-[9px]">
                    {doc.format}
                  </div>
                </div>

                {/* Document Info */}
                <div className="p-2 relative z-10">
                  <h3 className="font-bold text-white text-[11px] sm:text-xs mb-0.5 leading-tight line-clamp-1">
                    {doc.name}
                  </h3>
                  <p className="text-[8px] sm:text-[9px] text-slate-400 mb-1 line-clamp-1">
                    {doc.fullName}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-1">
                    <Button 
                      size="sm" 
                      className="flex-1 text-[9px] sm:text-[10px] h-6 sm:h-7 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-primary/25 transition-all duration-300 border-0 font-medium px-1.5"
                      onClick={() => navigate('/due-diligence-form')}
                    >
                      <Download className="w-2 h-2 sm:w-2.5 sm:h-2.5 mr-0.5" />
                      Report
                    </Button>
                    
                    <Button 
                      size="sm" 
                      className="px-1.5 h-6 sm:h-7 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white transition-all duration-300"
                      onClick={() => setSelectedDocument(doc)}
                    >
                      <Eye className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-xl mx-auto">
            <div className="relative bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 border border-primary/30 rounded-lg p-3 sm:p-4 text-center overflow-hidden">
              {/* Glow effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2">Need Complete Due Diligence?</h3>
                <p className="text-[10px] sm:text-[11px] text-slate-300 mb-3">
                  Get all documents with expert verification
                </p>
                <Button 
                  onClick={() => navigate('/due-diligence-form')}
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 border-0 font-semibold h-8 sm:h-9 px-4 sm:px-5 text-[10px] sm:text-[11px]"
                >
                  <Download className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1.5" />
                  Request Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Document Preview Modal - Aligned with Service Section Style */}
      {selectedDocument && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm overflow-y-auto animate-fade-in" onClick={() => setSelectedDocument(null)}>
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
                    {selectedDocument.name}
                  </h2>
                  <p className="text-xs text-slate-300">{selectedDocument.fullName}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedDocument(null)}
                className="h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Document Image */}
            <div className="relative mb-4 rounded-xl overflow-hidden">
              <img 
                src={selectedDocument.sampleImage} 
                alt={selectedDocument.name}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            {/* Description */}
            <div className="mb-4 relative z-10">
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedDocument.description}
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-3 pt-2 relative z-10">
              <Button 
                onClick={() => navigate('/due-diligence-form')}
                className="w-full h-10 bg-gradient-to-r from-[hsl(220_85%_50%)] to-[hsl(220_85%_45%)] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Get Complete Report
              </Button>
              
              <p className="text-[10px] text-slate-400 text-center">
                Sample preview only • Full verification available
              </p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </main>
  );
};

export default Documents;
