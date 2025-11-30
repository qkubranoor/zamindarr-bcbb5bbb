import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StampDutyCalculator from "./StampDutyCalculator";
import RegistrationFeeCalculator from "./RegistrationFeeCalculator";
import LoginButton from "./LoginButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Desktop Navigation - Left */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link 
                to="/documents"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-normal"
              >
                Documents
              </Link>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-normal"
              >
                Services
              </button>
            </nav>
          </div>

          {/* Logo - Center */}
          <div className="flex items-center justify-center flex-1 md:flex-none">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2 group"
            >
              <img 
                src="/logo.png" 
                alt="Zamindar Logo" 
                className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-105 object-contain"
              />
              <span className="text-slate-900 text-lg md:text-xl font-bold tracking-tight group-hover:text-slate-700 transition-colors">
                Zamindar
              </span>
            </button>
          </div>

          {/* Desktop Navigation - Right */}
          <div className="hidden md:flex items-center space-x-4">
            <Dialog open={isToolsOpen} onOpenChange={setIsToolsOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors text-sm font-normal h-auto px-3 py-2"
                >
                  Calculator
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-xl font-display">Property Calculator</DialogTitle>
                </DialogHeader>
                <Tabs defaultValue="stamp-duty" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="stamp-duty">Stamp Duty</TabsTrigger>
                    <TabsTrigger value="registration-fee">Registration Fee</TabsTrigger>
                  </TabsList>
                  <TabsContent value="stamp-duty">
                    <StampDutyCalculator />
                  </TabsContent>
                  <TabsContent value="registration-fee">
                    <RegistrationFeeCalculator />
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
            <LoginButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-slate-100 rounded-full transition-all duration-200 hover:scale-105"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-slate-900" />
            ) : (
              <Menu className="w-5 h-5 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Modern Overlay Style */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="container-responsive py-6">
              {/* Dashboard Section */}
              <div className="mb-8">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-4">
                  Quick Access
                </h3>
                <div className="flex gap-4 px-4 overflow-x-auto scrollbar-hide pb-2">
                  {/* Account Card */}
                  <a href="#account" className="group relative flex-shrink-0 w-[140px]">
                    <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:border-slate-300 hover:from-white hover:to-slate-50">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="relative">
                          <div className="absolute inset-0 bg-slate-900 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity"></div>
                          <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 mb-1">Account</div>
                          <div className="text-xs text-slate-500 leading-tight">Manage profile</div>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* Orders Card */}
                  <a href="#orders" className="group relative flex-shrink-0 w-[140px]">
                    <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:border-blue-300 hover:from-white hover:to-blue-50">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="relative">
                          <div className="absolute inset-0 bg-blue-600 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity"></div>
                          <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 mb-1">Orders</div>
                          <div className="text-xs text-slate-500 leading-tight">Track progress</div>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* Locker Card */}
                  <a href="#locker" className="group relative flex-shrink-0 w-[140px]">
                    <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:border-emerald-300 hover:from-white hover:to-emerald-50">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="relative">
                          <div className="absolute inset-0 bg-emerald-600 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity"></div>
                          <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 mb-1">Locker</div>
                          <div className="text-xs text-slate-500 leading-tight">Secure storage</div>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* Support Card */}
                  <a href="#support" className="group relative flex-shrink-0 w-[140px]">
                    <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:border-purple-300 hover:from-white hover:to-purple-50">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="relative">
                          <div className="absolute inset-0 bg-purple-600 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity"></div>
                          <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 mb-1">Support</div>
                          <div className="text-xs text-slate-500 leading-tight">Get help</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Navigation Section */}
              <div>
                <nav className="flex flex-col space-y-1 px-4">
                  <Dialog open={isToolsOpen} onOpenChange={setIsToolsOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="flex items-center justify-start px-3 py-2.5 text-sm font-normal text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-200 h-auto"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Calculator
                      </Button>
                    </DialogTrigger>
              <DialogContent className="max-w-[95vw] sm:max-w-md max-h-[85vh] overflow-y-auto p-4">
                <DialogHeader>
                  <DialogTitle className="text-base font-display">Property Calculators</DialogTitle>
                </DialogHeader>
                <Tabs defaultValue="stamp-duty" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 gap-1 h-auto p-1">
                    <TabsTrigger value="stamp-duty" className="text-xs py-2">Stamp Duty</TabsTrigger>
                    <TabsTrigger value="registration-fee" className="text-xs py-2">Registration Fee</TabsTrigger>
                  </TabsList>
                  <TabsContent value="stamp-duty" className="mt-2">
                    <div className="scale-95 origin-top">
                      <StampDutyCalculator />
                    </div>
                  </TabsContent>
                  <TabsContent value="registration-fee" className="mt-2">
                    <div className="scale-95 origin-top">
                      <RegistrationFeeCalculator />
                    </div>
                  </TabsContent>
                </Tabs>
              </DialogContent>
                  </Dialog>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="flex items-center px-3 py-2.5 text-sm font-normal text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-200 text-left"
                  >
                    Contact Us
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="flex items-center px-3 py-2.5 text-sm font-normal text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-200 text-left"
                  >
                    Services
                  </button>
                  <a 
                    href="#careers"
                    className="flex items-center px-3 py-2.5 text-sm font-normal text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-200 text-left"
                  >
                    Careers
                  </a>
                  <a 
                    href="#resources"
                    className="flex items-center px-3 py-2.5 text-sm font-normal text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-200 text-left"
                  >
                    Resource Hub
                  </a>
                  <a 
                    href="#team"
                    className="flex items-center px-3 py-2.5 text-sm font-normal text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-200 text-left"
                  >
                    Team
                  </a>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
