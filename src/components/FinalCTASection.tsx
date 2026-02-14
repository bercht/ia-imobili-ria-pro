import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Garanta sua vaga no aulão gratuito
          </h2>
          <p className="text-hero-muted text-lg mb-8">
            Entre no grupo para receber o link da aula, materiais e avisos importantes.
          </p>
          <a
            href="https://chat.whatsapp.com/SEU_LINK_AQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-lg px-8 py-4 rounded-lg hover:brightness-110 transition-all animate-pulse-glow"
          >
            <MessageCircle className="w-5 h-5" />
            Entrar no grupo do WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
