import { motion } from "framer-motion";
import { Award, Youtube, Bot, TrendingUp, Instagram } from "lucide-react";
import curtPhoto from "@/assets/curt-bercht.jpg";

const highlights = [
  { icon: TrendingUp, text: "Mais de 20 anos no mercado imobiliário" },
  { icon: Award, text: "Especialista em marketing digital para corretores" },
  { icon: Bot, text: "Criador de automações e sistemas com IA" },
  { icon: Youtube, text: "Canal no YouTube e presença ativa nas redes sociais" },
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Quem vai conduzir o aulão
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center text-center">
            <img src={curtPhoto} alt="Curt Bercht Neto" className="w-24 h-24 rounded-full object-cover mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-1">Curt Bercht Neto</h3>
            <p className="text-muted-foreground text-sm mb-6">Especialista em Marketing Imobiliário</p>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Curt Bercht é especialista em marketing imobiliário, com mais de 20 anos de experiência no mercado. Hoje atua ajudando corretores e imobiliárias a gerar leads, automatizar atendimento e vender mais utilizando inteligência artificial e estratégias digitais.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
              {highlights.map((h) => (
                <div key={h.text} className="flex items-center gap-3 text-sm text-foreground">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <h.icon className="w-4 h-4 text-accent" />
                  </div>
                  {h.text}
                </div>
              ))}
            </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/curtbercht/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@novomarketingimobiliario" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
