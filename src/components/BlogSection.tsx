import { useEffect, useCallback, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import BlogArticleCard from "./BlogArticleCard";
import MobileVideoCard from "./MobileVideoCard";
import Autoplay from "embla-carousel-autoplay";
import { blogArticles } from "@/data/blogArticles";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";


const BlogSection = () => {
  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const autoplayRef = useState(() => 
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
    })
  )[0];

  const handleArticleClick = (article: any) => {
    navigate(`/blog/${article.id}`);
  };

  const allCards = [
    { type: 'video' as const, key: 'video' },
    ...blogArticles.map((article, idx) => ({ type: 'article' as const, article, key: `article-${idx}` }))
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Handle interaction - pause and resume after 3 seconds
    let resumeTimeout: NodeJS.Timeout;
    
    const handlePointerDown = () => {
      autoplayRef.stop();
      clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        autoplayRef.play();
      }, 3000);
    };

    const container = api.containerNode();
    container.addEventListener('pointerdown', handlePointerDown);

    return () => {
      container.removeEventListener('pointerdown', handlePointerDown);
      clearTimeout(resumeTimeout);
    };
  }, [api, autoplayRef]);

  const cardTransforms = useMemo(() => {
    return allCards.map((_, index) => {
      const distance = Math.abs(index - current);
      const direction = index - current;
      
      // Center card
      if (distance === 0) {
        return {
          scale: 1.1,
          rotateY: 0,
          opacity: 1,
          zIndex: 30,
        };
      }
      
      // Adjacent cards
      if (distance === 1) {
        return {
          scale: 0.95,
          rotateY: direction > 0 ? -15 : 15,
          opacity: 0.8,
          zIndex: 20,
        };
      }
      
      // Far cards
      return {
        scale: 0.85,
        rotateY: direction > 0 ? -25 : 25,
        opacity: 0.5,
        zIndex: 10,
      };
    });
  }, [current, allCards]);

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Depth Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Section Header */}
      <div className="text-center mb-6 md:mb-8 px-4 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Real Estate Insights
        </h2>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
          Stay informed with the latest trends, legal updates, and expert advice in Bangalore's property market
        </p>
      </div>

      <div className="relative" style={{ perspective: '2000px' }}>
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
            skipSnaps: false,
            dragFree: false,
          }}
          plugins={[autoplayRef]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {allCards.map((card, index) => (
              <CarouselItem 
                key={card.key} 
                className="pl-3 md:pl-4 basis-[55%] sm:basis-[40%] md:basis-[30%] lg:basis-[24%] xl:basis-[20%]"
              >
                <div
                  className="transition-all duration-300 ease-out"
                  style={{
                    transform: `
                      scale(${cardTransforms[index].scale})
                      rotateY(${cardTransforms[index].rotateY}deg)
                      translateZ(${cardTransforms[index].scale === 1.1 ? '50px' : '0px'})
                    `,
                    opacity: cardTransforms[index].opacity,
                    zIndex: cardTransforms[index].zIndex,
                    transformStyle: 'preserve-3d',
                    willChange: 'transform, opacity',
                  }}
                >
                  {card.type === 'video' ? (
                    <MobileVideoCard />
                  ) : (
                    <BlogArticleCard 
                      article={card.article} 
                      onArticleClick={handleArticleClick}
                      isCenter={cardTransforms[index].scale === 1.1}
                    />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default BlogSection;