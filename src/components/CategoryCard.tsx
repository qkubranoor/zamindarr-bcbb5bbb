import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  icon?: string;
  image?: string;
  link: string;
}

const CategoryCard = ({ title, icon, image, link }: CategoryCardProps) => {
  return (
    <Link to={link} className="flex flex-col items-center gap-2 group">
      <div className="w-20 h-20 bg-neutral-100 rounded-xl flex items-center justify-center group-hover:bg-neutral-200 transition-all overflow-hidden shadow-sm">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
        ) : (
          <span className="text-2xl">{icon}</span>
        )}
      </div>
      <p className="text-[11px] text-center text-neutral-900 font-normal px-1 leading-tight tracking-tight">
        {title}
      </p>
    </Link>
  );
};

export default CategoryCard;
