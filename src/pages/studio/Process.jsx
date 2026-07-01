import { motion } from "framer-motion";

export default function Process() {
return ( <main className="min-h-screen bg-[#120F18] px-8 py-32 text-white"> <div className="mx-auto max-w-6xl">

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mb-6 text-sm uppercase tracking-[0.45em] text-pink-300"
    >
      The Process
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-6xl md:text-8xl font-light leading-tight"
    >
      Chaos first.
      <br />
      Structure later.
    </motion.h1>

    <p className="mt-12 max-w-3xl text-lg leading-9 text-gray-400">
      Every project starts as scattered notes,
      screenshots, sketches and ideas.
      Somewhere between the chaos,
      a story slowly begins to appear.
    </p>

    <div className="mt-24 space-y-12">
      <div className="rounded-[40px] border border-white/10 bg-white/5 p-12">
        <h3 className="text-3xl text-pink-200">
          01 — Curiosity
        </h3>
        <p className="mt-6 text-gray-400">
          Every project begins with a question.
        </p>
      </div>

      <div className="rounded-[40px] border border-white/10 bg-white/5 p-12">
        <h3 className="text-3xl text-pink-200">
          02 — Exploration
        </h3>
        <p className="mt-6 text-gray-400">
          Research, sketches, references and prototypes.
        </p>
      </div>

      <div className="rounded-[40px] border border-white/10 bg-white/5 p-12">
        <h3 className="text-3xl text-pink-200">
          03 — Creation
        </h3>
        <p className="mt-6 text-gray-400">
          Ideas become something real.
        </p>
      </div>
    </div>

  </div>
</main>

);
}
