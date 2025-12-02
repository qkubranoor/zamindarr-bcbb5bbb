import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  icon?: string;
  image?: string;
  link: string;
}

const CategoryCard = ({ title, icon, image, link }: CategoryCardProps) => {
  return (
    <Link to={link} className="flex flex-col items-center gap-1.5 group">
      <div className="w-16 h-16 bg-neutral-100 rounded-xl flex items-center justify-center group-hover:bg-neutral-200 transition-colors overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-2xl">{icon}</span>
        )}
      </div>
      <p className="text-[10px] text-center text-neutral-900 font-normal px-0.5 leading-tight tracking-tight">
        {title}
      </p>
    </Link>
  );
};

export default CategoryCard;
