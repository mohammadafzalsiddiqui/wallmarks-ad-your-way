import { motion } from "framer-motion";
import { Cpu, Zap, Shield, Link } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const features = [
  { icon: Zap, title: "Low Fees, Fast Tx", desc: "BNB Smart Chain / opBNB ideal for real-world micro-payments" },
  { icon: Shield, title: "Trustless Escrow", desc: "Smart contract handles trust – no oracles, no custody risk" },
  { icon: Cpu, title: "Real DePIN Utility", desc: "First trustless bridge between physical ads & blockchain" },
  { icon: Link, title: "Ecosystem Composability", desc: "Built for BNB ecosystem – composable with DeFi, NFTs, and more" },
];

const BNBChainSlide = () => (
  <motion.div
    variants={stagger}
    initial="hidden"
    animate="show"
    className="flex flex-col justify-center min-h-screen px-6 sm:px-16 py-16 bg-gradient-hero"
  >
    <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl font-bold mb-2 text-gradient-bnb">
      BNB Chain Integration
    </motion.h2>
    <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-10 max-w-xl font-body">
      Why BNB Chain is the perfect foundation for real-world advertising payments.
    </motion.p>

    <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mb-10">
      {features.map((f) => (
        <motion.div key={f.title} variants={fadeUp} className="bg-gradient-card rounded-xl p-6 hover:border-primary/30 transition-all">
          <f.icon className="text-primary mb-3" size={24} />
          <h3 className="font-heading text-base font-semibold mb-1">{f.title}</h3>
          <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div variants={fadeUp} className="bg-gradient-card rounded-xl p-6 max-w-3xl">
      <h3 className="font-heading text-lg font-semibold mb-3 text-primary">Innovation Highlight</h3>
      <div className="flex flex-col gap-2 text-sm text-muted-foreground font-body">
        <p>• Escrow contract on BSC – mock calls verified on <a href="#" className="text-primary hover:underline">BscScan ↗</a></p>
        <p>• No oracles needed – advertiser directly verifies proof & triggers release</p>
        <p>• Practical for non-crypto users – simple approve/dispute UX over complex DeFi</p>
        <p>• Real on-chain transactions demonstrated for hackathon submission</p>
      </div>
    </motion.div>
  </motion.div>
);

export default BNBChainSlide;
