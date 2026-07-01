import { motion } from "framer-motion";

export default function FinalChapter() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-8 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-light mb-8">
          Let's connect.
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg leading-8 mb-16">
          Projects, ideas, collaborations —
          I'm always open to interesting conversations.
        </p>

        {/* Links */}
        <div className="flex justify-center gap-6 flex-wrap">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gangu-gaheena-402947376/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-8 py-4
              rounded-full
              bg-white/5
              border border-pink-300/20
              backdrop-blur-xl
              hover:scale-105
              hover:border-pink-300/40
              hover:bg-white/10
              transition duration-300
            "
          >
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/YOUR-GITHUB"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-8 py-4
              rounded-full
              bg-white/5
              border border-pink-300/20
              backdrop-blur-xl
              hover:scale-105
              hover:border-pink-300/40
              hover:bg-white/10
              transition duration-300
            "
          >
            GitHub
          </a>

          {/* Email */}
          <a
            href="mailto:ggaheenaraj@gmail.com"
            className="
              px-8 py-4
              rounded-full
              bg-white/5
              border border-pink-300/20
              backdrop-blur-xl
              hover:scale-105
              hover:border-pink-300/40
              hover:bg-white/10
              transition duration-300
            "
          >
            Email
          </a>

        </div>

        {/* Footer Line */}
        <p className="mt-20 text-sm tracking-[0.3em] uppercase text-gray-500">
          Built with curiosity • creativity • and a little chaos
        </p>
      </motion.div>
    </section>
  );
}
