import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Lock, UserCheck, Camera, CheckCircle, Coins, ChevronRight } from "lucide-react";

const steps = [
  { icon: Lock, title: "Lock Funds", desc: "Advertiser posts job & locks BNB in escrow smart contract", color: "text-primary" },
  { icon: UserCheck, title: "Accept & Match", desc: "Wall owner accepts → Installer matched/selected", color: "text-purple-accent" },
  { icon: Camera, title: "Install & Prove", desc: "Installer completes ad → uploads photo/video proof on-chain", color: "text-bnb-glow" },
  { icon: CheckCircle, title: "Review & Approve", desc: "Advertiser reviews proof → approves (or disputes)", color: "text-primary" },
  { icon: Coins, title: "Auto-Release", desc: "Funds auto-released to owner + installer (pre-set split)", color: "text-bnb-glow" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const EscrowSlide = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="flex flex-col justify-center min-h-screen px-6 sm:px-16 py-16 bg-gradient-purple-subtle"
    >
      <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl font-bold mb-2 text-gradient-bnb">
        Trustless Escrow Flow
      </motion.h2>
      <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-10 max-w-xl font-body">
        Click through each step. No platform holds funds – the advertiser has final authority, all enforced on-chain.
      </motion.p>

      {/* Step indicators */}
      <motion.div variants={fadeUp} className="flex items-center gap-1 sm:gap-2 mb-8 flex-wrap">
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs sm:text-sm font-body transition-all ${
              i === activeStep
                ? "bg-primary text-primary-foreground glow-bnb"
                : i < activeStep
                ? "bg-secondary text-primary"
                : "bg-secondary/50 text-muted-foreground"
            }`}
          >
            <span className="font-semibold">{i + 1}</span>
            <span className="hidden sm:inline">{s.title}</span>
          </button>
        ))}
      </motion.div>

      {/* Active step detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-card rounded-xl p-8 max-w-2xl flex items-start gap-5"
        >
          {(() => {
            const Icon = steps[activeStep].icon;
            return (
              <div className="shrink-0 w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                <Icon className={steps[activeStep].color} size={28} />
              </div>
            );
          })()}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-2">
              Step {activeStep + 1}: {steps[activeStep].title}
            </h3>
            <p className="text-muted-foreground font-body">{steps[activeStep].desc}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Next button */}
      <motion.button
        variants={fadeUp}
        onClick={() => setActiveStep((s) => Math.min(s + 1, steps.length - 1))}
        disabled={activeStep === steps.length - 1}
        className="mt-6 inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline disabled:opacity-30 disabled:cursor-not-allowed w-fit font-body"
      >
        Next Step <ChevronRight size={16} />
      </motion.button>

      <motion.div variants={fadeUp} className="mt-8 flex gap-3 flex-wrap">
        {["No custody risk", "Advertiser final authority", "On-chain enforcement"].map((t) => (
          <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-body text-primary border-glow-bnb">
            ✓ {t}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default EscrowSlide;
