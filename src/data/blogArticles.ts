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
      "The digitization of property records through E-Khata represents a watershed moment in Bangalore's real estate administration. Since its mandatory implementation on September 30, 2024, property owners and developers have been navigating a fundamentally transformed documentation landscape.\n\nEffective July 1, 2025, BBMP has integrated E-Khata submission as a prerequisite for all online building plan approvals through the EoDB-OBPS platform. This integration streamlines verification processes while creating new compliance requirements that demand careful attention from all stakeholders.\n\nFor property buyers, the E-Khata system offers unprecedented transparency into ownership records, tax payment history, and property dimensions. However, the transition has not been without challenges—many older properties require extensive documentation updates before achieving compliance.\n\nIndustry experts recommend initiating E-Khata verification early in any property transaction to avoid delays during registration and loan processing stages.",
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
      "The Premium Floor Area Ratio scheme, introduced by BBMP in April 2025, fundamentally alters development economics across Bangalore's prime corridors. Under this framework, property owners and developers can acquire additional FAR to construct taller structures in designated zones.\n\nEligibility is determined by road width and locality classification, with the premium capped at 40% above base limits. The calculation methodology ties premium costs to property guidance values, ensuring transparent and predictable pricing mechanisms for all stakeholders.\n\nRooted in recent amendments to the Karnataka Town and Country Planning Act, this initiative generates significant revenue for urban infrastructure development. However, it substantially impacts project feasibility assessments and property valuations in affected areas.\n\nInvestors should carefully evaluate Premium FAR implications before acquiring properties in eligible zones, as the additional construction potential may significantly enhance—or complicate—development strategies depending on site-specific factors.",
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
      "Karnataka's Real Estate Regulatory Authority has implemented comprehensive reforms in 2025, establishing stringent standards for project registration, developer disclosure, and financial accountability across the state.\n\nAll developments exceeding 500 square meters now require mandatory registration, with developers obligated to deposit 70% of buyer funds in designated escrow accounts. Annual audit reports must be filed with the authority, creating unprecedented financial transparency in the sector.\n\nThe enhanced penalty framework addresses defaults and misrepresentation more effectively than previous regulations. Complaint resolution processes have been streamlined with target turnaround times of four months, significantly reducing buyer grievance timelines.\n\nThese measures strengthen buyer protection mechanisms considerably while establishing complete transparency in developer performance tracking through the online portal. Prospective buyers are advised to verify RERA registration status and review developer compliance history before any property commitment.",
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
      "Rigorous due diligence forms the foundation of sound property investment strategy. This systematic approach encompasses verification of ownership documentation, encumbrance certificate analysis, zoning regulation compliance, and assessment of developer credentials.\n\nTitle chain examination remains the most critical verification step. Ensure continuous ownership records spanning at least 30 years, with particular attention to inheritance transfers, partition deeds, and court settlements that may create future claims.\n\nEncumbrance certificates should be obtained for the maximum available period, with careful review of any registered mortgages, liens, or pending litigation. RERA registration verification confirms project legitimacy and provides access to approved plans and financial disclosures.\n\nBeyond documentation, physical verification of property boundaries, existing constructions, and access roads prevents disputes post-purchase. Engaging qualified professionals for legal opinion and technical assessment significantly reduces investment risk in Bangalore's complex real estate environment.",
    author: "",
    readTime: "60sec read",
    image: "/lovable-uploads/due-diligence-gandhi.png",
    category: "Investment Tips",
    publishedAt: "2023-12-28",
  },
];
