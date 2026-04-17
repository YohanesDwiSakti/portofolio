export default function Footer() {
  return (
    <footer className="w-full py-12 flex flex-col md:flex-row justify-between items-center border-t border-border px-8">
      <div className="font-mono font-bold text-sm text-white mb-6 md:mb-0 uppercase">
        Yohanes Dwi Sakti
      </div>
      
      <div className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-6 md:mb-0">
        © 2026 • Built with Precision
      </div>

      <div className="flex gap-6">
        {[
          { name: "Instagram", url: "https://www.instagram.com/yohanes.d.sakti.7" },
          { name: "LinkedIn", url: "https://www.linkedin.com/in/yohanes-dwi-sakti-44a004326/" },
          { name: "GitHub", url: "https://github.com/YohanesDwiSakti" }
        ].map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-text-muted hover:text-primary transition-colors"
          >
            {social.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
