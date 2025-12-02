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
    <section className="py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-2 justify-items-center max-w-xs mx-auto">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
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
