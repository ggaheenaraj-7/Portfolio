import { motion } from "framer-motion";

export default function Chapter({ text }) {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center px-8">
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1 }}
        className="max-w-4xl text-center text-4xl font-light leading-relaxed text-gray-200 md:text-6xl"
      >
        {text}
      </motion.h2>
    </section>
  );
}