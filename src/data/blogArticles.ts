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
      "The digitization of property records through E-Khata represents a watershed moment in Bangalore's real estate administration. Since its mandatory implementation on September 30, 2024, property owners and developers have been navigating a fundamentally transformed documentation landscape. Effective July 1, 2025, BBMP has integrated E-Khata submission as a prerequisite for all online building plan approvals through the EoDB-OBPS platform. This integration streamlines verification processes while creating new compliance requirements that demand careful attention from all stakeholders in property transactions.",
    author: "",
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
      "The Premium Floor Area Ratio scheme, introduced by BBMP in April 2025, fundamentally alters development economics across Bangalore's prime corridors. Under this framework, property owners and developers can acquire additional FAR to construct taller structures in designated zones, with eligibility determined by road width and locality classification. The premium is capped at 40% above base limits and calculated against property guidance values, ensuring transparent pricing mechanisms. Rooted in recent amendments to the Karnataka Town and Country Planning Act, this initiative generates revenue for urban infrastructure while significantly impacting project feasibility, property valuations, and long-term urban planning considerations.",
    author: "",
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
      "Karnataka's Real Estate Regulatory Authority has implemented comprehensive reforms in 2025, establishing stringent standards for project registration, developer disclosure, and financial accountability. All developments exceeding 500 square meters now require mandatory registration, with developers obligated to deposit 70% of buyer funds in designated escrow accounts and submit annual audit reports. The enhanced penalty framework addresses defaults and misrepresentation more effectively, while the streamlined complaint resolution process targets four-month turnaround times. These measures significantly strengthen buyer protection mechanisms and establish complete transparency in developer performance tracking through the online portal.",
    author: "",
    readTime: "60sec read",
    image: "/lovable-uploads/rera-government-building.jpeg",
    category: "Regulations",
    publishedAt: "2024-01-05",
  },
  {
    id: "4",
    title: "Due Diligence Checklist: Avoiding Property Investment Pitfalls",
    excerpt:
      "A comprehensive framework for thorough verification before making any property investment decision in Bangalore.",
    content:
      "Rigorous due diligence forms the foundation of sound property investment strategy. This systematic approach encompasses verification of ownership documentation, encumbrance certificate analysis, zoning regulation compliance, and assessment of developer credentials and track record. Each verification stage addresses specific risk factors prevalent in Bangalore's complex real estate environment. From title chain examination to RERA registration verification, understanding these critical checkpoints enables informed decision-making and mitigates exposure to legal disputes, financial losses, and project delays that continue to affect unprepared investors in the market.",
    author: "",
    readTime: "60sec read",
    image: "/lovable-uploads/due-diligence-gandhi.png",
    category: "Investment Tips",
    publishedAt: "2023-12-28",
  },
];
