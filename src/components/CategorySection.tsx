import CategoryCard from "./CategoryCard";
import apartmentsImg from "@/assets/apartments.jpeg";
import workingSpaceImg from "@/assets/working-space.jpeg";
import hniListingsImg from "@/assets/hni-listings.jpeg";
import projects2026Img from "@/assets/projects-2026.jpeg";

const CategorySection = () => {
  const categories = [
    {
      title: "Apartments",
      image: apartmentsImg,
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
    <section className="py-6 md:py-8 lg:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: compact 4-column grid */}
        <div className="grid grid-cols-4 gap-2.5 justify-items-center max-w-[340px] mx-auto md:hidden">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
              link={category.link}
              variant="mobile"
            />
          ))}
        </div>
        
        {/* Desktop: larger cards with proper spacing */}
        <div className="hidden md:flex justify-center gap-8 lg:gap-12">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
              link={category.link}
              variant="desktop"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
