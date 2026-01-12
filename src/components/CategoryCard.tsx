import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  icon?: string;
  image?: string;
  link: string;
  variant?: "mobile" | "desktop";
}

const CategoryCard = ({ title, icon, image, link, variant = "mobile" }: CategoryCardProps) => {
  const isMobile = variant === "mobile";
  
  return (
    <Link 
      to={link} 
      className={`flex flex-col items-center group ${
        isMobile ? "gap-1.5" : "gap-3"
      }`}
    >
      <div 
        className={`bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-all duration-300 overflow-hidden ${
          isMobile 
            ? "w-[76px] h-[76px] rounded-xl shadow-sm" 
            : "w-32 h-32 lg:w-40 lg:h-40 rounded-2xl shadow-md group-hover:shadow-xl group-hover:-translate-y-1"
        }`}
      >
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        ) : (
          <span className={isMobile ? "text-2xl" : "text-4xl"}>{icon}</span>
        )}
      </div>
      <p 
        className={`text-center text-neutral-900 leading-tight tracking-tight ${
          isMobile 
            ? "text-[10.5px] font-normal px-0.5" 
            : "text-sm lg:text-base font-medium"
        }`}
      >
        {title}
      </p>
    </Link>
  );
};

export default CategoryCard;
