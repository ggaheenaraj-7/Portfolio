import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Connect", path: "/contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current < 50) {
        setVisible(true);
      } else {
        setVisible(current < lastScroll);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`
        fixed top-6 left-1/2 -translate-x-1/2 z-50
        transition-all duration-500
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}
      `}
    >
      <div
        className="
          flex gap-2
          rounded-full
          border border-pink-200/20
          bg-white/10
          backdrop-blur-2xl
          px-3 py-3
          shadow-lg shadow-pink-500/10
        "
      >
        {links.map((link) => {
          const active = location.pathname === link.path;

          return (
            <Link
              key={link.name}
              to={link.path}
              className={`
                rounded-full px-5 py-2 text-sm
                transition-all duration-300
                ${
                  active
                    ? "bg-pink-300/20 text-white shadow-lg shadow-pink-400/20"
                    : "text-pink-100 hover:bg-pink-300/20 hover:text-white"
                }
              `}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}