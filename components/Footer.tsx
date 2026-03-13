"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0d0b09" }} className="text-white border-t border-yellow-600">


        
      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Colonne 1 — Logo & Description */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-yellow-500 tracking-widest mb-2">
            ✦ CHEZ CLAUDE
          </h2>
          <div className="h-px w-16 bg-yellow-600 mb-5"></div>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Une expérience culinaire inoubliable au cœur de Paris.
            Cuisine du monde, raffinement et passion depuis 2014.
          </p>

          <p className="text-yellow-500 uppercase tracking-widest text-xs mb-4">Suivez-nous</p>
          <div className="flex gap-3">

            {/* Facebook */}
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "#1877F2" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300" style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>

            {/* X / Twitter */}
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "#000000", border: "1px solid #333" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "#010101", border: "1px solid #333" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
              </svg>
            </a>

          </div>
        </div>

        {/* Colonne 2 — Navigation */}
        <div>
          <h3 className="text-yellow-500 uppercase tracking-widest text-xs mb-2">
            ✦ Navigation
          </h3>
          <div className="h-px w-16 bg-yellow-600 mb-8"></div>
          <ul className="space-y-4">
            {[
              { label: "Accueil", href: "/" },
              { label: "Notre Menu", href: "/menu" },
              { label: "À Propos", href: "/apropos" },
              { label: "Réservation", href: "/reservation" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.href} className="flex items-center gap-3 group">
                <span className="text-yellow-600 text-xs group-hover:translate-x-1 transition-transform duration-300">▶</span>
                <Link href={link.href} className="text-gray-400 text-sm hover:text-yellow-500 transition duration-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 3 — Infos & Horaires */}
        <div>
          <h3 className="text-yellow-500 uppercase tracking-widest text-xs mb-2">
            ✦ Informations
          </h3>
          <div className="h-px w-16 bg-yellow-600 mb-8"></div>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 mt-0.5 text-base">📍</span>
              <div>
                <p className="text-yellow-500 uppercase tracking-widest text-xs mb-1">Adresse</p>
                <span className="text-gray-400">12 Rue des Saveurs<br />75001 Paris, France</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 text-base">📞</span>
              <div>
                <p className="text-yellow-500 uppercase tracking-widest text-xs mb-1">Téléphone</p>
                <span className="text-gray-400">+33 1 23 45 67 89</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 text-base">✉️</span>
              <div>
                <p className="text-yellow-500 uppercase tracking-widest text-xs mb-1">Email</p>
                <span className="text-gray-400">contact@chezclaude.fr</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      

      {/* Ligne dégradée dorée */}
      <div className="max-w-6xl mx-auto px-10">
        <div className="h-px bg-linear-to-r from-transparent via-yellow-600 to-transparent"></div>
      </div>

      {/* Copyright */}
      <div className="py-6 text-center">
        <p className="text-gray-600 text-xs tracking-widest uppercase">
          © 2024 Chez Claude &nbsp;✦&nbsp; Tous droits réservés &nbsp;✦&nbsp; Paris, France
        </p>
      </div>

    </footer>
  );
}