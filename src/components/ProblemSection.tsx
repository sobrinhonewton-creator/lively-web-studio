import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, TrendingDown, Users, Clock } from "lucide-react";
import problemImage from "@/assets/problem-chaos.png";

const problems = [
  { icon: TrendingDown, text: "Vendas inconsistentes todo mês" },
  { icon: Users, text: "Leads que nunca convertem" },
  { icon: Clock, text: "Tempo perdido com tarefas manuais" },
  { icon: AlertTriangle, text: "Zero previsibilidade no faturamento" },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problema" ref={ref} className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-dark" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm font-semibold text-primary tracking-wide uppercase mb-3 sm:mb-4 block"
            >
              O Diagnóstico
            </motion.span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              O problema não é
              <br />
              <span className="gradient-text">marketing.</span>
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-lg">
              Você já tentou tráfego pago, redes sociais, conteúdo... mas nada parece 
              funcionar de verdade. O problema real? <strong className="text-foreground">Sem sistema, não existe escala.</strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 sm:p-4 glass-card hover-lift"
                >
                  <div className="p-1.5 sm:p-2 rounded-lg bg-destructive/10 flex-shrink-0">
                    <problem.icon className="w-4 h-4 sm:w-5 sm:h-5 text-destructive" />
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground">{problem.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-destructive/5 blur-3xl rounded-3xl" />
            <img
              src={problemImage}
              alt="Caos sem sistemas digitais"
              className="relative rounded-2xl sm:rounded-3xl border border-border/50 shadow-xl w-full"
            />
            
            {/* Overlay badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-2 sm:py-3 glass-card border-destructive/30"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-destructive animate-pulse" />
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Improviso = Prejuízo</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
