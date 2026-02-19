import { motion } from "framer-motion";
import { ExternalLink, Github, Zap } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HeroSlide = () => (
  <motion.div
    variants={stagger}
    initial="hidden"
    animate="show"
    className="flex flex-col items-center justify-center min-h-screen bg-gradient-hero px-6 text-center"
  >
    <motion.div variants={fadeUp} className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-body text-primary border-glow-bnb">
      <Zap size={14} /> Good Vibes Only Hackathon
    </motion.div>

    <motion.h1
      variants={fadeUp}
      className="font-heading text-6xl sm:text-8xl font-bold tracking-tight text-gradient-bnb mb-4"
    >
      Wallmarks
    </motion.h1>

    <motion.p
      variants={fadeUp}
      className="max-w-2xl text-lg sm:text-xl text-muted-foreground font-body leading-relaxed mb-2"
    >
      Trustless Physical Wall Ad Marketplace on BNB Chain
    </motion.p>

    <motion.p variants={fadeUp} className="text-sm text-muted-foreground font-body mb-8">
      Rent walls for advertising – powered by smart-contract escrow. No middlemen.
    </motion.p>

    <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-10">
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
        On-Chain Tx ↗
      </a>
    </motion.div>

    <motion.p variants={fadeUp} className="text-sm text-muted-foreground font-body">
      by <span className="text-foreground font-medium">Mohammad Afzal</span>{" "}
      <a href="https://twitter.com/afzaltwtss" target="_blank" rel="noreferrer" className="text-primary hover:underline">
        @afzaltwtss
      </a>
    </motion.p>
  </motion.div>
);

export default HeroSlide;
