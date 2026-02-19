import { motion } from "framer-motion";
import { Home, Megaphone, Wrench, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const actors = [
  {
    icon: Home,
    title: "Wall Owners",
    desc: "List space, earn passive rental income",
    color: "text-primary",
    bg: "from-primary/10 to-transparent",
  },
  {
    icon: Megaphone,
    title: "Advertisers",
    desc: "Post campaigns, get cheap local reach",
    color: "text-purple-accent",
    bg: "from-purple-accent/10 to-transparent",
  },
  {
    icon: Wrench,
    title: "Installers",
    desc: "Get matched jobs, guaranteed pay via escrow",
    color: "text-bnb-glow",
    bg: "from-bnb-glow/10 to-transparent",
  },
];

const SolutionSlide = () => (
  <motion.div
    variants={stagger}
    initial="hidden"
    animate="show"
    className="flex flex-col justify-center min-h-screen px-6 sm:px-16 py-16 bg-gradient-hero"
  >
    <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl font-bold mb-2 text-gradient-bnb">
      Our Solution
    </motion.h2>
    <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-12 max-w-xl font-body">
      A three-sided marketplace with built-in incentives – connecting wall owners, advertisers, and installers directly.
    </motion.p>

    <div className="grid sm:grid-cols-3 gap-6 mb-10">
      {actors.map((a, i) => (
        <motion.div
          key={a.title}
          variants={fadeUp}
          className={`relative bg-gradient-card rounded-xl p-6 text-center group hover:border-primary/30 transition-all`}
        >
          <div className={`mx-auto mb-4 w-14 h-14 rounded-full bg-gradient-to-b ${a.bg} flex items-center justify-center`}>
            <a.icon className={a.color} size={26} />
          </div>
          <h3 className="font-heading text-lg font-semibold mb-1">{a.title}</h3>
          <p className="text-sm text-muted-foreground font-body">{a.desc}</p>
          {i < 2 && (
            <ArrowRight className="hidden sm:block absolute -right-4 top-1/2 -translate-y-1/2 text-muted-foreground/30" size={20} />
          )}
        </motion.div>
      ))}
    </div>

    <motion.div variants={fadeUp} className="bg-gradient-card rounded-xl p-5 max-w-lg mx-auto text-center">
      <p className="text-sm text-muted-foreground font-body">
        <span className="text-primary font-semibold">Flywheel Effect:</span> More listings → more campaigns → more install jobs → stronger network effects → lower costs for all.
      </p>
    </motion.div>
  </motion.div>
);

export default SolutionSlide;
