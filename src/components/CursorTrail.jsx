import { useEffect, useState } from "react";

export default function CursorTrail() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      const star = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setStars((prev) => [...prev.slice(-12), star]);

      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== star.id));
      }, 800);
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998]">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute text-pink-300 animate-ping"
          style={{
            left: star.x,
            top: star.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          ✦
        </div>
      ))}
    </div>
  );
}