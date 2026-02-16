import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://chat.whatsapp.com/I7ngoBpPLreERxt1DVOJBF?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-accent text-accent-foreground font-bold px-5 py-3.5 rounded-full shadow-lg hover:brightness-110 transition-all animate-pulse-glow text-sm md:text-base"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Entrar no grupo do aulão</span>
          <span className="sm:hidden">Entrar no grupo</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
