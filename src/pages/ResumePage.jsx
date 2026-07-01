import { motion } from "framer-motion";

const sections = [
  "About",
  "Education",
  "Experience",
  "Skills",
  "Projects",
  "Contact",
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#120F18] text-white px-8 py-32">

      <div className="mx-auto max-w-7xl grid lg:grid-cols-[250px_1fr] gap-20">

        {/* Left Sticky Navigation */}
        <div className="hidden lg:block">
          <div className="sticky top-32">

            <h1 className="text-5xl font-light mb-4">
              Resume
            </h1>

            <p className="text-gray-400 mb-12 leading-8">
              Developer.
              <br />
              Builder.
              <br />
              Explorer.
            </p>

            <div className="space-y-4">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="
                    block
                    text-gray-400
                    transition
                    hover:text-pink-300
                  "
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-32">

          {/* Hero */}
          <section>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-light leading-tight"
            >
              GG
            </motion.h1>

            <p className="mt-8 max-w-2xl text-xl text-gray-400 leading-10">
              Building experiences, systems and stories
              one idea at a time.
            </p>

            <button
              className="
                mt-12
                rounded-full
                border border-pink-300/20
                bg-white/5
                px-8 py-4
                backdrop-blur-xl
                hover:border-pink-300/40
                transition
              "
            >
              Download Resume
            </button>
          </section>

          {/* About */}
          <section id="about">
            <p className="text-pink-300 uppercase tracking-[0.35em] text-sm mb-6">
              About
            </p>

            <h2 className="text-4xl font-light mb-8">
              Hi, I'm GG.
            </h2>

            <p className="text-gray-400 leading-9 max-w-3xl">
              I'm a developer interested in cybersecurity,
              creative technology and interactive experiences.
              I enjoy building systems, solving problems,
              and turning ideas into things that did not exist before.
            </p>
          </section>

          {/* Education */}
<section id="education">
  <p className="text-pink-300 uppercase tracking-[0.35em] text-sm mb-12">
    Education
  </p>

  <div className="space-y-8">

    {/* KLH */}
    <motion.div
      whileHover={{ y: -5 }}
      className="
        rounded-3xl
        border border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        transition-all duration-300
        hover:border-pink-300/30
        hover:bg-white/[0.07]
      "
    >
      <p className="text-pink-200 mb-3">
        2025 — 2029 (Expected)
      </p>

      <h3 className="text-2xl font-medium mb-2">
        Bachelor of Technology in Computer Science Engineering
      </h3>

      <p className="text-pink-300 mb-6">
        KLH University
      </p>

      <p className="text-gray-400 leading-8">
        Currently pursuing a Bachelor's degree in Computer Science
        Engineering with a focus on software development,
        problem-solving, and emerging technologies.
        Actively engaged in academic coursework,
        collaborative projects, and continuous skill
        development across various domains of computer science.
      </p>
    </motion.div>

    {/* Intermediate */}
    <motion.div
      whileHover={{ y: -5 }}
      className="
        rounded-3xl
        border border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        transition-all duration-300
        hover:border-pink-300/30
        hover:bg-white/[0.07]
      "
    >
      <p className="text-pink-200 mb-3">
        2023 — 2025
      </p>

      <h3 className="text-2xl font-medium mb-2">
        Intermediate Education (MPC)
      </h3>

      <p className="text-pink-300 mb-6">
        Sri Chaitanya Junior Kalasala
      </p>

      <p className="text-gray-400 leading-8 mb-6">
        Completed higher secondary education with a strong
        academic foundation in Mathematics, Physics, and Chemistry.
        Developed analytical thinking, quantitative reasoning,
        and problem-solving skills that continue to support
        my technical journey.
      </p>

    </motion.div>

    {/* School */}
    <motion.div
      whileHover={{ y: -5 }}
      className="
        rounded-3xl
        border border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        transition-all duration-300
        hover:border-pink-300/30
        hover:bg-white/[0.07]
      "
    >
      <p className="text-pink-200 mb-3">
        Completed 2023
      </p>

      <h3 className="text-2xl font-medium mb-2">
        Secondary School Education (Class X)
      </h3>

      <p className="text-pink-300 mb-6">
        Amravathi Talent High School
      </p>

      <p className="text-gray-400 leading-8 mb-6">
        Successfully completed secondary education with a
        commitment to academic excellence and continuous learning.
        Built a strong foundation in academics while developing
        discipline, curiosity, and consistency in learning.
      </p>

    </motion.div>

  </div>
</section>
            

          {/* Experience */}
<section id="experience">
  <p className="text-pink-300 uppercase tracking-[0.35em] text-sm mb-12">
    Experience
  </p>

  <motion.div
    whileHover={{ y: -5 }}
    className="
      rounded-3xl
      border border-white/10
      bg-white/5
      p-8
      backdrop-blur-xl
      transition-all duration-300
      hover:border-pink-300/30
      hover:bg-white/[0.07]
    "
  >
    <p className="text-pink-200 mb-3">
      2026 — Present
    </p>

    <h3 className="text-2xl font-medium mb-2">
      Open to Internship Opportunities
    </h3>

    <p className="text-pink-300 mb-6">
      Computer Science Engineering Student • Fresher
    </p>

    <p className="text-gray-400 leading-8">
      I am currently seeking internship opportunities where I can
      contribute, learn, and grow in a professional environment.
      My interests include software development, cybersecurity,
      web technologies, and building meaningful digital experiences.
    </p>

    <p className="text-gray-400 leading-8 mt-6">
      While I am at the beginning of my professional journey,
      I bring curiosity, adaptability, strong problem-solving skills,
      and a commitment to continuous learning. I am excited to
      collaborate with teams, work on real-world challenges,
      and gain practical industry experience.
    </p>

    <div className="mt-8 flex flex-wrap gap-3">
      <span className="rounded-full border border-pink-300/20 bg-pink-300/10 px-4 py-2 text-sm text-pink-200">
        Open to Internships
      </span>

      <span className="rounded-full border border-pink-300/20 bg-pink-300/10 px-4 py-2 text-sm text-pink-200">
        Open to Projects
      </span>

      <span className="rounded-full border border-pink-300/20 bg-pink-300/10 px-4 py-2 text-sm text-pink-200">
        Open to Collaboration
      </span>
    </div>
  </motion.div>
</section>

          {/* Skills */}
<section id="skills">
  <p className="text-pink-300 uppercase tracking-[0.35em] text-sm mb-12">
    Skills
  </p>

  <div className="space-y-12">

    {/* Programming Languages */}
    <div>
      <h3 className="text-2xl mb-6 text-pink-200">
        Programming Languages
      </h3>

      <div className="flex flex-wrap gap-4">
        {[
          "Java",
          "Python",
          "JavaScript"
        ].map((skill) => (
          <div
            key={skill}
            className="
              rounded-full
              border border-pink-300/20
              bg-white/5
              px-6 py-3
              backdrop-blur-xl
              transition-all duration-300
              hover:border-pink-300/40
              hover:bg-pink-300/10
              hover:-translate-y-1
            "
          >
            {skill}
          </div>
        ))}
      </div>
    </div>

    {/* Web Development */}
    <div>
      <h3 className="text-2xl mb-6 text-pink-200">
        Web Development
      </h3>

      <div className="flex flex-wrap gap-4">
        {[
          "HTML",
          "CSS",
          "React",
          "Tailwind CSS",
          "Framer Motion",
          "Vite"
        ].map((skill) => (
          <div
            key={skill}
            className="
              rounded-full
              border border-pink-300/20
              bg-white/5
              px-6 py-3
              backdrop-blur-xl
              transition-all duration-300
              hover:border-pink-300/40
              hover:bg-pink-300/10
              hover:-translate-y-1
            "
          >
            {skill}
          </div>
        ))}
      </div>
    </div>

    {/* Computer Science */}
    <div>
      <h3 className="text-2xl mb-6 text-pink-200">
        Computer Science
      </h3>

      <div className="flex flex-wrap gap-4">
        {[
          "Object-Oriented Programming",
          "Data Structures & Algorithms",
          "Problem Solving"
        ].map((skill) => (
          <div
            key={skill}
            className="
              rounded-full
              border border-pink-300/20
              bg-white/5
              px-6 py-3
              backdrop-blur-xl
              transition-all duration-300
              hover:border-pink-300/40
              hover:bg-pink-300/10
              hover:-translate-y-1
            "
          >
            {skill}
          </div>
        ))}
      </div>
    </div>

    {/* Cybersecurity */}
    <div>
      <h3 className="text-2xl mb-6 text-pink-200">
        Cybersecurity
      </h3>

      <div className="flex flex-wrap gap-4">
        {[
          "Networking Fundamentals",
          "Linux Fundamentals",
          "Cybersecurity Fundamentals"
        ].map((skill) => (
          <div
            key={skill}
            className="
              rounded-full
              border border-pink-300/20
              bg-white/5
              px-6 py-3
              backdrop-blur-xl
              transition-all duration-300
              hover:border-pink-300/40
              hover:bg-pink-300/10
              hover:-translate-y-1
            "
          >
            {skill}
          </div>
        ))}
      </div>
    </div>

    {/* Tools */}
    <div>
      <h3 className="text-2xl mb-6 text-pink-200">
        Tools & Platforms
      </h3>

      <div className="flex flex-wrap gap-4">
        {[
          "Git",
          "GitHub",
          "VS Code"
        ].map((skill) => (
          <div
            key={skill}
            className="
              rounded-full
              border border-pink-300/20
              bg-white/5
              px-6 py-3
              backdrop-blur-xl
              transition-all duration-300
              hover:border-pink-300/40
              hover:bg-pink-300/10
              hover:-translate-y-1
            "
          >
            {skill}
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

          {/* Projects */}
          <section id="projects">
            <p className="text-pink-300 uppercase tracking-[0.35em] text-sm mb-8">
              Projects
            </p>

            <div className="space-y-6">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-2xl mb-2">
                  GG Portfolio
                </h3>

                <p className="text-gray-400">
                  Currently Active
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-2xl mb-2">
                  Future Project
                </h3>

                <p className="text-gray-400">
                  Planning Stage
                </p>
              </div>

            </div>
          </section>

          {/* Contact */}
          <section id="contact">
            <p className="text-pink-300 uppercase tracking-[0.35em] text-sm mb-8">
              Contact
            </p>

            <div className="space-y-4 text-gray-300">
              <p>
                LinkedIn
              </p>

              <p>
                GitHub
              </p>

              <p>
                ggaheenaraj@gmail.com
              </p>
            </div>
          </section>

        </div>

      </div>

    </div>
  );
}
