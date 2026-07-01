import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[9999]
                 bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}