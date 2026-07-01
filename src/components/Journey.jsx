import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Curiosity Arrives",
    subtitle: "The beginning of questions.",
    description:
      "Programming, design, art, games, technology. This was the phase of exploring everything and trying everything. Most ideas never became more than folders and sketches, but that was never the point. The point was discovering the joy of creating."
  },
  {
    year: "2025",
    title: "Learning to Build",
    subtitle: "Curiosity became creation.",
    description:
      "The first websites. The first projects. The first bugs that took hours to solve and the first moments of realizing that building things was something worth chasing. Some ideas failed, some survived, and some became foundations."
  },
  {
    year: "2026",
    title: "Building the Collection",
    subtitle: "Ideas needed a home.",
    description:
      "Projects slowly became stories instead of folders on a hard drive. This portfolio became a living archive of experiments, unfinished ideas, lessons learned, and everything created along the way."
  },
  {
    year: "Next",
    title: "Still Unwritten",
    subtitle: "The story continues.",
    description:
      "AI. Cybersecurity. Design. Art. New worlds to explore, new questions to ask, and ideas that don't exist yet waiting for their first line of code."
  }
];

export default function Journey() {
  return (
    <section className="relative min-h-screen px-8 py-40">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 text-center"
        >
          <p className="uppercase tracking-[0.5em] text-pink-300 text-sm mb-6">
            The Journey
          </p>

          <h2 className="text-5xl md:text-7xl font-light leading-tight">
            A collection of
            <br />
            experiments,
            mistakes,
            <br />
            and moments that changed everything.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-24">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15
              }}
              className="
                grid
                md:grid-cols-[180px_1fr]
                gap-12
                border-b
                border-white/10
                pb-20
              "
            >
              {/* Year */}
              <div>
                <p className="text-pink-300 text-xl tracking-[0.3em]">
                  {item.year}
                </p>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl md:text-5xl font-light mb-4">
                  {item.title}
                </h3>

                <p className="text-pink-200 mb-6 text-lg">
                  {item.subtitle}
                </p>

                <p className="text-gray-400 leading-9 max-w-3xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
