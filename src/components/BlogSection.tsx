import { useState } from "react";
import BlogArticleCard from "./BlogArticleCard";
import MobileVideoCard from "./MobileVideoCard";
import { blogArticles, BlogArticle } from "@/data/blogArticles";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Clock, User, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const BlogSection = () => {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  const handleArticleClick = (article: BlogArticle) => {
    setSelectedArticle(article);
  };

  const closeDialog = () => {
    setSelectedArticle(null);
  };

  return (
    <section className="py-8 md:py-16 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />
      
      {/* Section Header */}
      <div className="text-center mb-6 md:mb-10 px-4 relative z-10">
        <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2">
          Real Estate Insights
        </h2>
        <p className="text-xs md:text-base text-muted-foreground max-w-xl mx-auto">
          Stay informed with the latest trends and expert advice
        </p>
      </div>

      {/* Mobile View - Compact Grid */}
      <div className="md:hidden px-4 relative z-10">
        <div className="grid grid-cols-2 gap-3">
          {/* Video Card - Smaller */}
          <div className="aspect-[3/4]">
            <MobileVideoCard />
          </div>
          {/* Article Cards */}
          {blogArticles.slice(0, 3).map((article) => (
            <div key={article.id} className="aspect-[3/4]">
              <BlogArticleCard 
                article={article} 
                onArticleClick={handleArticleClick}
                isCenter={false}
              />
            </div>
          ))}
        </div>
        {/* View More Link */}
        <div className="text-center mt-4">
          <button 
            onClick={() => setSelectedArticle(blogArticles[0])}
            className="text-xs text-primary font-medium hover:underline"
          >
            View all insights →
          </button>
        </div>
      </div>

      {/* Desktop View - Horizontal Scroll */}
      <div className="hidden md:block px-4 relative z-10">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide max-w-6xl mx-auto justify-center">
          <div className="w-56 flex-shrink-0 aspect-[3/4]">
            <MobileVideoCard />
          </div>
          {blogArticles.map((article) => (
            <div key={article.id} className="w-56 flex-shrink-0 aspect-[3/4]">
              <BlogArticleCard 
                article={article} 
                onArticleClick={handleArticleClick}
                isCenter={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Article Pop-up Dialog */}
      <Dialog open={!!selectedArticle} onOpenChange={(open) => !open && closeDialog()}>
        <DialogContent className="max-w-lg mx-4 p-0 overflow-hidden bg-card border-border/50 max-h-[85vh]">
          {selectedArticle && (
            <>
              {/* Article Image Header */}
              <div className="relative h-40 md:h-48 w-full">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="inline-block px-2 py-0.5 bg-primary text-primary-foreground text-[10px] font-semibold rounded-full mb-2">
                    {selectedArticle.category}
                  </span>
                  <DialogHeader>
                    <DialogTitle className="text-white text-base md:text-lg font-bold leading-tight">
                      {selectedArticle.title}
                    </DialogTitle>
                  </DialogHeader>
                </div>
              </div>

              {/* Article Content */}
              <ScrollArea className="max-h-[40vh]">
                <div className="p-4 md:p-5">
                  {/* Meta Info */}
                  <div className="flex items-center gap-3 text-muted-foreground text-xs mb-4 pb-3 border-b border-border/50">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      <span>{selectedArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{selectedArticle.readTime}</span>
                    </div>
                  </div>

                  {/* Article Text */}
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <p className="text-foreground/90 text-sm leading-relaxed">
                      {selectedArticle.content || selectedArticle.excerpt}
                    </p>
                  </div>
                </div>
              </ScrollArea>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BlogSection;
