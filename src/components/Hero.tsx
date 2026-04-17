import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="homepage" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="relative z-10 w-full grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <div className="mb-8">
            <h2 className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">
              // Biography
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Backend Developer<br />
              <span className="text-text-muted">Building Robust Systems</span>
            </h1>
          </div>
          
          <div className="max-w-md">
            <p className="text-white/80 font-mono text-sm leading-relaxed">
              I am <span className="text-white font-bold">Yohanes Dwi Sakti</span>, a Computer Science student at Binus University Malang specializing in Web Development with a core focus on Backend Engineering. Based in Malang, Indonesia, I am dedicated to building robust, scalable, and efficient systems that power modern digital experiences.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="minimal-card p-2 w-72 h-96 md:w-80 md:h-[450px] overflow-hidden">
            <img
              src="/fotoporto.jpeg"
              alt="Yohanes Dwi Sakti"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
