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
      info: {
        description: "Premium residential apartments in Bangalore's most sought-after neighborhoods.",
        highlights: ["Whitefield & Sarjapur", "Indiranagar & Koramangala", "Gated Communities"],
        priceRange: "₹1.2 Cr onwards",
      },
    },
    {
      title: "Working Space",
      image: workingSpaceImg,
      link: "/working-space",
      info: {
        description: "Exclusive commercial spaces and Grade-A offices for discerning businesses.",
        highlights: ["Outer Ring Road", "MG Road & UB City", "Tech Parks"],
        priceRange: "₹85L onwards",
      },
    },
    {
      title: "HNI Listings",
      image: hniListingsImg,
      link: "/hni-listings",
      info: {
        description: "Curated ultra-luxury properties for high net worth individuals.",
        highlights: ["Private Villas", "Penthouse Collection", "Estate Properties"],
        priceRange: "₹8 Cr onwards",
      },
    },
    {
      title: "Projects 2026",
      image: projects2026Img,
      link: "/projects-2026",
      info: {
        description: "Pre-launch opportunities in upcoming premium developments.",
        highlights: ["Early Bird Pricing", "Top Developers", "Prime Locations"],
        priceRange: "₹95L onwards",
      },
    },
  ];

  return (
    <section className="py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-2.5 justify-items-center max-w-[340px] mx-auto">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
              link={category.link}
              info={category.info}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
