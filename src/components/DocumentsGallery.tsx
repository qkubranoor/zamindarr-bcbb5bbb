import { FileText, Eye, Download, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import documentSample from "@/assets/document-sample.jpg";

const DocumentsGallery = () => {
  const documents = [
    {
      name: "Village Account Number (VAN)",
      description: "Comprehensive land record showing survey numbers, area details, and ownership information",
      icon: FileText,
      sampleAvailable: true,
      format: "Kannada/English"
    },
    {
      name: "Guidance Value Certificate", 
      description: "Official government document showing current market guidance values for properties",
      icon: CreditCard,
      sampleAvailable: true,
      format: "Kannada/English"
    },
    {
      name: "RTC (Record of Rights in Tenancy and Crops)",
      description: "Village account record showing land ownership, tenancy rights, and crop details",
      icon: FileText,
      sampleAvailable: true,
      format: "Kannada"
    },
    {
      name: "Mutation Register (Form-12)",
      description: "Document recording changes in land ownership, classification, or subdivision",
      icon: FileText,
      sampleAvailable: true,
      format: "English/Kannada"
    },
    {
      name: "Survey Sketch & Boundaries",
      description: "Detailed land survey map with exact measurements, boundaries, and owner details",
      icon: FileText,
      sampleAvailable: true,
      format: "Digital Map"
    },
    {
      name: "Encumbrance Certificate (EC)",
      description: "Legal document showing all property transactions over a specified period",
      icon: FileText,
      sampleAvailable: false,
      format: "English/Kannada"
    }
  ];

  return (
    <section id="documents" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Property Documents Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore sample documents to understand what you'll receive. View authentic formats 
            and learn about each document's importance in property transactions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {documents.map((doc, index) => (
            <div key={index} className="card-elegant group hover:scale-105">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                    <doc.icon className="w-5 h-5 text-primary" />
                  </div>
                  {doc.sampleAvailable && (
                    <span className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full font-medium">
                      Sample
                    </span>
                  )}
                </div>
                <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                  {doc.format}
                </span>
              </div>
              
              <h3 className="text-base font-serif font-medium text-foreground mb-2 leading-tight">
                {doc.name}
              </h3>
              <p className="text-muted-foreground mb-4 text-xs leading-relaxed">
                {doc.description}
              </p>
              
              {/* Sample Preview - Simplified */}
              <div className="mb-4 relative group/img bg-muted/30 rounded-lg p-4 border border-border/50">
                <div className="text-center">
                  <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Karnataka Government</p>
                  <p className="text-xs text-muted-foreground">Official Document</p>
                </div>
                {doc.sampleAvailable && (
                  <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                {doc.sampleAvailable ? (
                  <>
                    <Button variant="outline" className="w-full text-xs h-8">
                      <Eye className="w-3 h-3 mr-1" />
                      View Sample
                    </Button>
                    <Button className="w-full text-xs h-8">
                      <Download className="w-3 h-3 mr-1" />
                      Request Document
                    </Button>
                  </>
                ) : (
                  <Button className="w-full text-xs h-8">
                    <Download className="w-3 h-3 mr-1" />
                    Request Document
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <div className="card-elegant max-w-xl mx-auto">
            <h3 className="text-lg font-serif font-medium text-foreground mb-3">
              Complete Document Package
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get all essential property documents for comprehensive due diligence.
            </p>
            <Button className="text-sm px-6">
              <FileText className="w-4 h-4 mr-2" />
              Request Package
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsGallery;