import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://chat.whatsapp.com/SEU_LINK_AQUI";

const bullets = [
  "Evento 100% online e gratuito",
  "Método prático para corretores",
  "Conteúdo direto ao ponto",
  "Vagas limitadas no grupo",
];

const HeroSection = () => {
  return (
    <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative max-w-5xl mx-auto px-4 py-20 md:py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-block bg-accent/10 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-6 border border-accent/20">
            🔴 Aula ao vivo — 26 de fevereiro
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-4xl mx-auto">
            Aulão gratuito: como usar{" "}
            <span className="text-gradient">Inteligência Artificial</span>{" "}
            para gerar leads imobiliários todos os dias
          </h1>

          <p className="text-hero-muted text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Participe de uma aula online de 2 a 3 horas no dia 26 de fevereiro e descubra o método completo de marketing imobiliário com IA.
          </p>

          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10 text-sm md:text-base">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-hero-muted">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-lg px-8 py-4 rounded-lg hover:brightness-110 transition-all animate-pulse-glow"
          >
            <MessageCircle className="w-5 h-5" />
            Entrar no grupo do WhatsApp
          </a>

          <p className="text-hero-muted/70 text-sm mt-4">
            Entre no grupo para receber o link da aula, materiais e avisos importantes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
