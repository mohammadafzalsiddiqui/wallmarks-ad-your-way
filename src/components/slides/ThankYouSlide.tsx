import { motion } from "framer-motion";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import { ExternalLink, Github, Rocket } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };

const ThankYouSlide = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F0B90B", "#8B5CF6", "#FFFFFF"],
      });
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-hero px-6 text-center"
    >
      <motion.div variants={fadeUp} className="mb-4">
        <Rocket className="text-primary animate-float mx-auto" size={48} />
      </motion.div>

      <motion.h2 variants={fadeUp} className="font-heading text-5xl sm:text-6xl font-bold text-gradient-bnb mb-3">
        Thank You!
      </motion.h2>

      <motion.p variants={fadeUp} className="text-xl text-muted-foreground font-body mb-2">
        Thanks for the good vibes! Questions?
      </motion.p>

      <motion.p variants={fadeUp} className="text-lg font-heading font-semibold text-foreground mb-8 max-w-md">
        Let's turn every wall into income – built on BNB Chain 🚀
      </motion.p>

      <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-8">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110 transition-all glow-bnb"
        >
          <ExternalLink size={15} /> Live Demo
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary/80 transition-all border-glow-bnb"
        >
          <Github size={15} /> GitHub
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary/80 transition-all border border-border"
        >
          On-Chain Examples ↗
        </a>
      </motion.div>

      <motion.p variants={fadeUp} className="text-sm text-muted-foreground font-body">
        <span className="text-foreground font-medium">Mohammad Afzal</span> ·{" "}
        <a href="https://twitter.com/afzaltwtss" target="_blank" rel="noreferrer" className="text-primary hover:underline">
          @afzaltwtss
        </a>
      </motion.p>
    </motion.div>
  );
};

export default ThankYouSlide;
