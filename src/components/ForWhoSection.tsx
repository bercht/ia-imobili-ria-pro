import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle } from "lucide-react";

const items = [
  "Posta no Instagram mas não recebe mensagens de clientes",
  "Depende de portais para conseguir leads",
  "Não sabe por onde começar no marketing digital",
  "Sente que está ficando para trás por não usar IA",
  "Quer vender mais imóveis com estratégia e automação",
];

const ForWhoSection = () => {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Este aulão é para você que:
          </h2>
        </motion.div>

        <ul className="space-y-4 mb-12">
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3 text-lg"
            >
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-hero-muted">{item}</span>
            </motion.li>
          ))}
        </ul>

        <div className="text-center">
          <a
            href="https://chat.whatsapp.com/SEU_LINK_AQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-lg hover:brightness-110 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Quero entrar no grupo do aulão
          </a>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
