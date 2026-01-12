import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  icon?: string;
  image?: string;
  link: string;
}

const CategoryCard = ({ title, icon, image, link }: CategoryCardProps) => {
  return (
    <Link to={link} className="flex flex-col items-center gap-1.5 md:gap-2.5 group">
      <div className="w-[76px] h-[76px] md:w-28 md:h-28 lg:w-36 lg:h-36 bg-neutral-100 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-neutral-200 transition-all overflow-hidden shadow-sm md:shadow-md">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
        ) : (
          <span className="text-2xl md:text-4xl">{icon}</span>
        )}
      </div>
      <p className="text-[10.5px] md:text-sm lg:text-base text-center text-neutral-900 font-normal md:font-medium px-0.5 leading-tight tracking-tight">
        {title}
      </p>
    </Link>
  );
};

export default CategoryCard;
