import { motion } from "framer-motion";

const AfterSection = () => {
  return (
    <section className="section-padding bg-background border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
            E depois da aula?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            No final do aulão, você terá a oportunidade de entrar no curso completo{" "}
            <span className="font-semibold text-foreground">Novo Marketing Imobiliário com IA</span>, com condições especiais exclusivas para os participantes da aula.
          </p>
          <p className="text-muted-foreground text-lg">
            Sem pressão, sem compromisso.<br />
            A decisão será totalmente sua.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AfterSection;
