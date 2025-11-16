import { useState } from "react";
import { Clock, User } from "lucide-react";

interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
  publishedAt: string;
}

interface BlogArticleCardProps {
  article: BlogArticle;
  onArticleClick?: (article: BlogArticle) => void;
  isCenter?: boolean;
}

const BlogArticleCard = ({ article, onArticleClick, isCenter = false }: BlogArticleCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    if (onArticleClick) {
      onArticleClick(article);
    }
  };

  return (
    <div 
      className={`relative w-full aspect-[3/4] cursor-pointer transition-all duration-500 ${
        isCenter ? 'shadow-2xl' : 'shadow-xl'
      }`}
      onClick={handleClick}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Soft Shadow Layer */}
      <div className={`absolute -inset-2 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent rounded-2xl blur-xl transition-opacity duration-500 ${
        isCenter ? 'opacity-100' : 'opacity-0'
      }`} />
      
      {/* Main Card */}
      <div className="relative w-full h-full rounded-xl overflow-hidden group bg-card border border-border/50">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
          {!imageError && (
            <img 
              src={article.image} 
              alt={article.title}
              loading="eager"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover transition-all duration-700 ${
                imageLoaded ? 'opacity-100 group-hover:scale-110' : 'opacity-0'
              }`}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-3 z-10">
          {/* Category Badge */}
          <div className="mb-2">
            <span className="inline-block px-2 py-0.5 bg-primary/90 backdrop-blur-sm text-primary-foreground text-[10px] font-semibold rounded-full border border-primary/20">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xs md:text-sm font-bold text-white mb-1.5 leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-white/80 text-[10px] leading-relaxed line-clamp-2 mb-2">
            {article.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-2 text-white/60 text-[9px]">
            <div className="flex items-center gap-1">
              <User className="w-2.5 h-2.5" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-2.5 h-2.5" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  );
};

export default BlogArticleCard;