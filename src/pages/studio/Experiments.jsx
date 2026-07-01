import { motion } from "framer-motion";

export default function Experiments() {
return ( <main className="min-h-screen bg-[#120F18] px-8 py-32 text-white"> <div className="mx-auto max-w-6xl">

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mb-6 text-sm uppercase tracking-[0.45em] text-pink-300"
    >
      The Experiments
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-6xl md:text-8xl font-light leading-tight"
    >
      Some ideas exist
      <br />
      just because they can.
    </motion.h1>

    <p className="mt-12 max-w-3xl text-lg leading-9 text-gray-400">
      Not everything needs a purpose.
      Some projects begin with curiosity,
      survive on obsession,
      and become something unexpected.
    </p>

    <div className="mt-24 space-y-8">
      <div className="rounded-[40px] border border-white/10 bg-white/5 p-12 backdrop-blur-xl">
        <h3 className="text-3xl text-pink-200">
          Future Experiment #01
        </h3>

        <p className="mt-6 text-gray-400">
          Waiting for an idea to arrive.
        </p>
      </div>

      <div className="rounded-[40px] border border-white/10 bg-white/5 p-12 backdrop-blur-xl">
        <h3 className="text-3xl text-pink-200">
          Future Experiment #02
        </h3>

        <p className="mt-6 text-gray-400">
          Probably created at 2AM.
        </p>
      </div>
    </div>

  </div>
</main>

);
}
