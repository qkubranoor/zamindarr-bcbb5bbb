import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  const categories = [
    {
      title: "Projects 2026",
      icon: "🏗️",
      link: "/projects-2026",
    },
    {
      title: "HNI Listings",
      icon: "💎",
      link: "/hni-listings",
    },
    {
      title: "Distressed Assets",
      icon: "🏢",
      link: "/distressed-assets",
    },
    {
      title: "Apartments",
      icon: "🏘️",
      link: "/apartments",
    },
  ];

  return (
    <section className="py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-2 justify-items-center max-w-2xl mx-auto">
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
