import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import BNBBadge from "./BNBBadge";
import SlideProgress from "./SlideProgress";
import HeroSlide from "./slides/HeroSlide";
import ProblemSlide from "./slides/ProblemSlide";
import SolutionSlide from "./slides/SolutionSlide";
import EscrowSlide from "./slides/EscrowSlide";
import BNBChainSlide from "./slides/BNBChainSlide";
import TechTeamSlide from "./slides/TechTeamSlide";
import ThankYouSlide from "./slides/ThankYouSlide";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  HeroSlide,
  ProblemSlide,
  SolutionSlide,
  EscrowSlide,
  BNBChainSlide,
  TechTeamSlide,
  ThankYouSlide,
];

const Presentation = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (dir: number) => {
      setCurrent((prev) => {
        const next = prev + dir;
        if (next < 0 || next >= slides.length) return prev;
        setDirection(dir);
        return next;
      });
    },
    []
  );

  // Keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go]);

  // Touch swipe
  useEffect(() => {
    let startX = 0;
    const touchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };
    const touchEnd = (e: TouchEvent) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) go(diff > 0 ? 1 : -1);
    };
    window.addEventListener("touchstart", touchStart);
    window.addEventListener("touchend", touchEnd);
    return () => {
      window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchend", touchEnd);
    };
  }, [go]);

  const SlideComponent = slides[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-50%" : "50%", opacity: 0 }),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      <ParticleBackground />
      <SlideProgress current={current} total={slides.length} />
      <BNBBadge />

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 z-10"
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Nav buttons */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <button
          onClick={() => go(-1)}
          disabled={current === 0}
          className="p-2 rounded-full bg-secondary/80 backdrop-blur-sm text-foreground hover:bg-secondary transition-all disabled:opacity-20 border border-border"
        >
          <ChevronLeft size={18} />
        </button>
        <span className="text-xs text-muted-foreground font-body tabular-nums">
          {current + 1} / {slides.length}
        </span>
        <button
          onClick={() => go(1)}
          disabled={current === slides.length - 1}
          className="p-2 rounded-full bg-secondary/80 backdrop-blur-sm text-foreground hover:bg-secondary transition-all disabled:opacity-20 border border-border"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Presentation;
