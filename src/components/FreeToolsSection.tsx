import { useState } from "react";
import { Calculator, FileText, X, ChevronRight, Zap, TrendingUp, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import StampDutyCalculator from "./StampDutyCalculator";
import RegistrationFeeCalculator from "./RegistrationFeeCalculator";

const FreeToolsSection = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const tools = [
    {
      id: "stamp-duty",
      icon: Calculator,
      title: "Stamp Duty",
      description: "Calculate accurate stamp duty for Karnataka properties with latest government rates",
      component: StampDutyCalculator,
      features: ["Real-time rates", "Multi-property types", "Instant results"],
      techBadge: "AI-Powered"
    },
    {
      id: "registration-fee",
      icon: FileText,
      title: "Registration Fee", 
      description: "Compute registration fees with precision for seamless property transactions",
      component: RegistrationFeeCalculator,
      features: ["Government approved", "Updated rates", "Error-free calculation"],
      techBadge: "Smart Tech"
    }
  ];

  const openTool = (toolId: string) => {
    setSelectedTool(toolId);
    setIsDialogOpen(true);
  };

  const closeTool = () => {
    setIsDialogOpen(false);
    setSelectedTool(null);
  };

  const selectedToolData = tools.find(tool => tool.id === selectedTool);
  const SelectedComponent = selectedToolData?.component;

  return (
    <>
      <section id="tools" className="section-responsive bg-black relative overflow-hidden">
        <div className="container-responsive max-w-6xl relative z-10">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-900/20 backdrop-blur-sm border border-gray-700/30 rounded-full px-4 py-2 mb-6">
              <Calculator className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-100">Calculator</span>
            </div>
            <h2 className="font-bold tracking-tight text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
              Property Calculator
            </h2>
            <p className="text-gray-300/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Calculate stamp duty and registration fees instantly
            </p>
          </div>

          {/* Tools Grid - Flashcard Style */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-lg mx-auto lg:max-w-4xl lg:grid-cols-2">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="group cursor-pointer relative"
                onClick={() => openTool(tool.id)}
              >
                {/* Flashcard Container */}
                <div className="relative bg-black border-2 border-gray-700/30 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-gray-600/50 hover:shadow-2xl hover:shadow-gray-500/20 hover:-translate-y-1">
                  {/* Gradient Accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-gray-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-4 rounded-xl bg-gray-900/30 border border-gray-700/40">
                        <tool.icon className="w-7 h-7 text-gray-400" />
                      </div>
                      <Badge variant="secondary" className="bg-gray-900/50 text-gray-300 border-gray-700/50 px-3 py-1">
                        {tool.techBadge}
                      </Badge>
                    </div>

                    {/* Title & Description */}
                    <div className="mb-6">
                      <h3 className="font-bold text-xl text-white mb-3 group-hover:text-gray-100 transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-gray-300/80 text-base leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {tool.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="p-1 rounded-full bg-gray-900/40">
                            <CheckCircle className="w-4 h-4 text-gray-400" />
                          </div>
                          <span className="text-sm text-gray-200/90 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 rounded-xl shadow-lg shadow-gray-800/25 hover:shadow-gray-700/30 hover:shadow-xl transition-all duration-300 border-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        openTool(tool.id);
                      }}
                    >
                      <span className="mr-2">Calculate Now</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gray-500/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-gray-900/20 backdrop-blur-sm border border-gray-700/30 rounded-full px-6 py-3">
              <Shield className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-100 font-medium">Powered by Government Data & Machine Learning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Modal - Compact Card Style */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-[92vw] max-w-sm mx-auto bg-white rounded-2xl border-0 shadow-2xl p-0 overflow-hidden">
          <DialogHeader className="flex flex-row items-center justify-between px-5 py-4 border-b border-neutral-100">
            <DialogTitle className="text-base font-medium text-neutral-900">
              {selectedToolData?.title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeTool}
              className="h-8 w-8 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 rounded-full -mr-2"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          
          <div className="px-1 py-2">
            {SelectedComponent && <SelectedComponent />}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FreeToolsSection;