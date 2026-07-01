import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl text-center"
      >
        <p className="mb-8 text-sm uppercase tracking-[0.45em] text-pink-300">
          Philosophy
        </p>

        <h2 className="text-4xl md:text-7xl font-light leading-[1.4] text-gray-100">
          We shape the things we create.
          <br />
          Eventually,
          <br />
          they begin shaping us.
        </h2>

        <p className="mx-auto mt-12 max-w-3xl text-xl leading-10 text-gray-400">
          Technologies evolve.
          Tools change.
          Trends disappear.
          Curiosity remains.
        </p>
      </motion.div>
    </section>
  );
}