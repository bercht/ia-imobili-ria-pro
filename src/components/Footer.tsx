const Footer = () => {
  return (
    <footer className="bg-secondary text-hero-muted border-t border-border/10 py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-hero-muted/60">© 2025 Curt Bercht. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-secondary-foreground transition-colors">Termos de uso</a>
          <a href="#" className="hover:text-secondary-foreground transition-colors">Política de privacidade</a>
          <a href="#" className="hover:text-secondary-foreground transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
