import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  icon: string;
  link: string;
}

const CategoryCard = ({ title, icon, link }: CategoryCardProps) => {
  return (
    <Link to={link} className="flex flex-col items-center gap-2 group">
      <div className="w-24 h-24 bg-neutral-100 rounded-2xl flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
        <span className="text-3xl">{icon}</span>
      </div>
      <p className="text-xs text-center text-neutral-700 font-medium px-1">
        {title}
      </p>
    </Link>
  );
};

export default CategoryCard;
