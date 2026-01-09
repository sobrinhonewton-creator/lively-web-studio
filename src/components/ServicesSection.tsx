import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, GitBranch, Target, Rocket, Check, Star } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Site Profissional",
    price: "R$ 1.497",
    description: "Presença digital que converte visitantes em clientes.",
    features: ["Design personalizado", "Otimizado para SEO", "Responsivo", "Carregamento rápido"],
    highlighted: false,
  },
  {
    icon: GitBranch,
    title: "Funil Automatizado",
    price: "R$ 1.297",
    description: "Jornada completa do lead até a venda, no automático.",
    features: ["Landing pages", "E-mail marketing", "Automações", "Integração CRM"],
    highlighted: false,
  },
  {
    icon: Target,
    title: "Tráfego Pago",
    price: "R$ 997/mês",
    description: "Campanhas estratégicas no Meta Ads e Google Ads.",
    features: ["Gestão completa", "Copywriting", "Criativos", "Relatórios semanais"],
    highlighted: false,
  },
  {
    icon: Rocket,
    title: "Máquina de Vendas",
    price: "R$ 2.997",
    description: "Sistema completo para escalar seu negócio digital.",
    features: ["Site + Funil + Tráfego", "Consultoria estratégica", "Suporte prioritário", "Resultados garantidos"],
    highlighted: true,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-dark" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-primary tracking-wide uppercase mb-4 block">
            Soluções
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Escolha seu <span className="gradient-text">sistema ideal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções sob medida para cada fase do seu negócio. Comece simples ou vá direto ao resultado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className={`relative group ${service.highlighted ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {service.highlighted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold-gradient rounded-full text-xs font-semibold text-primary-foreground flex items-center gap-1 z-20"
                >
                  <Star className="w-3 h-3" fill="currentColor" />
                  Mais popular
                </motion.div>
              )}

              <div
                className={`glass-card p-8 h-full hover-lift relative overflow-hidden transition-all duration-500 ${
                  service.highlighted
                    ? "border-primary/50 gold-glow"
                    : "animated-border"
                }`}
              >
                {service.highlighted && (
                  <div className="absolute inset-0 bg-primary/5 animate-shimmer" />
                )}

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                    service.highlighted
                      ? "bg-gold-gradient text-primary-foreground"
                      : "bg-primary/10 group-hover:bg-primary/20"
                  }`}
                >
                  <service.icon className={`w-7 h-7 ${service.highlighted ? "" : "text-primary"}`} />
                </motion.div>

                {/* Title & Price */}
                <h3 className="relative z-10 text-xl font-bold mb-2">{service.title}</h3>
                <div className="relative z-10 mb-4">
                  <span className="text-3xl font-bold gradient-text">{service.price}</span>
                </div>
                <p className="relative z-10 text-muted-foreground text-sm mb-6">{service.description}</p>

                {/* Features */}
                <ul className="relative z-10 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href="https://wa.me/5573981068594"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative z-10 block w-full mt-8 py-3 rounded-xl font-semibold text-center transition-all duration-300 ${
                    service.highlighted
                      ? "bg-gold-gradient text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--gold)/0.4)]"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  }`}
                >
                  Solicitar
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
