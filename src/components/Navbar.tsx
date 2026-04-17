import { motion } from "motion/react";

export default function Navbar() {
  const navLinks = ["HOMEPAGE", "PROJECTS", "CERTIFICATES", "CONTACT"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-border flex justify-between items-center px-8 py-4">
      <div className="font-mono font-bold text-lg tracking-tight text-white uppercase">
        Yohanes Dwi Sakti
      </div>
      
      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="font-mono text-xs tracking-wider text-text-muted hover:text-primary transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="flex items-center w-24 justify-end">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      </div>
    </nav>
  );
}
