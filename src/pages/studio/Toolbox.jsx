import { motion } from "framer-motion";

export default function Toolbox() {
return ( <main className="min-h-screen bg-[#120F18] px-8 py-32 text-white"> <div className="mx-auto max-w-6xl">

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mb-6 text-sm uppercase tracking-[0.45em] text-pink-300"
    >
      The Toolbox
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-6xl md:text-8xl font-light leading-tight"
    >
      The things
      <br />
      I create with.
    </motion.h1>

    <p className="mt-12 max-w-3xl text-lg leading-9 text-gray-400">
      Every creator has their tools.
      Mine range from code editors and design software
      to notebooks, playlists and browser tabs that
      somehow refuse to close.
    </p>

    <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        "VS Code",
        "React",
        "Tailwind",
        "AI Tools",
        "GitHub",
        "Krita"
      ].map((tool) => (
        <div
          key={tool}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <h3 className="text-2xl text-pink-200">{tool}</h3>
        </div>
      ))}
    </div>

  </div>
</main>
);
}
