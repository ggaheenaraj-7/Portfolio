import { useState } from "react";
import ProjectsExplorer from "../components/work/ProjectsExplorer";
import SketchBoard from "../components/work/SketchBoard";
import StickyNotes from "../components/work/StickyNotes";

export default function WorkPage() {
  const [activeWindow, setActiveWindow] = useState("projects");

  return (
    <div className="min-h-screen bg-[#120F18] text-white px-8 py-32">

      <div
        className="
          mx-auto
          max-w-7xl
          overflow-x-hidden
          overflow-y-visible
          rounded-[40px]
          border border-pink-300/20
          bg-white/5
          backdrop-blur-2xl
        "
      >

        {/* Fake window header */}
        <div className="flex items-center gap-3 border-b border-white/10 px-6 py-4">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />

          <div className="mx-auto text-sm text-gray-400">
            GG Work OS
          </div>
        </div>

        <div className="grid md:grid-cols-[280px_1fr]">

          {/* Sidebar */}
          <div className="border-r border-white/10 p-8">

            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-pink-300">
              Favorites
            </p>

            <button
              onClick={() => setActiveWindow("projects")}
              className="
                mb-4
                w-full
                rounded-2xl
                px-5 py-4
                text-left
                transition
                hover:bg-white/10
              "
            >
              📁 Projects
            </button>

            <p className="mt-12 mb-6 text-sm uppercase tracking-[0.3em] text-pink-300">
              Explore
            </p>

            <button
              onClick={() => setActiveWindow("sketch")}
              className="
                w-full
                rounded-2xl
                px-5 py-4
                text-left
                transition
                hover:bg-white/10
              "
            >
              ✏ Sketch Board
            </button>

            <button
             onClick={() => setActiveWindow("notes")}
             className="
             mt-4
             w-full
             rounded-2xl
             px-5 py-4
             text-left
             transition
             hover:bg-white/10
             "
             >
            📝 Sticky Notes
            </button>

          </div>

          {/* Main Window */}
          <div className="min-h-[700px] p-8">

            {activeWindow === "projects" && (
              <ProjectsExplorer />
            )}

            {activeWindow === "sketch" && (
              <SketchBoard />
            )}

            {activeWindow === "notes" && (
             <StickyNotes />
            )}

          </div>

        </div>
      </div>
    </div>
  );
}