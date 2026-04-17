import { motion } from "motion/react";
import { Phone, Mail, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">
            // Connection
          </h2>
          <h3 className="text-4xl font-bold text-white mb-4">
            Let's Build Something Robust
          </h3>
          <p className="text-text-muted max-w-lg mx-auto">
            Open for technical discussions, backend architecture consultations, or potential collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pt-12">
          <a 
            href="https://wa.me/6282232998744" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center mb-4 group-hover:border-primary transition-colors">
              <Phone size={20} className="text-primary" />
            </div>
            <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">WhatsApp</p>
            <p className="text-white font-mono text-sm">082232998744</p>
          </a>
          
          <a 
            href="mailto:dwisaktiyohanes@gmail.com" 
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center mb-4 group-hover:border-primary transition-colors">
              <Mail size={20} className="text-primary" />
            </div>
            <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">Email</p>
            <p className="text-white font-mono text-sm">dwisaktiyohanes@gmail.com</p>
          </a>

          <div className="flex flex-col items-center group">
            <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center mb-4 group-hover:border-primary transition-colors">
              <MapPin size={20} className="text-primary" />
            </div>
            <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">Location</p>
            <p className="text-white font-mono text-sm">Malang, Indonesia</p>
          </div>

          <a 
            href="https://www.linkedin.com/in/yohanes-dwi-sakti-44a004326/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center mb-4 group-hover:border-primary transition-colors">
              <Linkedin size={20} className="text-primary" />
            </div>
            <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">LinkedIn</p>
            <p className="text-white font-mono text-sm">Yohanes Dwi Sakti</p>
          </a>

          <a 
            href="https://github.com/YohanesDwiSakti" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center mb-4 group-hover:border-primary transition-colors">
              <Github size={20} className="text-primary" />
            </div>
            <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">GitHub</p>
            <p className="text-white font-mono text-sm">YohanesDwiSakti</p>
          </a>
        </div>
      </div>
    </section>
  );
}
