import { useEffect, useRef, useState } from "react";
import heroBangalore from "@/assets/hero-bangalore.jpg";
const MobileVideoCard = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [autoplayFailed, setAutoplayFailed] = useState(false);
  const attemptedRef = useRef(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isTouch) {
      setAutoplayFailed(true);
      return;
    }

    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    const saveData = (navigator as any)?.connection?.saveData;

    const playVideo = async () => {
      if (reducedMotion || saveData) {
        setAutoplayFailed(true);
        return;
      }
      try {
        // Defer loading until we actually try to play
        video.load();
        // avoid repeated attempts
        attemptedRef.current = true;
        await video.play();
        setAutoplayFailed(false);
      } catch (error) {
        setAutoplayFailed(true);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!attemptedRef.current) playVideo();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [isTouch]);

  return (
    <div 
      className="relative w-full aspect-[3/4] cursor-pointer transition-all duration-300"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative bg-black/90 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-white/20 w-full h-full overflow-hidden">
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            autoPlay={!isTouch}
            preload={isTouch ? "none" : "metadata"}
            poster={heroBangalore}
            className="w-full h-full object-cover"
            controls={autoplayFailed}
            onError={() => setAutoplayFailed(true)}
          >
            <source src="/assets/action.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
          {/* Play overlay when autoplay fails */}
          {autoplayFailed && (
            <button
              onClick={() => videoRef.current?.play().then(() => setAutoplayFailed(false)).catch(() => {})}
              className="absolute inset-0 z-20 flex items-center justify-center"
              aria-label="Play video"
            >
              <span className="rounded-full bg-background/70 text-foreground px-4 py-2 border border-border/30">
                Tap to Play
              </span>
            </button>
          )}
          {/* Text Overlay */}
          <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center bg-gradient-to-t from-black/60 via-transparent to-black/30">
            <h3 className="text-white text-xs md:text-sm font-bold text-center px-4 py-2 drop-shadow-lg">
              Building for a Futuristic Bangalore
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileVideoCard;