import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Layers, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico Estratégico",
    description: "Análise profunda do seu negócio, público e objetivos para criar um plano sob medida.",
    number: "01",
  },
  {
    icon: Layers,
    title: "Arquitetura do Sistema",
    description: "Desenvolvemos toda a estrutura digital: landing pages, funis e automações.",
    number: "02",
  },
  {
    icon: Zap,
    title: "Automação e Tráfego",
    description: "Configuramos automações inteligentes e campanhas de tráfego pago estratégico.",
    number: "03",
  },
  {
    icon: TrendingUp,
    title: "Otimização Contínua",
    description: "Monitoramento constante e ajustes para maximizar resultados e ROI.",
    number: "04",
  },
];

const MethodSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="metodo" ref={ref} className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-xs sm:text-sm font-semibold text-primary tracking-wide uppercase mb-3 sm:mb-4 block">
            Nosso Processo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Como a <span className="gradient-text">Black Vision</span> trabalha
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Um método testado e refinado para transformar seu negócio em uma máquina de vendas previsível.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              <div className="glass-card p-5 sm:p-6 lg:p-8 h-full hover-lift relative overflow-hidden animated-border">
                {/* Number background */}
                <span className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 text-6xl sm:text-7xl lg:text-8xl font-bold text-border/30 group-hover:text-primary/10 transition-colors duration-500">
                  {step.number}
                </span>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="relative z-10 text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="relative z-10 text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
