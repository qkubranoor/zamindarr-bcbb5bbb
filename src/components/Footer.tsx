import { Building2, Mail, Phone, MapPin, ExternalLink, Instagram, Linkedin } from "lucide-react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer id="contact" className="bg-slate-950 border-t border-white/10">
      <div className="container-responsive py-8 sm:py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-3">
              <Building2 className="w-5 h-5 text-primary mr-2" />
              <h3 className="text-base font-bold text-white">Zamindar</h3>
            </div>
            <p className="text-xs text-slate-400 mb-4 max-w-md">
              Professional property due diligence services in Bangalore, Karnataka.
            </p>
            
            {/* Contact Info - Compact */}
            <div className="space-y-1.5 text-sm text-slate-400">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-slate-500" />
                <span className="text-xs">#273 2nd Main, 1st Block, R.T Nagar, Bangalore - 560032</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-slate-500" />
                <span className="text-xs">+91 9632840858</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0 text-slate-500" />
                <span className="text-xs">admin@zamindarr.com</span>
              </div>
            </div>
          </div>
          
          {/* Dashboard Column */}
          <div>
            <h4 className="text-xs font-semibold text-white mb-3">Dashboard</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#careers" className="group relative inline-block hover:text-white transition-all duration-300">
                  <span className="relative z-10">Careers</span>
                  <span className="absolute inset-0 -inset-x-2 -inset-y-1 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 shadow-[0_8px_30px_rgb(0,0,0,0.5)] group-hover:shadow-[0_20px_60px_rgb(0,0,0,0.7)]" style={{ transform: 'translateZ(0)' }}></span>
                </a>
              </li>
              <li>
                <a href="#resources" className="group relative inline-block hover:text-white transition-all duration-300">
                  <span className="relative z-10">Resource Hub</span>
                  <span className="absolute inset-0 -inset-x-2 -inset-y-1 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 shadow-[0_8px_30px_rgb(0,0,0,0.5)] group-hover:shadow-[0_20px_60px_rgb(0,0,0,0.7)]" style={{ transform: 'translateZ(0)' }}></span>
                </a>
              </li>
              <li>
                <a href="#services" className="group relative inline-block hover:text-white transition-all duration-300">
                  <span className="relative z-10">Services</span>
                  <span className="absolute inset-0 -inset-x-2 -inset-y-1 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 shadow-[0_8px_30px_rgb(0,0,0,0.5)] group-hover:shadow-[0_20px_60px_rgb(0,0,0,0.7)]" style={{ transform: 'translateZ(0)' }}></span>
                </a>
              </li>
              <li>
                <a href="#team" className="group relative inline-block hover:text-white transition-all duration-300">
                  <span className="relative z-10">Team</span>
                  <span className="absolute inset-0 -inset-x-2 -inset-y-1 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 shadow-[0_8px_30px_rgb(0,0,0,0.5)] group-hover:shadow-[0_20px_60px_rgb(0,0,0,0.7)]" style={{ transform: 'translateZ(0)' }}></span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h4 className="text-xs font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="/refund-policy" className="hover:text-white transition-colors">Refunds</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-500">© {currentYear} Zamindar. All rights reserved.</p>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a 
              href="https://www.instagram.com/zamindarr.co?igsh=MWJzMHBwMWdpYnhkbg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/zamindarco/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
