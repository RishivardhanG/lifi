// src/components/Nav.jsx - Dynamic Island navbar
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "backdrop-blur-xl bg-slate-900/80 border border-slate-700 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <motion.div
        className="w-72 h-14 rounded-3xl flex items-center px-6 backdrop-blur-md bg-gradient-to-r from-slate-800/50 to-slate-900/50 hover:from-slate-700/70 hover:to-slate-800/70 cursor-pointer transition-all duration-300 border border-slate-700/50 hover:border-slate-500/50 shadow-2xl"
        onClick={() => setOpenMenu(!openMenu)}
        animate={{
          width: openMenu ? 96 : 72,
          height: openMenu ? 20 : 14,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex gap-6 text-xs font-medium text-slate-300"
            >
              <span>About</span>
              <span>How it works</span>
              <span>Applications</span>
              <span>Prototype</span>
            </motion.div>
          )}
          {!openMenu && (
            <motion.div
              animate={{ opacity: 1 }}
              className="text-sm font-semibold text-sky-400"
            >
              LiFi
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
}
