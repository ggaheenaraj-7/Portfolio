import { motion } from "framer-motion";

export default function AboutCreator() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl text-center"
      >
        <p className="mb-8 text-sm uppercase tracking-[0.45em] text-pink-300">
          About Me
        </p>

        <h2 className="text-4xl md:text-7xl font-light leading-[1.5] text-white">
          I collect ideas.
        </h2>

        <div className="mt-16 space-y-8 text-xl leading-10 text-gray-400">
          <p>Some become sketches.</p>

          <p>Some become systems.</p>

          <p>Some become stories.</p>

          <p>
            Some remain unfinished for years,
            waiting for the right moment.
          </p>

          <p className="pt-8 text-pink-200">
            This space is where they live.
          </p>
        </div>
      </motion.div>
    </section>
  );
}