import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, Globe, DollarSign } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const pains = [
  { icon: DollarSign, title: "High Middleman Fees", desc: "Agencies take 30-50% cut from wall owners and advertisers" },
  { icon: AlertTriangle, title: "Trust & Fraud Issues", desc: "No proof of installation, payment disputes, zero accountability" },
  { icon: Globe, title: "Coordination Hassle", desc: "Wall owners, advertisers & installers can't connect directly" },
];

const ProblemSlide = () => (
  <motion.div
    variants={stagger}
    initial="hidden"
    animate="show"
    className="flex flex-col justify-center min-h-screen bg-gradient-purple-subtle px-6 sm:px-16 py-16"
  >
    <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl font-bold mb-2 text-gradient-bnb">
      The Problem
    </motion.h2>
    <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-10 max-w-xl font-body">
      Physical wall advertising is broken – dominated by middlemen, plagued by fraud, and inaccessible to local businesses.
    </motion.p>

    <div className="grid sm:grid-cols-3 gap-5 mb-12">
      {pains.map((p) => (
        <motion.div key={p.title} variants={fadeUp} className="bg-gradient-card rounded-xl p-6 hover:border-primary/30 transition-colors">
          <p.icon className="text-primary mb-3" size={28} />
          <h3 className="font-heading text-lg font-semibold mb-1">{p.title}</h3>
          <p className="text-sm text-muted-foreground font-body">{p.desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div variants={fadeUp} className="bg-gradient-card rounded-xl p-6 max-w-2xl">
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp className="text-primary" size={20} />
        <h3 className="font-heading text-lg font-semibold">Massive Market Opportunity</h3>
      </div>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-3xl font-heading font-bold text-gradient-bnb">$1.3B</p>
          <p className="text-xs text-muted-foreground font-body">India OOH Market (2024)</p>
        </div>
        <div>
          <p className="text-3xl font-heading font-bold text-gradient-bnb">$40B+</p>
          <p className="text-xs text-muted-foreground font-body">Global Outdoor Ads</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-4 font-body">
        Billions of idle walls worldwide. Local advertisers want cheap, direct access. Installers need reliable gigs.
        <span className="text-primary font-medium"> Wallmarks unlocks P2P monetization at scale.</span>
      </p>
    </motion.div>
  </motion.div>
);

export default ProblemSlide;
