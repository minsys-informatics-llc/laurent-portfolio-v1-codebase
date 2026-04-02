import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "motion/react";

type CaseStudy = {
  id: number;
  category: string;
  year: string;
  title: string;
  headline: string;
  headlineSub: string;
  description: string;
  imageUrl: string;
};

type AchievementsCarouselProps = {
  caseStudies: CaseStudy[];
  expandedCard: number | null;
  onToggleExpand: (id: number) => void;
};

export function AchievementsCarousel({
  caseStudies,
  expandedCard,
  onToggleExpand,
}: AchievementsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const INTERVAL_MS = 6000;
  const PROGRESS_TICK_MS = 50;

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, caseStudies.length - cardsPerView);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(Math.min(index, maxIndex));
      setProgress(0);
    },
    [maxIndex],
  );

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setProgress(0);
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setProgress(0);
  }, [maxIndex]);

  // Auto-play: pause on hover OR when a dashboard is expanded
  const shouldPause = isPaused || expandedCard !== null;

  useEffect(() => {
    if (shouldPause) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      return;
    }

    progressRef.current = setInterval(() => {
      setProgress((prev) => Math.min(prev + PROGRESS_TICK_MS / INTERVAL_MS * 100, 100));
    }, PROGRESS_TICK_MS);

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      setProgress(0);
    }, INTERVAL_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [shouldPause, maxIndex]);

  const gap = 24; // 1.5rem (gap-6)
  const xOffset =
    cardsPerView === 1
      ? `calc(-${activeIndex * 100}% - ${activeIndex * gap}px)`
      : `calc(-${activeIndex * 50}% - ${activeIndex * (gap / 2)}px)`;

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setProgress(0);
      }}
    >
      {/* Card container */}
      <div className="relative max-w-7xl mx-auto overflow-hidden px-4 md:px-12 py-4">
        {/* Left arrow */}
        <button
          onClick={goPrev}
          aria-label="Previous achievement"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant/30 shadow-[0px_4px_12px_rgba(19,27,46,0.06)] flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-tertiary-fixed-dim/40 transition-all duration-300 cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">chevron_left</span>
        </button>

        {/* Right arrow */}
        <button
          onClick={goNext}
          aria-label="Next achievement"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant/30 shadow-[0px_4px_12px_rgba(19,27,46,0.06)] flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-tertiary-fixed-dim/40 transition-all duration-300 cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">chevron_right</span>
        </button>

        {/* Animated track */}
        <motion.div
          className="flex gap-6 relative"
          animate={{ x: xOffset }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {caseStudies.map((study, idx) => {
            // For continuous sliding, progress bar should only animate on the "active" visual cards.
            const isActive =
              idx >= activeIndex && idx < activeIndex + cardsPerView;

            return (
              <div
                key={study.id}
                className={`flex-none w-full md:w-[calc(50%-12px)] bg-surface-container-lowest p-6 rounded-xl transition-shadow duration-300 shadow-[0px_12px_32px_rgba(19,27,46,0.04)] border ${expandedCard === study.id
                  ? "border-tertiary-fixed-dim/60 shadow-[0px_12px_32px_rgba(19,27,46,0.08)]"
                  : "border-transparent"
                  }`}
              >
                {/* Key metric focal point */}
                <div className="relative rounded-xl overflow-hidden mb-6 h-44">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                    <div
                      className="text-center px-6 py-4 rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.10)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.22)",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
                      }}
                    >
                      <div className="font-headline text-3xl text-white leading-none mb-1 drop-shadow-sm">
                        {study.headline}
                      </div>
                      <div className="font-label text-[10px] text-white/80 uppercase tracking-widest font-bold mt-2">
                        {study.headlineSub}
                      </div>
                    </div>
                  </div>
                </div>

                <span className="font-label text-[10px] text-tertiary-fixed-dim uppercase tracking-widest font-bold">
                  {study.category} &bull; {study.year}
                </span>
                <h3 className="font-headline text-2xl text-primary mt-2 mb-3">{study.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-body">
                  {study.description}
                </p>

                {/* CTA — toggles the reveal panel */}
                <button
                  onClick={() => onToggleExpand(study.id)}
                  aria-expanded={expandedCard === study.id}
                  aria-controls={`insight-panel-${study.id}`}
                  className="flex items-center text-primary group cursor-pointer bg-transparent border-none p-0"
                >
                  <span className="text-xs font-bold font-label uppercase tracking-widest group-hover:mr-2 transition-all">
                    {expandedCard === study.id ? "Close Insight" : "Read Insight"}
                  </span>
                  <span
                    className={`material-symbols-outlined text-sm ml-2 transition-transform duration-300 ${expandedCard === study.id ? "rotate-90" : ""
                      }`}
                  >
                    arrow_forward
                  </span>
                </button>

                {/* Progress bar */}
                <div className="mt-4 h-0.5 w-full bg-outline-variant/20 rounded-full overflow-hidden relative">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-tertiary-fixed-dim/50 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: isActive ? `${progress}%` : "0%" }}
                    transition={{
                      duration: isActive && progress > 0 ? PROGRESS_TICK_MS / 1000 : 0,
                      ease: "linear",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2.5 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 cursor-pointer border-none ${i === activeIndex
              ? "w-8 h-2 bg-tertiary-fixed-dim"
              : "w-2 h-2 bg-outline-variant/40 hover:bg-outline-variant/70"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
