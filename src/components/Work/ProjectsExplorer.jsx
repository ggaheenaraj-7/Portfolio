import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "AlertSphere",
    description:
      "A modern alert and notification platform focused on clean UI, responsive design, and interactive user experiences.",
    status: "Live",
    live: "https://ggaheenaraj-7.github.io/AlertSphere/",
    github: "https://github.com/ggaheenaraj-7/AlertSphere",
  },

  {
    id: 2,
    name: "Cybersecurity Journey",
    description:
      "A collection of notes, labs, experiments and learning milestones while exploring cybersecurity.",
    status: "Learning",
  },

  {
    id: 3,
    name: "Future Project",
    description:
      "Currently waiting inside a notebook somewhere.",
    status: "Planning",
  },
];

export default function ProjectsExplorer() {
  const [selected, setSelected] = useState(projects[0]);

  return (
    <div className="grid md:grid-cols-[250px_1fr] gap-8">

      {/* Left Side - Project Files */}
      <div className="space-y-4">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setSelected(project)}
            className={`
              w-full
              rounded-2xl
              border
              p-5
              text-left
              transition-all
              ${
                selected.id === project.id
                  ? "border-pink-300/40 bg-pink-300/10"
                  : "border-white/10 bg-white/5 hover:border-pink-300/30 hover:bg-white/10"
              }
            `}
          >
            📁 {project.name}
          </button>
        ))}
      </div>

      {/* Right Side - Project Viewer */}
      <div
        className="
          rounded-3xl
          border border-white/10
          bg-white/5
          p-10
        "
      >
        <div className="flex items-center gap-4 mb-6 flex-wrap">
          <h2 className="text-4xl font-light text-white">
            {selected.name}
          </h2>

          <span
            className="
              rounded-full
              border border-pink-300/20
              bg-pink-300/10
              px-4 py-2
              text-sm
              text-pink-200
            "
          >
            {selected.status}
          </span>
        </div>

        <p className="text-gray-400 leading-8 mb-10">
          {selected.description}
        </p>

        {(selected.live || selected.github) && (
          <div className="flex gap-4 flex-wrap">

            {selected.live && (
              <a
                href={selected.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  border border-pink-300/20
                  bg-white/5
                  px-6 py-3
                  text-pink-300
                  transition
                  hover:bg-white/10
                "
              >
                Open Project →
              </a>
            )}

            {selected.github && (
              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  border border-pink-300/20
                  bg-white/5
                  px-6 py-3
                  text-pink-300
                  transition
                  hover:bg-white/10
                "
              >
                GitHub ↗
              </a>
            )}

          </div>
        )}
      </div>

    </div>
  );
}