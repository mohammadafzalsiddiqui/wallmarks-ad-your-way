import { motion } from "framer-motion";

interface SlideProgressProps {
  current: number;
  total: number;
}

const SlideProgress = ({ current, total }: SlideProgressProps) => (
  <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-secondary">
    <motion.div
      className="h-full bg-primary"
      initial={false}
      animate={{ width: `${((current + 1) / total) * 100}%` }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    />
  </div>
);

export default SlideProgress;
