import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Mail, Instagram, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" ref={ref} className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-primary/5 rounded-full blur-[100px] sm:blur-[150px]" />
      </div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-xs sm:text-sm font-semibold text-primary tracking-wide uppercase mb-4 sm:mb-6"
          >
            Vamos conversar
          </motion.span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Pronto para parar de
            <br />
            <span className="gradient-text">improvisar?</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12">
            Ative um sistema digital profissional e tenha previsibilidade nas vendas. 
            Fale com nossa equipe e descubra o melhor caminho para o seu negócio.
          </p>

          {/* Main CTA */}
          <motion.a
            href="https://wa.me/5573981068594"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-4 sm:py-5 bg-gold-gradient rounded-full text-primary-foreground font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-[0_0_60px_hsl(var(--gold)/0.5)] animate-pulse-glow"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>Falar no WhatsApp</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
          </motion.a>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-12"
          >
            <motion.a
              href="https://instagram.com/blackvision.br"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 sm:p-4 glass-card hover:border-primary/50 hover:gold-glow transition-all duration-300"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground hover:text-primary transition-colors" />
            </motion.a>

            <motion.a
              href="mailto:getblackvision.br@gmail.com"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 sm:p-4 glass-card hover:border-primary/50 hover:gold-glow transition-all duration-300"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground hover:text-primary transition-colors" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
