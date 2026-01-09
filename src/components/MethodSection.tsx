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
    <section id="metodo" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-primary tracking-wide uppercase mb-4 block">
            Nosso Processo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Como a <span className="gradient-text">Black Vision</span> trabalha
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um método testado e refinado para transformar seu negócio em uma máquina de vendas previsível.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              <div className="glass-card p-8 h-full hover-lift relative overflow-hidden animated-border">
                {/* Number background */}
                <span className="absolute -top-4 -right-4 text-8xl font-bold text-border/30 group-hover:text-primary/10 transition-colors duration-500">
                  {step.number}
                </span>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <step.icon className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="relative z-10 text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="relative z-10 text-muted-foreground text-sm leading-relaxed">
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
