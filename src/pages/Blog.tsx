import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { blogArticles } from "@/data/blogArticles";

const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const article = blogArticles.find(a => a.id === id);
  const suggestedArticles = blogArticles.filter(a => a.id !== id).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Button onClick={() => navigate("/")}>Go back home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-4 md:py-8 max-w-3xl">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-4 -ml-2"
          size="sm"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        {/* Article Header */}
        <article className="mb-8 md:mb-12">
          <div className="mb-4 md:mb-6">
            <span className="inline-block text-[10px] md:text-xs font-semibold text-primary bg-primary/10 px-2 md:px-3 py-1 md:py-1.5 rounded-full uppercase tracking-wide mb-3 md:mb-4">
              {article.category}
            </span>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <User className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm">{article.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm">{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Image */}
          <div className="mb-6 md:mb-8 rounded-lg overflow-hidden h-48 md:h-64">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-sm md:prose-base max-w-none">
            <p className="text-foreground text-sm md:text-base leading-relaxed whitespace-pre-line">
              {article.content}
            </p>
          </div>
        </article>

        {/* Suggested Articles */}
        <section className="border-t border-border pt-8 md:pt-12">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
            Continue Reading
          </h2>
          
          <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {suggestedArticles.map((suggested) => (
              <Card 
                key={suggested.id}
                className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
                onClick={() => navigate(`/blog/${suggested.id}`)}
              >
                <div className="relative h-32 md:h-40 overflow-hidden">
                  <img 
                    src={suggested.image} 
                    alt={suggested.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-3 md:p-4">
                  <span className="text-[10px] md:text-xs font-semibold text-primary uppercase tracking-wide">
                    {suggested.category}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-foreground mt-1.5 md:mt-2 mb-1.5 md:mb-2 line-clamp-2">
                    {suggested.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                    {suggested.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
