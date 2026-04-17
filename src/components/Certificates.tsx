import { motion } from "motion/react";
import { Award, GraduationCap, Code, ExternalLink, Download, FileText } from "lucide-react";
import { certificates } from "../data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24">
      <div className="mb-16">
        <h2 className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">
          // Certifications
        </h2>
        <h3 className="text-3xl font-bold text-white">
          Academic & Technical Credentials
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="minimal-card p-6 flex flex-col group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="text-primary opacity-80">
                {cert.type === 'pdf' ? <FileText size={24} /> : <Award size={24} />}
              </div>
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
                {cert.id}
              </span>
            </div>

            <div className="relative aspect-video w-full overflow-hidden mb-6 rounded border border-border bg-surface-lighter group-hover:border-primary/50 transition-colors">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-bg/20 group-hover:bg-transparent transition-colors" />
            </div>

            <div className="flex-grow">
              <h4 className="font-bold text-lg text-white mb-1 group-hover:text-primary transition-colors line-clamp-1">
                {cert.title}
              </h4>
              <p className="font-mono text-[10px] text-primary/70 uppercase tracking-wider mb-4">
                {cert.subtitle}
              </p>
              <div className="space-y-1 mb-6">
                <p className="text-text-muted text-xs">
                  {cert.organization}
                </p>
                <p className="text-text-muted/50 text-[10px] font-mono">
                  {cert.date}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex justify-between items-center">
              <div>
                <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-1">Status</p>
                <p className="font-mono text-[10px] text-white uppercase tracking-widest">
                  {cert.achievement}
                </p>
              </div>
              <a 
                href={cert.file} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-surface hover:bg-primary/10 border border-border hover:border-primary/50 text-[10px] font-mono text-text-muted hover:text-primary transition-all rounded uppercase tracking-wider"
              >
                {cert.type === 'pdf' ? "Open PDF" : "Open Image"}
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

