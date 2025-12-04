import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";

interface CategoryCardProps {
  title: string;
  icon?: string;
  image?: string;
  link: string;
  info?: {
    description: string;
    highlights: string[];
    priceRange?: string;
  };
}

const CategoryCard = ({ title, icon, image, link, info }: CategoryCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Auto-close popover on scroll (mobile UX)
  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => setIsOpen(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <div className="relative flex flex-col items-center gap-1.5 group">
      <Link to={link} className="w-[76px] h-[76px] bg-neutral-100 rounded-xl flex items-center justify-center group-hover:bg-neutral-200 transition-all overflow-hidden shadow-sm">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
        ) : (
          <span className="text-2xl">{icon}</span>
        )}
      </Link>
      
      {/* Info dot */}
      {info && (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <button 
              className="absolute -top-1 -right-1 w-5 h-5 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md border border-slate-200/60 hover:bg-white hover:scale-110 transition-all z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <Info className="w-3 h-3 text-slate-500" />
            </button>
          </PopoverTrigger>
          <PopoverContent 
            side="top" 
            align="center"
            className="w-64 p-0 border-0 shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-xl overflow-hidden"
          >
            <div className="bg-gradient-to-br from-slate-50 to-white p-4">
              {/* Header */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-4 bg-gradient-to-b from-amber-400 to-amber-500 rounded-full" />
                <h4 className="text-sm font-medium text-slate-800">{title}</h4>
              </div>
              
              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {info.description}
              </p>
              
              {/* Highlights */}
              <div className="space-y-1.5 mb-3">
                {info.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-amber-400 rounded-full" />
                    <span className="text-[11px] text-slate-600">{highlight}</span>
                  </div>
                ))}
              </div>
              
              {/* Price Range */}
              {info.priceRange && (
                <div className="pt-2 border-t border-slate-100">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wide">Starting from</p>
                  <p className="text-sm font-medium text-slate-800">{info.priceRange}</p>
                </div>
              )}
              
              {/* View More Link */}
              <Link 
                to={link}
                className="mt-3 block text-center text-[11px] text-amber-600 hover:text-amber-700 font-medium"
                onClick={() => setIsOpen(false)}
              >
                View Details →
              </Link>
            </div>
          </PopoverContent>
        </Popover>
      )}
      
      <p className="text-[10.5px] text-center text-neutral-900 font-normal px-0.5 leading-tight tracking-tight">
        {title}
      </p>
    </div>
  );
};

export default CategoryCard;
