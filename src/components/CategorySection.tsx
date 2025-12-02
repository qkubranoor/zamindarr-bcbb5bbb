import CategoryCard from "./CategoryCard";
import workingSpaceImg from "@/assets/working-space.png";
import hniListingsImg from "@/assets/hni-listings.png";
import projects2026Img from "@/assets/projects-2026.png";

const CategorySection = () => {
  const categories = [
    {
      title: "Apartments",
      icon: "🏘️",
      link: "/apartments",
    },
    {
      title: "Working Space",
      image: workingSpaceImg,
      link: "/working-space",
    },
    {
      title: "HNI Listings",
      image: hniListingsImg,
      link: "/hni-listings",
    },
    {
      title: "Projects 2026",
      image: projects2026Img,
      link: "/projects-2026",
    },
  ];

  return (
    <section className="py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-1.5 justify-items-center max-w-xs mx-auto">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              icon={category.icon}
              image={category.image}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
