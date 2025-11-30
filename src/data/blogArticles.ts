export type BlogArticle = {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
  publishedAt: string;
};

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    title: "Digital Revolution or Documentation Nightmare?",
    excerpt: "E-Khata's Mandatory Implementation Transforms Bangalore Property Transactions",
    content:
      "The digitization of property records through e-Khata has fundamentally transformed Bangalore's real estate landscape since its mandatory implementation on September 30, 2024. From July 1, 2025, BBMP has made e-Khata submission mandatory for all online building plan approvals, integrating the system with the EoDB-OBPS (Ease of Doing Business–Online Building Plan Approval System) platform.",
    author: "Priya Sharma",
    readTime: "60sec read",
    image: "/lovable-uploads/documentation-nightmare-code.jpeg",
    category: "Market Trends",
    publishedAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Premium FAR Revolution",
    excerpt:
      "Karnataka's New Policy Redefines Bangalore's Skyline and Investment Strategy",
    content:
      "The Premium Floor Area Ratio (FAR) scheme, launched by BBMP in April 2025, lets property owners and developers buy extra FAR to construct taller buildings in select Bengaluru zones. FAR eligibility varies by road width and locality, capped at 40% above base limits and linked to property guidance values for transparent pricing. This initiative—rooted in new amendments to the Karnataka Town and Country Planning Act—aims to fund urban infrastructure but raises project costs, impacts property valuations, and fuels debate over civic resource strain and sustainable planning.",
    author: "Rajesh Kumar",
    readTime: "60sec read",
    image: "/lovable-uploads/far-construction-sunset.jpeg",
    category: "Policy Update",
    publishedAt: "2024-01-10",
  },
  {
    id: "3",
    title: "RERA 2025: Buyers First",
    excerpt:
      "New Compliance Rules Transform Karnataka's Real Estate Project Registration",
    content:
      "With strict new rules in 2025, Karnataka's Real Estate Regulatory Authority (RERA) has made project registration, developer disclosure, and financial transparency mandatory for developments over 500 square meters. Developers must deposit 70% of buyer funds in escrow, file annual audit reports, and face heavier penalties for default or misrepresentation. The system now resolves complaints within four months, strengthens buyer protection, and makes developer performance fully trackable online—though frequent updates keep the industry alert.",
    author: "Anita Reddy",
    readTime: "60sec read",
    image: "/lovable-uploads/rera-government-building.jpeg",
    category: "Regulations",
    publishedAt: "2024-01-05",
  },
  {
    id: "5",
    title: "Due Diligence Checklist: Avoiding Property Investment Pitfalls",
    excerpt:
      "A comprehensive checklist to ensure thorough due diligence before making any property investment decision in Bangalore.",
    content:
      "Due diligence is the cornerstone of any successful property investment. This comprehensive checklist covers everything from verifying ownership documents, checking for encumbrances, understanding zoning regulations, to assessing the builder's track record. We break down each step to help you make informed decisions and avoid costly mistakes in Bangalore's complex real estate market.",
    author: "Meera Patel",
    readTime: "7 min read",
    image: "/lovable-uploads/due-diligence-gandhi.png",
    category: "Investment Tips",
    publishedAt: "2023-12-28",
  },
];
