import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  const categories = [
    {
      title: "Apartments",
      icon: "🏘️",
      link: "/apartments",
    },
    {
      title: "Working Space",
      icon: "💼",
      link: "/working-space",
    },
    {
      title: "HNI Listings",
      icon: "💎",
      link: "/hni-listings",
    },
    {
      title: "Projects 2026",
      icon: "🏗️",
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
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
