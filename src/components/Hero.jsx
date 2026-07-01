import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import avatar from "../assets/avatar.png";

export default function Hero() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX - window.innerWidth / 2);
      setMouseY(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-8">

      {/* Background Glow */}
      <motion.div
        animate={{
          x: mouseX * 0.02,
          y: mouseY * 0.02,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
        className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-pink-400/20 blur-[150px]"
      />

      <motion.div
        animate={{
          x: -mouseX * 0.03,
          y: -mouseY * 0.03,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
        className="absolute right-0 bottom-20 h-[350px] w-[350px] rounded-full bg-purple-400/20 blur-[150px]"
      />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-300/10 blur-[220px]" />

      <div className="relative z-10 mx-auto max-w-7xl text-center">

        {/* Small Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 tracking-[0.35em] uppercase text-pink-300 text-sm"
        >
          Developer • Builder • Explorer
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-6xl font-bold leading-tight text-white md:text-8xl"
        >
          Imagine,
          <br />
          Create,
          <br />
          Evolve.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-gray-400"
        >
          A digital space for projects, experiments,
          and the journey behind building them.
        </motion.p>

        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="
            mx-auto mt-12 max-w-3xl
            rounded-3xl
            border border-pink-200/10
            bg-white/5
            px-8 py-8
            backdrop-blur-xl
            shadow-2xl shadow-pink-500/10
          "
        >
          <p className="text-sm uppercase tracking-[0.35em] text-pink-300">
            About Me
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-300">
            Hi, I'm GG.
          </p>

          <p className="mt-4 text-gray-400 leading-8">
            I collect ideas, stories, experiments and experiences.
            Some become sketches.
            Some become systems.
            Some become stories.
          </p>

          <p className="mt-6 text-pink-200">
            This space is where they live.
          </p>
        </motion.div>
    
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-20 text-pink-300"
        >
          ↓ Scroll to begin
        </motion.div>

      </div>
    </section>
  );
}
