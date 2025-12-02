import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  icon: string;
  link: string;
}

const CategoryCard = ({ title, icon, link }: CategoryCardProps) => {
  return (
    <Link to={link} className="flex flex-col items-center gap-1.5 group">
      <div className="w-16 h-16 bg-neutral-100 rounded-xl flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-[10px] text-center text-neutral-800 font-medium px-0.5 leading-tight tracking-wider uppercase font-sans">
        {title}
      </p>
    </Link>
  );
};

export default CategoryCard;
