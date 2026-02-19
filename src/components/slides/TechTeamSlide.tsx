import { motion } from "framer-motion";
import { Code2, Github, User, Target } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const highlights = [
  { icon: Code2, text: "Clean, open-source code – easy to audit & deploy" },
  { icon: Github, text: "On-chain tx demonstrated with real hackathon usage" },
  { icon: Target, text: "Practical usability for non-crypto users" },
];

const TechTeamSlide = () => (
  <motion.div
    variants={stagger}
    initial="hidden"
    animate="show"
    className="flex flex-col justify-center min-h-screen px-6 sm:px-16 py-16 bg-gradient-purple-subtle"
  >
    <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl font-bold mb-2 text-gradient-bnb">
      Tech & Team
    </motion.h2>
    <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-10 max-w-xl font-body">
      Built lean. Built right. Focused on real-world impact.
    </motion.p>

    <div className="grid sm:grid-cols-3 gap-5 mb-10 max-w-3xl">
      {highlights.map((h) => (
        <motion.div key={h.text} variants={fadeUp} className="bg-gradient-card rounded-xl p-5">
          <h.icon className="text-primary mb-3" size={22} />
          <p className="text-sm text-muted-foreground font-body">{h.text}</p>
        </motion.div>
      ))}
    </div>

    <motion.div variants={fadeUp} className="bg-gradient-card rounded-xl p-6 max-w-lg flex items-center gap-5">
      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center shrink-0">
        <User className="text-primary" size={28} />
      </div>
      <div>
        <h3 className="font-heading text-xl font-bold">Mohammad Afzal</h3>
        <p className="text-sm text-muted-foreground font-body mb-1">
          Passionate about bridging real-world + blockchain solutions
        </p>
        <a href="https://twitter.com/afzaltwtss" target="_blank" rel="noreferrer" className="text-primary text-sm hover:underline font-body">
          @afzaltwtss
        </a>
      </div>
    </motion.div>

    <motion.div variants={fadeUp} className="mt-8 bg-gradient-card rounded-xl p-5 max-w-lg">
      <h4 className="font-heading text-sm font-semibold text-primary mb-2">Product-Market Fit</h4>
      <p className="text-sm text-muted-foreground font-body">
        Strong demand from idle wall owners + local SMBs who can't afford agency rates. Wallmarks provides the cheapest, most trustworthy channel for hyperlocal advertising.
      </p>
    </motion.div>
  </motion.div>
);

export default TechTeamSlide;
