import { motion } from "framer-motion";

const placeholders = [
  {
    number: "01",
    title: "Untitled",
    subtitle: "Waiting for its story to begin."
  },
  {
    number: "02",
    title: "Untitled",
    subtitle: "Still hidden somewhere in imagination."
  },
  {
    number: "03",
    title: "Untitled",
    subtitle: "The next chapter has not arrived yet."
  }
];

export default function Collection() {
  return (
    <section className="relative min-h-screen px-8 py-40">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <p className="uppercase tracking-[0.5em] text-pink-300 text-sm mb-6">
            The Collection
          </p>

          <h2 className="text-6xl md:text-8xl font-light">
            Stories waiting
            <br />
            to be told.
          </h2>
        </motion.div>

        <div className="space-y-24">

          {placeholders.map((item, index) => (
  <motion.div
    key={item.number}
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="
      group relative overflow-hidden
      rounded-[40px]
      border border-white/10
      bg-white/[0.03]
      p-12
      backdrop-blur-xl
      transition-all duration-700
      hover:border-pink-300/20
      hover:bg-white/[0.05]
      hover:shadow-2xl
      hover:shadow-pink-500/10
    "
  >
    <div className="absolute right-10 top-4 text-[180px] font-bold text-white/[0.03]">
      {item.number}
    </div>

    <div className="relative z-10">
      <p className="mb-4 text-pink-300 tracking-[0.4em] text-sm">
        COLLECTION ENTRY
      </p>

      <h3 className="
        text-5xl md:text-7xl font-light
        transition duration-500
        group-hover:translate-x-4
      ">
        {item.title}
      </h3>

      <p className="
        mt-8 max-w-lg text-gray-400 text-lg
        transition duration-500
        group-hover:text-gray-300
      ">
        {item.subtitle}
      </p>

      <div className="
        mt-10 h-[1px] w-0
        bg-gradient-to-r from-pink-300 to-transparent
        transition-all duration-700
        group-hover:w-full
      "/>
    </div>
  </motion.div>
))}

        </div>

      </div>
    </section>
  );
}