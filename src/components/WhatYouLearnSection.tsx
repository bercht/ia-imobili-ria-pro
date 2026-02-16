import { motion } from "framer-motion";
import { Layers, Instagram, Target, Video } from "lucide-react";

const items = [
  {
    icon: Layers,
    title: "A stack essencial do Novo Marketing Imobiliário",
    desc: "As únicas ferramentas que um corretor realmente precisa para gerar leads com consistência — sem gastar dinheiro com coisas inúteis.",
  },
  {
    icon: Instagram,
    title: "Como deve ser um Instagram que gera leads e converte em vendas",
    desc: "A estrutura exata de um perfil que atrai seguidores certos, gera conversas no direct e vira cliente — mesmo com poucos seguidores.",
  },
  {
    icon: Target,
    title: "A estratégia completa de captação de leads imobiliários",
    desc: "O funil completo que une Instagram, anúncios, landing page e e-mail marketing para gerar leads todos os dias.",
  },
  {
    icon: Video,
    title: "Vídeos com IA para anúncios que vendem",
    desc: "Ferramentas, workflow e uma demonstração prática de como criar um vídeo profissional com IA para rodar em anúncios.",
  },
];

const WhatYouLearnSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            O que você vai aprender nesta aula gratuita
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Em 2 hs, você vai entender o sistema completo de marketing imobiliário com Inteligência Artificial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://chat.whatsapp.com/I7ngoBpPLreERxt1DVOJBF?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-lg hover:brightness-110 transition-all"
          >
            Entrar no grupo do WhatsApp e garantir minha vaga
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
