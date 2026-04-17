import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "Orbit_01",
    title: "Nebula Protocol",
    description: "Conceptual UI design for deep-space communication arrays and cosmic monitoring.",
    image: "https://picsum.photos/seed/nebula/800/600",
    offset: "md:translate-y-0"
  },
  {
    id: "Orbit_02",
    title: "Titan Nexus",
    description: "Digital ecosystem for interplanetary logistics and resource management platforms.",
    image: "https://picsum.photos/seed/titan/800/600",
    offset: "md:-translate-y-12"
  },
  {
    id: "Orbit_03",
    title: "Void Core",
    description: "Advanced visualization engine for dark matter data and void-space mapping.",
    image: "https://picsum.photos/seed/void/800/600",
    offset: "md:translate-y-8"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mb-16">
        <h2 className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">
          // Projects
        </h2>
        <h3 className="text-3xl font-bold text-white">
          Selected Technical Works
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="minimal-card p-6 flex flex-col justify-between group"
          >
            <div>
              <div className="aspect-video w-full overflow-hidden mb-6 rounded border border-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-mono font-bold text-lg text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <span className="font-mono text-[10px] text-text-muted border border-border px-2 py-1 rounded">
                  {project.id}
                </span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/40"></span>
                <span className="w-2 h-2 rounded-full bg-primary/20"></span>
              </div>
              <a
                href="#"
                className="font-mono text-xs text-primary hover:underline flex items-center gap-2"
              >
                View Details <ArrowRight size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
