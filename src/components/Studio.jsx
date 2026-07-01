import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const studioItems = [
{
title: "The Toolbox",
subtitle: "The things I create with.",
text: "VS Code, AI, design tools, notebooks, references, music playlists and far too many browser tabs.",
route: "/studio/toolbox",
},

{
title: "The Experiments",
subtitle: "Some ideas exist just because they can.",
text: "Small prototypes, strange concepts, visual explorations and projects that may never become products.",
route: "/studio/experiments",
},

{
title: "The Process",
subtitle: "Chaos first. Structure later.",
text: "Every project starts as scattered thoughts, screenshots, notes and unfinished sketches before becoming something real.",
route: "/studio/process",
},
];

export default function Studio() {
const navigate = useNavigate();

return ( <section className="relative min-h-screen px-8 py-40"> <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-28 text-center"
    >
      <p className="mb-5 text-sm uppercase tracking-[0.45em] text-pink-300">
        The Studio
      </p>

      <h2 className="text-5xl md:text-8xl font-light leading-tight">
        Where ideas become
        <br />
        something real.
      </h2>

      <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-400">
        This is the part nobody usually sees.
        The experiments, the failures, the notes,
        the prototypes and the thousands of tiny
        decisions hiding behind every finished project.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid gap-10 md:grid-cols-3">
      {studioItems.map((item, index) => (
        <motion.div
          key={index}
          onClick={() => navigate(item.route)}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1,
            duration: 0.8,
          }}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          className="
            group
            cursor-pointer
            rounded-[40px]
            border border-white/10
            bg-white/[0.03]
            p-12
            backdrop-blur-xl
            transition duration-500
            hover:border-pink-300/20
            hover:bg-white/[0.06]
          "
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-pink-300">
            {item.subtitle}
          </p>

          <h3 className="mb-8 text-4xl font-light text-white">
            {item.title}
          </h3>

          <p className="text-lg leading-8 text-gray-400">
            {item.text}
          </p>

          <div className="mt-10 text-pink-300 opacity-0 transition duration-300 group-hover:opacity-100">
            Enter Studio →
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>

);
}
