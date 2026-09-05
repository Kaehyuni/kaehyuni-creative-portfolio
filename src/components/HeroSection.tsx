import { motion } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait.jpg";

const roles = ["Multimedia Designer", "Video Editor", "Animator", "Recording Engineer"];

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.03, duration: 0.5, ease: "easeOut" as const },
  }),
};

const HeroSection = () => {
  const name = "Kenny Nguyen";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-main noise-overlay">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/8 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-24 pb-16 relative z-10">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6"
          >
            Creative Portfolio
          </motion.p>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className={char === " " ? "inline" : "inline-block text-gradient glow-text"}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
          >
            {roles.map((role, i) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.15, duration: 0.4 }}
                className="px-4 py-1.5 rounded-full text-xs font-body tracking-wide text-primary/90 border border-primary/20 bg-primary/5"
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="text-muted-foreground font-body text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
          Student at University of Texas at Dallas, majoring in Art Technology Emerging Communication (General Concentration), minoring in Audio Production, and working toward a certification in Applied User Experience. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.5 }}
            className="mt-10 flex gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg font-heading text-sm font-medium bg-primary text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(213_94%_58%/0.5)] hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg font-heading text-sm font-medium border border-border text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 blur-xl" />
            <img
              src={heroPortrait}
              alt="Kenny Nguyen - Creative Portfolio"
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl glow-blue"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
