import { motion } from "framer-motion";
import { Instagram, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 border-t border-border/50 relative">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-2xl font-bold tracking-tight inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="gradient-text">BLACK</span>
              <span className="text-foreground ml-1">VISION</span>
            </motion.a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Sistemas digitais, automação e tráfego estratégico.
              <br />
              Ativo desde <span className="text-foreground font-medium">2022</span>.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <motion.a
              href="https://instagram.com/blackvision.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ x: 4 }}
            >
              <Instagram className="w-4 h-4" />
              @blackvision.br
            </motion.a>

            <motion.a
              href="mailto:getblackvision.br@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ x: 4 }}
            >
              <Mail className="w-4 h-4" />
              Email
            </motion.a>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass-card hover:border-primary/50 transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5 text-muted-foreground" />
          </motion.button>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Black Vision. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
