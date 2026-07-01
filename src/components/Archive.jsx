import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const placeholders = [
  {
    id: "001",
    title: "StudyBuddy",
    subtitle:
      "A study companion application designed to make learning more organized, accessible, and engaging for students.",
    status: "Live",
    live: "https://ggaheenaraj-7.github.io/Studybuddy/",
    github: "https://github.com/ggaheenaraj-7/Studybuddy",
  },

  {
    id: "002",
    title: "SpotifyDupe",
    subtitle:
      "A Spotify-inspired music interface built to explore modern frontend development and responsive UI design.",
    status: "Live",
    live: "https://ggaheenaraj-7.github.io/spotifydupe/",
    github: "https://github.com/ggaheenaraj-7/spotifydupe",
  },
];

export default function Archive() {
  return (
    <section className="relative min-h-screen px-8 py-40">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <p className="mb-4 uppercase tracking-[0.4em] text-pink-300 text-sm">
            Selected Work
          </p>

          <h2 className="text-5xl md:text-7xl font-bold">
            The Archive
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-400">
            A growing collection of projects, experiments,
            and ideas brought to life.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-40">
          {placeholders.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -8 }}
              className={`group grid items-center gap-16 md:grid-cols-2 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Text */}
              <div>
                <p className="mb-4 text-sm tracking-[0.3em] text-pink-300">
                  {project.id}
                </p>

                <h3 className="mb-6 text-4xl md:text-5xl font-bold transition duration-500 group-hover:translate-x-3">
                  {project.title}
                </h3>

                <p className="text-lg leading-8 text-gray-400">
                  {project.subtitle}
                </p>

                <div className="mt-8 flex items-center gap-4 flex-wrap">

                  <span className="rounded-full border border-pink-300/20 bg-pink-300/10 px-4 py-2 text-sm text-pink-200">
                    {project.status}
                  </span>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-pink-300
                      transition duration-300
                      hover:translate-x-2
                      inline-block
                    "
                  >
                    Open Project →
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-gray-400
                      transition duration-300
                      hover:text-pink-300
                    "
                  >
                    GitHub ↗
                  </a>

                </div>
              </div>

              {/* Visual Card */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  h-[350px]
                  rounded-[40px]
                  border border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  flex items-center justify-center
                  transition duration-500
                  group-hover:border-pink-300/20
                  group-hover:bg-white/10
                  group-hover:scale-[1.02]
                "
              >
                <div className="text-center">
                  <p className="text-pink-200 text-3xl mb-4">
                    {project.title}
                  </p>

                  <p className="text-gray-500 text-sm">
                    {project.title === "StudyBuddy"
                      ? "Education • Productivity • Frontend"
                      : "Music • UI Clone • Frontend"}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}