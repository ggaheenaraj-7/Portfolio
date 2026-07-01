import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#120F18] text-white px-8 py-32">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.45em] text-pink-300">
            Contact
          </p>

          <h1 className="text-6xl md:text-8xl font-light leading-tight">
            Let's talk.
          </h1>

          <p className="mt-12 max-w-3xl text-xl leading-10 text-gray-400">
            Whether it's an internship opportunity,
            a project, collaboration, or simply a conversation
            about technology, my inbox is always open.
          </p>
        </motion.div>

        {/* Contact Links */}
        <div className="space-y-12 mb-32">

          <a
            href="https://www.linkedin.com/in/gangu-gaheena-402947376/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex items-center justify-between
              border-b border-white/10
              pb-6
            "
          >
            <span className="text-4xl md:text-5xl font-light transition duration-300 group-hover:text-pink-300">
              LinkedIn
            </span>

            <span className="text-3xl text-gray-500 transition duration-300 group-hover:translate-x-3 group-hover:text-pink-300">
              →
            </span>
          </a>

          <a
            href="https://github.com/ggaheenaraj-7/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex items-center justify-between
              border-b border-white/10
              pb-6
            "
          >
            <span className="text-4xl md:text-5xl font-light transition duration-300 group-hover:text-pink-300">
              GitHub
            </span>

            <span className="text-3xl text-gray-500 transition duration-300 group-hover:translate-x-3 group-hover:text-pink-300">
              →
            </span>
          </a>

          <a
            href="mailto:ggaheenaraj@gmail.com"
            className="
              group
              flex items-center justify-between
              border-b border-white/10
              pb-6
            "
          >
            <span className="text-4xl md:text-5xl font-light transition duration-300 group-hover:text-pink-300">
              Email
            </span>

            <span className="text-3xl text-gray-500 transition duration-300 group-hover:translate-x-3 group-hover:text-pink-300">
              →
            </span>
          </a>

        </div>

        {/* Status Section */}
        <div className="grid gap-12 md:grid-cols-3">

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-pink-300">
              Status
            </p>

            <p className="text-2xl text-gray-200">
              Open to work
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-pink-300">
              Based in
            </p>

            <p className="text-2xl text-gray-200">
              Hyderabad
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-pink-300">
              Time zone
            </p>

            <p className="text-2xl text-gray-200">
              IST • (GMT+5:30)
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}